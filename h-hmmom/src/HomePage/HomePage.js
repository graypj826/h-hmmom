import React, { Component } from "react";
import Nav from "../Nav/Nav.js";

class HomePage extends Component {
    constructor(){
        super(),
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
                <Nav/>
                <div>
                    <Route exact path="/home/" render ={(props) => {
                        return(
                            <TodayFeature
                            {...props}
                            />
                        )
                    }}
                    />
                </div>
                <div>
                    <Route exact path="/calendar/" render ={(props) => {
                        return(
                            <Calendar
                            {...props}
                            />
                        )
                    }}
                    />
                </div>
                <div>
                    <Route exact path="/about/" render ={(props) => {
                        return(
                            <About
                            {...props}
                            />
                        )
                    }}
                    />
                </div>
                <div>
                    <Route exact path="/allFeatures/" render ={(props) => {
                        return(
                            <AllFeatures
                            {...props}
                            />
                        )
                    }}
                    />
                </div>
            </div>
        )
    }
}

export default HomePage;