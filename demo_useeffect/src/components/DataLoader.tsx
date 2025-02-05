import { useState, useEffect } from "react"

function DataLoader() {
    // States
    const [posts, setPosts] = useState([]);


    
    // Syntax: useEffect(function, dependencies)
   useEffect( () => {

     // Funktion som ska köras - API hämtning
     const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data); 
            console.log(posts)
        } catch(error) {
            console.error("Error fatching")
        }
     }

     fetchData();

   }, [])// Dependancy array
   // En dependeacy array som är tom renderas endast intialt (moonterad = mounted)


return (
    <>
        <h1>Vi testar React useEffect och renderar en list</h1>
        <ul>
            {posts.map((post: {id: string, title: string}) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    </>
) 
    

}

export default DataLoader;