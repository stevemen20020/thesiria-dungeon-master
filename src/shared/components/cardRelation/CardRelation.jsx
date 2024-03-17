import { useEffect, useState } from 'react'
import './CardRelation.css'
import ApiService from '../../services/ApiService'

const CardRelation = (props) => {
  const [relation, setRelation] = useState(null)
  const [relationValue, setRelationValue] = useState(0);

  const apiService = new ApiService()

  useEffect(() => {
    if('relation' in props){
      setRelation(props.relation)
      setRelationValue(props.relation.relationship)
    }
  },[props])

  const handleRelation = async (mode) => {
    let relationVariable = relationValue
    try {
      if (mode === 1) {
        setRelationValue(prevValue => Math.max(prevValue - 1, 0));
        relationVariable --
      } else if (mode === 2) {
        setRelationValue(prevValue => Math.min(prevValue + 1, 10));
        relationVariable ++
      } 
      const body = {
        relationship: relationVariable,
      }
      const response = await apiService.putRelation(relation.id, body)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='relation-card-container'>
      {relation && (
        <>
          <img src={relation.npc.image_reference} className='relation-card-image'/>
          <span>{relation.npc.name}</span>
          <div className='relation-card-spinner-container'>
            <span className='relation-card-span'>Relación: {relationValue}</span>
            <div className='relation-card-buttons-container'>
              <button className='relation-card-button' onClick={() => handleRelation(1)} disabled={relationValue === 1}>-</button>
              <button className='relation-card-button' onClick={() => handleRelation(2)} disabled={relationValue === 10}>+</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CardRelation