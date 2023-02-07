import axios from 'axios'

export const costApi = axios.create()

costApi.defaults.baseURL = process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_PRO_URL;

//* All request will wait 3 seconds before timeout
costApi.defaults.timeout = 3000

costApi.defaults.headers.common = {
    Accept: 'application/json',
}
costApi.defaults.withCredentials = false
