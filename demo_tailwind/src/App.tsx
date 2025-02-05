import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'
function App() {

  return (
    <>
        <ProfileCard  name="John Doe" img="https://avatar.iran.liara.run/public/boy" skills="React, Typescript"  city ="Stockholm" born={1991}  />
        <ProfileCard  name="Jane Doe" img="https://avatar.iran.liara.run/public/girl" skills="Vue, Typescript"  city ="Åbo" born={1990}  />
        <ProfileCard  name="Kalle" img="https://avatar.iran.liara.run/public/boy" skills="Svelte, Typescript"  city ="Götebord" born={1989}  />

    </>
  )
}

export default App
