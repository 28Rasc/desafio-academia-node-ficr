import axios from 'axios'
import { async } from 'rxjs/internal/scheduler/async';

const github_username = '28rasc';
const gitApi = async function (req, res){


if (true){

            const apiResponse = await axios.get(`https://api.github.com/users/${ github_username }`);
        
            const { name = login, avatar_url, bio } = apiResponse.data;
            
            console.log(bio)
}
}
gitApi()
