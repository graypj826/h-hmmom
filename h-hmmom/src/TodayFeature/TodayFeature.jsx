import React from "react"

const TodayFeature = ({movie}) => (
    <div>
        <h1> movie: {movie.title} </h1>
        <p> {movie.description} </p>
        <ul>
        <li> {movie.streaming} </li>
        <li> {movie.year} </li>
        </ul>
    </div>
)

export default TodayFeature;