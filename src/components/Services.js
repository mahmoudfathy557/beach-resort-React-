import React, { Component } from 'react'
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaUmbrellaBeach,
} from 'react-icons/fa'
import Title from './Title'
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free ocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facere.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facere.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facere.',
      },
      {
        icon: <FaUmbrellaBeach />,
        title: 'ultimate beach view',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facere.',
      },
    ],
  }
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
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

export default Services
