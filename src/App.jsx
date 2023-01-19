import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return(
        <>
            <TwitterFollowCard isFollowing userName='MoureDev' name='Brais Moure'/>
            <TwitterFollowCard isFollowing={false} userName='MySQL' name='MySQL'/>
            <TwitterFollowCard isFollowing userName='carlosazaustre' name='Carlos Azaustre'/>
            <TwitterFollowCard isFollowing userName='FalconMasters' name='Carlos Arturo'/>
        </>
    )
}