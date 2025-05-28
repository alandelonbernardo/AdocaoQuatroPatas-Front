import client from 'src/services/http.js'

const AnimalService = {
  async listAll() {
    //GET http://127.0.0.1:8000/api/animals/index
    return await client.get('animals/index').then(( response) => {
      return response.data;
    }).catch(( error ) => {
      return error;
    })
  },

  async create(data){
    //POST http://127.0.0.1:8000/api/animals/create
    return await client.post('/animals/create', data).then(( response) => {
      alert('Usuário criado com sucesso!')
      return response;
    }).catch(( error ) =>{
      alert('Erro ao criar o usuário! ' + error.message)
      console.log('Deu ruim ao criar', error);
      return error;
    })
  },

  async update(id, data){
    //POST http://127.0.0.1:8000/api/animals/update/1
    return await client.post('/animals/update/' + id , data).then(( response ) => {
      alert('Animal atualizado com sucesso!')
      return response
    }).catch(( error ) => {
      alert('Erro ao atualizar o usuário! ' + error.message)
      console.log('Deu ruim ao atualizar', error);
      return error;
    })
  },

  async show(id){
    //GET http://127.0.0.1:8000/api/animals/show/1
    return await client.get(`/animals/show/${id}`).then((response) => {
      console.log('ANIMAL', response)
      return response;
    }).catch((error) => {
      alert('Erro ao obter o animal ' + id);
      return error;
    })
  },

  async deleting(id){
    // DELETE http://127.0.0.1:8000/api/animals/delete/1
    return await client.delete('/animals/delete/' + id).then((response) => {
      return response;
    }).catch((error) => {
      alert('Erro ao remover o animal ' + id)
      return error;
    })
  }

}

export default AnimalService
