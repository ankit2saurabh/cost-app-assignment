import axios from 'axios'

export const costApi = axios.create()

costApi.defaults.baseURL = "https://engineering-task.elancoapps.com/api/";

//* All request will wait 3 seconds before timeout
costApi.defaults.timeout = 3000

costApi.defaults.headers.common = {
    Accept: 'application/json',
}
costApi.defaults.withCredentials = false
