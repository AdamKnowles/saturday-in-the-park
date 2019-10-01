import React, { useEffect, useState } from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"


const MyItinerary = props => {
    //Create a state variabe for itinerary items - useState()
    const [itineraryList, setItineraryList] = useState([])
    const { isAuthenticated } = useSimpleAuth()

    //Create useEffect()

    useEffect(() => {
        //Fetch the data from localhost:8000/itineraryitems
        fetch("http://localhost:8000/itineraryitems", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
            }
        })
        //Convert to JSON
        .then(response => response.json())
        //Store itinerary items in state variable
        .then(setItineraryList)
    }, [])
    
     const deleteFromItinerary = (id) => {
        //Fetch the data from localhost:8000/itineraryitems
        fetch(`http://localhost:8000/itineraryitems/${id}`, {
            "method": "DELETE",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
            }
        })
        //Convert to JSON
        .then(() => {
            //Fetch the data from localhost:8000/itineraryitems
            fetch("http://localhost:8000/itineraryitems", {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
                }
            })
            //Convert to JSON
            .then(response => response.json())
            //Store itinerary items in state variable
            .then(setItineraryList)
        })
        //Store itinerary items in state variable
        
    }
    //Create html representation in JSX
    return (
        <>
            <h2>What I Want to Do on Saturday</h2>
            <ul>
                {
                    itineraryList.map((item) => {
                        return <li>
                            {item.attraction.name}: {item.starttime} <button onClick = {() => deleteFromItinerary(item.id)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default MyItinerary








