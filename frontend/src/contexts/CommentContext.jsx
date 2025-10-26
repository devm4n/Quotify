import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CommentContext = createContext()

export const CommnetProvider = ({children}) =>{
    const [commentData,setCommentData]=useState()
    const [quoteData,setQuoteData]=useState()

    useEffect(()=>{
        const fetchComment = async ()=>{
            const response = await axios.get('http://localhost:8000/api/comment/')
            setCommentData(response.data)
            return response.data
        }
        const fetchQuote = async ()=>{
            const response = await axios.get('http://localhost:8000/api/quote/')
            setQuoteData(response.data)
            return response.data
        }
        fetchComment()
        fetchQuote()
    },[])

    return(
        <CommentContext.Provider value={{commentData,quoteData}}>
            {children}
        </CommentContext.Provider>
    )
}