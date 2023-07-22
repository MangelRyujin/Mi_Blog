import { ContacForm } from "../components/ContactForm"
import { Social } from "../components/Social"
import { SectionMe } from "../components/Section_Me"
import { Tools } from "../components/Tools"
import { Works } from "../components/WordCards"


export function HomePage(){
    return(
        <div>
            <SectionMe/>
            <Tools/>
            <Works/>
            <ContacForm/>
            <Social/>
        </div>
        
        
        
        
    )
}

