import React from 'react';
import {useFetch} from './hooks';


function Joke(){
    const {setup, punchline, type} = useFetch('https://official-joke-api.appspot.com/jokes/random',{});

    return (
        <div>
            <h3>Another Joke? </h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
            <p>What kind of joke is this? {type}</p>
        </div>
    )
}

export default Joke;


//-------Using Regular React Hooks-----------------------------//
// function Joke(){
//     const [joke, setJoke] = useState({});

//     useEffect(() => {
//         fetch('https://official-joke-api.appspot.com/jokes/random')
//         .then(res => res.json())
//         .then(json => {setJoke(json);
//         });
//     },[]);

//     const {setup, punchline , type} = joke;

//     return (
//         <div>
//             <h3>Another Joke? </h3>
//             <p>{setup}</p>
//             <p><em>{punchline}</em></p>
//     <p>What kind of joke is this? {}</p>
//         </div>
//     )
// }