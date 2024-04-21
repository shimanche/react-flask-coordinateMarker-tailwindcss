import axios from 'axios';


export const sendCoordinates = (xValues:string[],yValues:string[])=>{
  const data = {
    xValues,
    yValues
  }
  const apiUrl = 'http://localhost:8888/coordinate'
  return axios.post(apiUrl,data)
}
