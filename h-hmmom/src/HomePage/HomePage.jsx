import React, { Component } from "react"
import { Route, Switch, Link } from "react-router-dom"
import Navigation from "../Navigation/Navigation.jsx";
import TodayFeature from "../TodayFeature/TodayFeature.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import About from "../About/About.jsx";
import AllFeatures from "../AllFeatures/AllFeatures.jsx";


class HomePage extends Component {
    constructor () {
        super();
        this.state = {
            movies: 
                [{title: "Haunter: the Art of the Haunt", 
                description: "test test test", 
                streaming:"Netflix", 
                poster:"hyperlink",
                year: 2018,
                hhmmomYear: 2018,
                number: 4     
                },
                {title: "the fly", 
                description: "fly fly fly", 
                streaming:"Hulu", 
                poster:"hyperlink",
                year: 2018,
                hhmmomYear: 2018,
                number: 5 },
                {title: "Candyman 2", 
                description: "candyman candyman candy...was it four or five?", 
                streaming:"Hulu", 
                poster:"hyperlink",
                year: 2018,
                hhmmomYear: 2018,
                number: 6 }
                ]
            
        }
    }
    render(){
        return(
            
            <div> 
                <h1> H-hmmom </h1>
                <Navigation/>
                <div>
                    <Route exact path="/home/" render ={(props) => {
                        return(
                            <TodayFeature
                            />
                        )
                    }}
                    />
                </div>
                <h1> Today Feature </h1>
                <TodayFeature movie={this.state.movies[1]}/>
                <h1> Calendar </h1>
                <Calendar movies={this.state.movies}/>
                <h1> All Features </h1>
                <AllFeatures movies={this.state.movies}/>
                {/* </div>
                <div>
                    <Route exact path="/calendar/" render ={(props) => {
                        return(
                            <Calendar
                            
                            />
                        )
                    }}
                    />
                </div>
                <div>
                    <Route exact path="/about/" render ={(props) => {
                        return(
                            <About
                            
                            />
                        )
                    }}
                    />
                </div>
                <div>
                    <Route exact path="/allFeatures/" render ={(props) => {
                        return(
                            <AllFeatures
                            />
                        )
                    }}
                    />
                </div>
                 */}
                <h1> wtf </h1>
            </div>

        )
    }
};

export default HomePage;