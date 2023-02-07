import NavBar from "./NavBar.js";
import { postBucketCountry, postVisitedCountry, } from "../services/CountryService.js";

const CountryDetail = ({ selectedCountry, addToBucket, addToVisited, bucketList, visitedList }) => {


    const onBucketClick = () => {
        if(bucketList.filter(country => country.cca2 === selectedCountry.cca2).length === 0) {
            postBucketCountry(selectedCountry)
            .then(()=>{
            addToBucket(selectedCountry)
        })
        }
    }

    const onVisitedClick = () => {
        if(visitedList.filter(country => country.cca2 === selectedCountry.cca2).length === 0){
            postVisitedCountry(selectedCountry)
            .then(()=>{
            addToVisited(selectedCountry)
        })
        }
    }


    return (
        <>
            <NavBar/>
            {selectedCountry.name.common} <br></br>
            {selectedCountry.capital} <br>
            </br>
            {selectedCountry.flag}
            <button type="Submit" value='add-to-bucket' onClick={onBucketClick} >Bucket List</button>
            <button type="Submit" value='add-to-visited' onClick={onVisitedClick}>Visited List</button>
        </>
    );
}

export default CountryDetail;