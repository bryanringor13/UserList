import axios from 'axios';
import { API } from '../../service/api';
import { APP_ID } from '../../service/config';
import { SearchApiState } from '../metaTypes/search';

export const getSearchApi = (payload: { user_id: string}) => {
    return axios({
        method: 'GET',
        url: `${API.base}${API.user}${payload.user_id}`,
        headers: {
            'app-id': `${APP_ID}`
        }
    });
};