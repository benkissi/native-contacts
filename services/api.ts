import axios from 'axios'

export const fetchList = async () => {
    const headers = {
        // "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    }
    console.log('api code')
    const url = `http://www.mocky.io/v2/5c41920e0f0000543fe7b889`
    const res = await axios.get(url,{headers})
    return res.data
    
}