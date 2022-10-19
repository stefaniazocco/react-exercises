import { useEffect, useState } from "react"

function useGithubUser(username){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username){
        setLoading(true)
        setError(null)
        
        try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()

        setData(json)
        } catch(error){
            setError(error)
            setData(null)
        } finally{
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchGithubUser(username)
    }, [username])

    return{
        data: data,
        loading: loading,
        error: error,
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