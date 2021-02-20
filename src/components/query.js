import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Cards, ContentCards } from './pages/home';

const ALL_FRUITS = gql`
  query allFruits {
    fruits {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      bloom
      maturation_fruit
      life_cycle
      description
      climatic_zone
      producing_countries {
        country
      }
    }
  }
`;

function fruits() {
  const { error, loading, data } = useQuery(ALL_FRUITS);
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    if (data) setFruits(data.fruits)
  }, [data])

  return (
    <ContentCards>
      {
        fruits.map((fruit) => {
          return (
            <Cards>
              <h1>{fruit.scientific_name}</h1>
              <h1>{fruit.tree_name}</h1>
              <h1>{fruit.fruit_name}</h1>
              <h2>{fruit.origin}</h2>
              <h2>{fruit.family}</h2>
              <p>{fruit.description}</p>
            </Cards>
          )
        })
      }
    </ContentCards>
  )
}

export default fruits;