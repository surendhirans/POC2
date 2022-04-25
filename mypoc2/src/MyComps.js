import { useParams } from "react-router-dom"

export const Surya=()=>{
    return(
        <>
        <h2>HI this is about agram foundation.</h2>
        </>
    )
}

export const News=()=>{
    const{sam}=useParams()
    return(
        <>
        <h2>News about the top actors in {sam}.</h2>
        </>
    )
}

export const Daily=()=>{
    const{katt}=useParams()
    return(
        <>
        <h2>This is about a new foundation start behalf of actor{katt} .</h2>
        </>
    )
}