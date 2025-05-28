import client from 'src/services/http.js'

const AdoptionService = {
  async listAll(){
    //GET http://127.0.0.1/api/adoptions/index
    return await client.get('adoptions/index').then(( response ) => {
      return response.data;
    }).catch(( error ) => {
      return error;
    })
  },

  async create(data){
    //POST http://127.0.0.1/api/adoptions/create
    return await client.post('/adoptions/create', data).then(( response ) =>{
      alert('Adoção criada com sucesso!')
      return response;
    }).catch(( error ) => {
      alert('Erro ao criar adoção! ' + error.message)
      console.log('Deu ruim ao criar', error);
    })
  },

  async update(id, data){
    //POST http://127.0.0.1:8000/api/adoptions/update/1
    return await client.post('/adoptions/update/' + id , data).then(( response ) => {
      alert('Adoção atualizada com sucesso!')
      return response
    }).catch(( error ) => {
      alert('Erro ao atualizar a adoção! ' + error.message)
      console.log('Deu ruim ao atualizar', error);
      return error;
    })
  },

  async show(id){
    //GET http://127.0.0.1/api/adoptions/show/1
    return await client.get(`/adoptions/show/${id}`).then(( response ) => {
      return response;
    }).catch(( error ) => {
      alert('Erro ao remover a adoção ' + id)
      return error;
    })
  },

  async deleting(id){
    //DELETE http://127.0.0.1/api/adoptions/delete/1
    return await client.delete('/adoptions/delete/' + id).then(( response ) => {
      return response;
    }).catch(( error ) => {
      alert('Erro ao deletar adoção ' + id)
      return error;
    })
  }
}

export default AdoptionService
