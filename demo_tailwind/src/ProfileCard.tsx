
type ProfileCardProps = {
    name: string;
    img: string;
    skills: string;
    city: string,
    born: number;
}


function ProfileCard({name, img, skills, city, born}: ProfileCardProps) {

     // logik

     const age = new Date().getFullYear() - born;

     


    return (
        <article className="flex flex-col justify-center items-center gap-3 bg-gray-200 p-4 rounded-md mb-2">
            <h1 className="text-xs font-bold">{name}</h1>
            <img className="w-24 h-auto rounded-full" src={img}/>
            <p className="text-xs"> Skills {skills}</p>
            <p className="text-xs"> City {city}</p>
            <p className="text-xs"> Age {age}</p>
        </article>
    )

}


export default ProfileCard;