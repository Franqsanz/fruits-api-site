import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Cards, ContentCards, Load } from './pages/home';

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
    if (data) setFruits(data.fruits);
  }, [data])

  if (loading) return <Load>Arboles en camino...</Load>
  if (error) return <Load>¡UPS! Hubo un error en el pedido.</Load>

  return (
    <ContentCards>
      {
        fruits.map((fruit) => {
          return (
            <Cards key={fruit.scientific_name}>
              <div>
                <h1>{fruit.fruit_name}</h1>
                <li>
                  Nombre Cientifico:
                  {' '}
                  {fruit.scientific_name}
                </li>
                <li>
                  Nombre del Arbol:
                  {' '}
                  {fruit.tree_name}
                </li>
                <li>
                  Origen:
                  {' '}
                  {fruit.origin}
                </li>
                <li>
                  Familia:
                  {' '}
                  {fruit.family}
                </li>
                {/* <h2>{fruit.scientific_name}</h2> */}
                {/* <h3>{fruit.tree_name}</h3> */}
                {/* <h4>{fruit.origin}</h4> */}
                {/* <h5>{fruit.family}</h5> */}
              </div>
              Descripcion:
              <p>{fruit.description}</p>
            </Cards>
          )
        })
      }
    </ContentCards>
  )
}

export default fruits;