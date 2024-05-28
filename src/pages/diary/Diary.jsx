import { useState, useEffect, useRef } from 'react'
import './Diary.css'
import ApiService from '../../shared/services/ApiService'
import MissionCard from '../../shared/components/cards/MissionCard'
import CardRelation from '../../shared/components/cardRelation/CardRelation'
import { Autocomplete, TextField, Alert } from '@mui/material'

const Diary = () => {
  const [playableCharacters, setPlayableCharacters] = useState(null)
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const [selectedCharacterJournal, setSelectedCharacterJournal] = useState(null)
  const [selectedMission, setSelectedMission] = useState(null)

  const [selectedCharacterRelations, setSelectedCharacterRelations] = useState(null)
  const [selectedNpc, setSelectedNpc] = useState(null)

  const [allMissions, setAllMissions] = useState(null)
  const [allNpc, setAllNpc] = useState(null)

  const [alertMessage, setAlertMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState('success')

  const autoCompleteMissions = useRef(null)
  const autoCompleteCharacters = useRef(null)

  const apiService = new ApiService

  let missionsForFiltering = []
  let relationForFiltering = []

  useEffect(() => {
    const fetchAllPlayableCharacters = async () => {
      const playableCharacters = await apiService.getAllPlayers()
      setPlayableCharacters(playableCharacters.result)
    }

    fetchAllPlayableCharacters()
    .catch( error => console.error(error))
  },[])

  const handleCharacterChange = async (character) => {
    setSelectedCharacter(character)
    await getMissionJournal(character.id)
    await getRelationshipJournal(character.id)
    getAllMissions()
    getAllNpc()
  }

  const handleMissionChange = (event, newValue) => {
    setSelectedMission(newValue)
  }

  const handleNpcChange = (event, newValue) => {
    setSelectedNpc(newValue)
  }

  const getMissionJournal = async (character_id) => {
    const response = await apiService.getMissionJournalByPlayerId(character_id)
    if('message' in response) {
      setSelectedCharacterJournal(null)
      missionsForFiltering = []
    } else {
      missionsForFiltering = response.result
      setSelectedCharacterJournal(response.result)
    }
  }

  const getAllMissions = async () => {
    const response = await apiService.getAllMissions()
    const filtered = response.result.filter(mission => !missionsForFiltering.some(journal => journal.mission_id === mission.id));
    setAllMissions(filtered)
  }

  const getAllNpc = async () => {
    const response = await apiService.getAllNpc()
    const filtered = response.result.filter(npc => !relationForFiltering.some(relation => relation.npc_id === npc.id))
    setAllNpc(filtered)
  }

  const addMission = async () => {
    try{
      console.log(selectedCharacter, selectedMission)
      const body = {
        playable_character_id: selectedCharacter.id,
        mission_id: selectedMission.id,
        completed: 1
      }
      const response = await apiService.postMissionJournal(body)
      if(response.result.id) {
        setAlertMessage('Se asignó esta misión al jugador')
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        await getMissionJournal(selectedCharacter.id)
        setAllMissions(prevMissions => prevMissions.filter(mission => mission.id !== selectedMission.id));
        setSelectedMission(null)
        clearAutoCompleteMissions()
      } else {
        
      }
    } catch ( error ) {
      console.error( error )
    }
  }

  const addRelation = async () => {
    try{
      console.log(selectedCharacter, selectedMission)
      const body = {
        playable_character_id: selectedCharacter.id,
        npc_id: selectedNpc.id,
        relationship: 1
      }
      const response = await apiService.postPlayableCharacterJournal(body)
      if(response.result.id) {
        setAlertMessage('Se asignó esta relación al jugador')
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        await getRelationshipJournal(selectedCharacter.id)
        setAllNpc(prevNPC => prevNPC.filter(npc => npc.id !== selectedCharacter.id));
        setSelectedNpc(null)
        clearAutoCompleteCharacters()
      } else {
        
      }
    } catch ( error ) {
      console.error( error )
    }
  }

  const getRelationshipJournal = async (character_id) => {
    const response = await apiService.getPlayableCharacterJournalByPlayerId(character_id)
    if('message' in response) {
      setSelectedCharacterRelations(null)
      relationForFiltering = []
    } else {
      relationForFiltering = response.result
      setSelectedCharacterRelations(response.result)
    }
  }

  const clearAutoCompleteCharacters = () => {
    if (autoCompleteCharacters.current) {
      autoCompleteCharacters.current.clear();
    }
  };

  const clearAutoCompleteMissions = () => {
    if (autoCompleteMissions.current) {
      autoCompleteMissions.current.clear();
    }
  };

  return (
    <>
    {showAlert && (
      <div className='diary-alert-container'>
        <Alert severity={alertType}>{alertMessage}</Alert>
      </div>
    )}
    
    <div className='diary-container'>
      <div className='diary-players-half'>
        <section className='diary-title-section'>
          <h4 className='diary-players-title'>Jugadores</h4>
        </section>
        <section className='diary-players-list'>
          {playableCharacters !== null && playableCharacters.map((character, index) => (
            <div className='diary-player-pickable-name' onClick={() => handleCharacterChange(character)} key={index}>
              <span >{character.name}</span>
            </div>
          ))}
        </section>
      </div>
      <div className='diary-relation-half'>
        {selectedCharacter !== null && (
          <>
            <div className='diary-card-container' >
            {selectedCharacterJournal !== null && selectedCharacterJournal != 'Character has no missions assigned' && selectedCharacterJournal.map((mission, index) => (
              
                <MissionCard mission={mission} key={index}/>
              
            ))}
            </div>
            <div className='diary-autocomplete-container'>
              <Autocomplete
                ref={autoCompleteMissions}
                disablePortal
                id="combo-box-demo"
                options={allMissions}
                sx={{ width: 300, backgroundColor:'white', borderRadius:1 }}
                getOptionLabel={(option) => option.name} 
                onChange={handleMissionChange}
                renderInput={(params) => <TextField {...params} label="Misiones" />}
              />
              <button className='diary-complete-button' disabled={selectedMission === null} onClick={() => addMission()}>
                Agregar misión
              </button>
            </div>

            <div className='diary-card-container' >
            {selectedCharacterRelations !== null && selectedCharacterRelations != 'Character has no relations assigned' && selectedCharacterRelations.map((relation, index) => (
              
                <CardRelation relation={relation} key={index}/>
              
            ))}
            </div>
            <div className='diary-autocomplete-container'>
              <Autocomplete
                ref={autoCompleteCharacters}
                disablePortal
                id="combo-box-demo"
                options={allNpc}
                sx={{ width: 300, backgroundColor:'white', borderRadius:1 }}
                getOptionLabel={(option) => option.name} 
                onChange={handleNpcChange}
                renderInput={(params) => <TextField {...params} label="NPC's" />}
              />
              <button className='diary-complete-button' disabled={selectedNpc === null} onClick={() => addRelation()}>
                Agregar relación
              </button>
            </div>
            
          </>
        )}
      </div>
    </div>
    </>
  )
}

export default Diary