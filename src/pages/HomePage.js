import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlocCook from '../components/BlocCook';

const HomePage = () => {
    let [cooks, setCooks]=useState([]);
    let [searchInput, setSearchInput]=useState("");
    
    // https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput
    
    const fetchCooks=()=>{
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s="+searchInput)
        .then((response)=>setCooks(response.data.meals));
    }
    
    useEffect(fetchCooks,[]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Cooking recipes</h1>
                <input 
                    type="text" 
                    id="searchInput" 
                    onChange={(e)=>setSearchInput(e.target.value)}
                    placeholder="Tappez le nom de la recette"
                />
            </header>
            <section className="cooks-container">
                {
                    cooks
                    .filter((cook)=>
                        cook.strMeal
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                    ).map((cook,index)=>(
                        <BlocCook key={index} c={cook}/>
                    ))
                    // <BlocCook  c={cooks}/>
                }
                    
                
                
                
                
            </section>
        </div>
    );
};

export default HomePage;