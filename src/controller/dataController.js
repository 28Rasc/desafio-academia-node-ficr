require('dotenv').config();
import axios from 'axios'


const getAPI = async ( req, res) => {
    const github_username = '28rasc';

    const headers = {
            "Authorization": `${process.env.GIT_TOKEN}`
        }

    try {
        
        const url = `https://api.github.com/users/${github_username}`
        
        const gitAPI = await axios.get(`${url}`,{
            method: "GET",
            headers: headers,
        });

        const repoResponse = await axios.get(`${url}/repos`, {
            method: "GET",
            headers: headers,
        });
        
        const { name = login, html_url, bio, company, repos_url } = gitAPI.data;
        const repos = repoResponse.data
        
        const gitSchema = {
        name,
        html_url,
        bio,
        company,
        repos_url
        }

        return res.json({gitSchema,repos})

        } catch (error) {
            console.error(`Erro em datacontroller` , error)
        }

        
    }

module.exports = getAPI
    //getRepos( )