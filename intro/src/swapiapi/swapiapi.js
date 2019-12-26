import React from 'react';
import "./swapiapi.css";

class swapiApi extends React.Component{
    state={
        List:[
            {
                id:1,
                info:"https://swapi.co/api/people/1/?format=json",
                img:"https://starwars-visualguide.com/assets/img/characters/1.jpg",
            },

        ]
    }
}
        
/* 1 fetch 
v fetch  
const PR = new Promise
(res,rel)=>{
    res(data)
}

*/