import React from "react"
import FeatureCard from "../FeatureCard/FeatureCard.jsx"

const AllFeatures = (props) => {
    const listAllFeatures = props.movies.map((feature, i) => {
        console.log(feature)
        return(
            <FeatureCard feature={feature} />
        )
    })
    return (
            <div>
                {listAllFeatures}
            </div>
    )
}

export default AllFeatures