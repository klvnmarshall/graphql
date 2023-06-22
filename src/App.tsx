import React, {useState} from 'react';
import './App.css';
import Dogs from "./components/Dogs";
import DogPhoto from "./components/DogPhoto";
import DelayedQuery from "./components/DelayedQuery";

function App() {

    const [selectedDog, setSelectedDog] = useState(null)

    // @ts-ignore
    function onDogSelected({target}) {
        setSelectedDog(target.value)
    }

    return (

    );

}

export default App;
