import { useState } from 'react';
import './App.css';

const data = [
  {
    title: 'React',
  },
  {
    title: 'Vue',
  },
  {
    title: 'Angular',
  },
  {
    title: 'Svelte',
  },
];


function App() {

  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  const searchData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  console.log("Data", data)
  console.log("Searched data" + searchData);
   
  return (
    <>
      <Search searchTerm={searchTerm} onSearch={handleSearchTerm}/>
      <List  list={searchData}/>
    </>
  );
}


type SearchTermProps = {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

function Search({onSearch, searchTerm}: SearchTermProps) {

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
 }

  return (
    <>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Sök"
        />
        <p>{searchTerm}</p>
    </>
  );
}


type ListProps = {
  list: { title: string }[];
};

function List({ list }: ListProps) {

  console.log(list);

  return (
    <ul>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </ul>
  );
}

export default App;
