const axios  = require('axios')

module.exports = {
  async create(request, response) {

    const { cep } = request.body;

    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    return response.json(result.data);

    
  },
};
