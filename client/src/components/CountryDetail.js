import { useState } from "react";
import { postCountry } from "../services/CountryService.js";
const CountryDetail = ({ selectedCountry, addToBucket, addToVisited }) => {


    // const [countryData, setCountryData] = useState({})

    const onClick = () =>{
        // setCountryData(selectedCountry)
        console.log(typeof addToBucket)
        postCountry(selectedCountry).then((data)=>{
            addToBucket(data);
        })

    }


    return (
        <>
            {selectedCountry.name.common} <br></br>

        
            {selectedCountry.capital} <br>

            </br>
            {selectedCountry.flag}
            <button type="Submit" value='add-to-bucket' onClick={() => onClick()} >Bucket List</button>
            <button type="Submit" value='add-to-visited' >Visited List</button>
            

        </>
    );
}

export default CountryDetail;