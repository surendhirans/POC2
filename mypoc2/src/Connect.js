import axios from 'axios'

const url="http://localhost:8080"
  
export const deleting=async(object)=>{
  //alert("Axios found"+JSON.stringify(object))
  const t = await axios.delete(`${url}/del/${object.accountNumber}`)
  return t;
}

export const updating=async(object)=>{
  const t = await axios.put(`${url}/upacc`,object)
  return t;
}

export const stepIn=async(object)=>{
  const t=await axios.post(`${url}/login`,null,{params:{"cid":object.user,"ps":object.pass}})
  return t;
}

export const adding=async(object)=>{
    const t = await axios.post(`${url}/newacc`,object)
    return t;
}