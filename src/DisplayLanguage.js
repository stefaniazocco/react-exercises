import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const Strings = {
    en: {
        HELLO : "Hello, this is the English version"
    },
    it: {
        HELLO : "Ciao, questa è la versione italiana"
    }
}

export function DisplayLanguage(){
    const language = useContext(LanguageContext)
    return (
          <h1>{Strings[language].HELLO}</h1>
             
    )
}