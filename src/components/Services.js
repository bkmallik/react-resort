import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Free Cocktails",
                info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
            },
            {
                icon:<FaShuttleVan />,
                title:"Free Shuttle",
                info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
                info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return(
                                <article key="index" className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            );
                        })}
                    </div>
            </section>
        )
    }
}
