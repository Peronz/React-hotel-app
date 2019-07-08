import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from  'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
      services:[
          {
              icon:<FaCocktail/>,
              title:"free cocktails",
              info:'Unlimited cocktails'
          },
          {
              icon:<FaHiking/>,
              title:"Mountain Hiking",
              info:'Hiking with local guide'
          },
          {
              icon:<FaShuttleVan/>,
              title:"Transportation",
              info:'Free transportation 24/7'
          },
          {
              icon:<FaBeer/>,
              title:"Great Beer",
              info:'Beer is good'
          }
      ]
  }  
  render() {
    return (
      <section className="services">

          <Title title='Services'/>
          <div className="services-center">
          {this.state.services.map((item, index) => {
              return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
              )
          })}
          </div>
      </section>
    )
  }
}