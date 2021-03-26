import axios from 'axios';
import { API } from '../../service/api';
import { APP_ID } from '../../service/config';


export const allPerson = () => {
    return axios({
        method: 'GET',
        url: `${API.base}${API.user}`,
        headers: {
            'app-id': `${APP_ID}`
        }
    });
};