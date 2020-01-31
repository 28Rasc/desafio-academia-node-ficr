require('dotenv').config();
const axios = require('axios')


const getAPIs = async ( req, res) => {
    const github_username = '28rasc';

    const headers = {
            "Authorization": `${process.env.GIT_TOKEN}`
        }

        const url = `https://api.github.com/users/${github_username}`

    try {
        
        const fbAPI = await axios.get(process.env.FB_TOKEN)
        

        const gitAPI = await axios.get(`${url}`,{
            method: "GET",
            headers: headers,
        });

        const repoResponse = await axios.get(`${url}/repos`, {
            method: "GET",
            headers: headers,
        });
        
        const { name = login, html_url, bio, company, repos_url, } = gitAPI.data;
        const {email,birthday,gender}= fbAPI.data;
        
         const repos = repoResponse.data.map(repo => {
        let ReposUser = {
          size: repo.size,
          name: repo.name,
          url: repo.url
        }
        return ReposUser;
      });

      const ListRepo = repos.splice(0, 3).sort((a, b) => {
        if (a.size < b.size) return 1;
        if (a.size > b.size) return -1;
        return 0;
      });

        const schema = {
            "nome": name,
            "data_nascimento": birthday,
            "endereco": "",
            "email": email,
            "genero": gender,
            "bio": "Full Stack developer",
            "foto": "https://avatars2.githubusercontent.com/u/32085246?v=4",
            "formacao": [
            {
                "instituicao": "FICR",
                "curso": "SI",
                "inicio": "01/08/2017",
                "termino": "20/2/2020"
            }
            ],
            "experiencia_profissional": [
            {
                "empresa": "Bratecnet Tecnologia",
                "funcao": "Auxiliar de Manutenção",
                "atividade": "instalação e manutenção em rede de cabeamento estruturado, suporte ao cliente.",
                "inicio": "2014",
                "termino": "2016"
            },
            ],
            "github": {
            "perfil": html_url,
            "alguns_repositorios": [ListRepo]
        }
            }

        return res.json(schema)

        } catch (error) {
            console.error(`Erro interno` , error)
        }

        
    }

module.exports = getAPIs

