class ApiService {

  //-------------------------------------------------------//
  //------------------GLOBAL VARIABLES---------------------//
  //-------------------------------------------------------//

  URL = `${import.meta.env.VITE_API_DEVELOPMENT}${import.meta.env.VITE_API_VERSION_1}`

  endpoints = {
    playable_character:'playable_character',
    mission_journal:'mission_journal',
    mission_fases: 'mission_fases',
    missions: 'missions',
    playable_character_journal: 'playable_character_journal',
    npc:'npc',
  }

  //-------------------------------------------------------//
  //------------------COMMO METHODS------------------------//
  //-------------------------------------------------------//

  getAllPlayers = async() => {
    try {
      const response = await fetch(`${this.URL}${this.endpoints.playable_character}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw { status: response.status, message:'Error' };
      }
      return response.json()
    } catch (error) {
      return error;
    }
  }

  getAllNpc = async() => {
    try {
      const response = await fetch(`${this.URL}${this.endpoints.npc}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw { status: response.status, message:'Error' };
      }
      return response.json()
    } catch (error) {
      return error;
    }
  }

  //-------------------------------------------------------//
  //------------------FUNCTIONS FOR AUTH-------------------//
  //-------------------------------------------------------//

  login = async () => {
    
  }


  //-------------------------------------------------------//
  //------------------FUNCTIONS FOR DIARY------------------//
  //-------------------------------------------------------//

  //---MISSIONS---//

  getAllMissions = async() => {
    try {
      const response = await fetch(`${this.URL}${this.endpoints.missions}`, {
        method: 'GET'
      })
      if (!response.ok) {
        throw {status: response.status, message:'Error' };
      }
      return response.json()
    } catch ( error ) {
      return error;
    }
  }

  getMissionJournalByPlayerId = async(playable_character_id) => {
    try {
      const response = await fetch(`${this.URL}${this.endpoints.mission_journal}?playable_character_id=${playable_character_id}`, {
        method: 'GET'
      })
      if (!response.ok) {
        throw {status: response.status, message:'Error' };
      }
      return response.json()
    } catch ( error ) {
      return error;
    }
  }

  postMissionJournal = async (body) => {
    try {
      const response = await fetch (`${this.URL}${this.endpoints.mission_journal}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if(!response.ok) {
        throw {status:response.status, message: 'Error'}
      }
      return response.json()
    } catch ( error ) {
      return error
    }
  }

  putMissionJournal = async(mission_journal_id, body) => {
    try {
      const response = await fetch(`${this.URL}${this.endpoints.mission_journal}/${mission_journal_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if (!response.ok) {
        throw {status: response.status, message:'Error' };
      }
      return response.json()
    } catch ( error ) {
      return error;
    }
  }

  putMissionFase = async(mission_fase_id, body) => {
    try {
      const response = await fetch(`${this.URL}${this.endpoints.mission_fases}/${mission_fase_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        throw {status: response.status, message:'Error' };
      }
      return response.json()
    } catch ( error ) {
      return error
    }
  }

  //---RELATIONS---//

  getPlayableCharacterJournalByPlayerId = async(playable_character_id) => {
    try {
      const response = await fetch(`${this.URL}${this.endpoints.playable_character_journal}?playable_character_id=${playable_character_id}`, {
        method: 'GET'
      })
      if (!response.ok) {
        throw {status: response.status, message:'Error' };
      }
      return response.json()
    } catch ( error ) {
      return error;
    }
  }

  postPlayableCharacterJournal = async (body) => {
    try {
      const response = await fetch (`${this.URL}${this.endpoints.playable_character_journal}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if(!response.ok) {
        throw {status:response.status, message: 'Error'}
      }
      return response.json()
    } catch ( error ) {
      return error
    }
  }

  putRelation = async(mission_relation_id, body) => {
    try {
      const response = await fetch(`${this.URL}${this.endpoints.playable_character_journal}/${mission_relation_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if (!response.ok) {
        throw {status: response.status, message:'Error' };
      }
      return response.json()
    } catch ( error ) {
      return error;
    }
  }
  
}

export default ApiService