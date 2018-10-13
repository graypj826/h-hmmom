import React, { Component } from "react";
import Nav from "../Nav/Nav.js";

class HomePage extends Component {
    constructor(){
        super(),
        this.state = {
            movies: {
                [1,2,3,4,5,6]
            }
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