import React, { useEffect, useState } from 'react'
import './MissionCard.css'
import ApiService from '../../services/ApiService'

const MissionCard = (props) => {
  const [mission, setMission] = useState(null)

  const apiService = new ApiService()

  useEffect(() => {
    if('mission' in props){
      setMission(props.mission)
    }
  },[props])
  
  const completeMission = async() =>{
    try{
      const body = {
        completed: 2
      }
      const response = await apiService.putMissionJournal(mission.id, body)
      let aux = mission
      aux.completed = 2
      setMission(aux)
    } catch (error) {
      console.error(error)
    }
  }


  const updateMissionFaseStatus = async(isChecked, missionFase) => {
    const newStatus = isChecked ? 2 : 1; // Si está marcado, establece el estado a 2; de lo contrario, a 1
    const updatedMissionFases = mission.missions.mission_fases.map(fase => {
      if (fase.id === missionFase.id) {
        return { ...fase, active: newStatus };
      }
      return fase;
    });

    // Actualiza el estado de la misión
    setMission(prevMission => ({
      ...prevMission,
      missions: {
        ...prevMission.missions,
        mission_fases: updatedMissionFases
      }
    }));

    try{
      const body = {
        active: newStatus
      }
      const response = await apiService.putMissionFase(missionFase.id, body) 
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='mission-card-container'>
      {mission && (
        <>
          <h5 className='mission-card-title'>{mission.missions.name}</h5>
          <div className='mission-card-divider'></div>
          <span className='mission-card-span'>Dada por: {mission.missions.npc.name}</span>
          <div className='mission-card-fases-container'>
            {mission.missions.mission_fases.length > 0 && mission.missions.mission_fases.map((element, index) => (
              <div style={{display:'flex', flexDirection:'row', width:'100%'}} key={index}>
                <p className='mission-card-p'>- {element.description}</p>
                <input type='checkbox' 
                className='mission-card-checkbox' 
                onChange={(event) => {
                  updateMissionFaseStatus(event.target.checked, element)
                }}
                checked = {element.active === 2 ? true : false}/>
              </div>
              
            ))}
          </div>
          <div className='mission-card-compelte-button-container'>
            <button className='mission-card-complete-button' disabled = {mission.completed === 1 ? false : true} onClick={completeMission}>
              {mission.completed === 1 ? 'Completar misión' : 'Misión ya completada'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default MissionCard
