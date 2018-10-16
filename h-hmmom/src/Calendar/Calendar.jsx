import React from "react"
import FeatureCard from "../FeatureCard/FeatureCard.jsx"

const Calendar = (props) => {
    const createCalendar = props.movies.map((feature, i) => {
        console.log(feature)
        if(feature.hhmmomYear === 2018){
            return(
                <FeatureCard feature={feature} />
            )
        }
    })
    return (
            <div>
                {createCalendar}
            </div>
    )
}

export default Calendar