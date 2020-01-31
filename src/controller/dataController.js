require('dotenv').config();
import axios from 'axios'


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
        const repos = repoResponse.data
        const {email,birthday,gender}= fbAPI.data;
        

        const schema = {
            "nome": name,
            "data_nascimento": birthday,
            "endereco": "Rua fulano de tal, 256 - Pe",
            "email": email,
            "genero": gender,
            "bio": "Full Stack developer and Mobile developer",
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
      "perfil": "https://github.com/fulano",
      "alguns_repositorios": [
        {
          "size": repos[0].size,
          "name": repos[0].name,
          "url": repos[0].url
        },
        {
          "size": repos[6].size,
          "name":  repos[6].name,
          "url": repos[6].url
        },
        {
          "size": repos[5].size,
          "name": repos[5].name,
          "url": repos[5].url
        }
      ]
    }
        }

        return res.json(schema)

        } catch (error) {
            console.error(`Erro interno` , error)
        }

        
    }

module.exports = getAPIs

