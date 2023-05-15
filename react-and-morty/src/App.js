import React from "react";
import { useState } from "react"
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import StartingPage from "./components/startingPage/startingPage";
import Characters from "./components/characters/characters";
import Locations from "./components/locations/locations";
//import background from "../src/components/startingPage/wallpapersden.com_rick-and-morty-portal_3840x2160.jpg";

function App() {
  // const characters = useCharacters(1);
  // const locations = useLocations(1);

  // console.log("Characters data: ");
  // console.log(characters);
  // console.log("Locations data: ");
  // console.log(locations);
  const characters = useCharacters(2);
  const locations = useLocations(1);

  //console.log("Characters data: ");
  //console.log(characters);
  //console.log("Locations data: ");
  //console.log(locations);


  //const [backgroundImage, setBackgroundImage] = useState("./components/startingPage/wallpapersden.com_rick-and-morty-portal_3840x2160.jpg");

  return <>

    <BrowserRouter>

        <Routes>

          <Route path="/" element={<StartingPage />}>
          </Route>

          <Route path="/characters" element={<div className="character-bg"> <Characters details={characters} /> </div>   }>
          </Route>

          <Route path="/locations" element={<div className="ram_locations-bg"><Locations details={locations} /></div>}>
          </Route>


        </Routes>

    </BrowserRouter>
  </>;
}

export default App;
