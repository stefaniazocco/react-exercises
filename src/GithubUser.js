import { useEffect, useState } from "react"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json())

function useGithubUser(username){

    const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)
    
    return{
        data,
        loading: !data && !error,
        error,
    }
}

export function GithubUser({username}){

    const {data, loading, error} = useGithubUser(username)
    
    return <div>
        {loading && <h1>Loading ...</h1>}
        {error && <h1>There has been an error</h1>}
        {data && <h1>{data.name}</h1>}
    </div>
}