import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return(
        <>
            <TwitterFollowCard userName='MoureDev' name='Brais Moure'/>
            <TwitterFollowCard userName='MySQL' name='MySQL'/>
            <TwitterFollowCard userName='carlosazaustre' name='Carlos Azaustre'/>
            <TwitterFollowCard userName='FalconMasters' name='Carlos Arturo'/>
        </>
    )
}