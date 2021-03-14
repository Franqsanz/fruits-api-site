import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Cards, ContentCards, H1Card, H2, Li, Load } from './pages/home';

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
                <H1Card>{fruit.fruit_name}</H1Card>
                <H2>Nombre Cientifico</H2>
                {' '}
                <Li>
                  {fruit.scientific_name}
                </Li>
                <H2>Nombre del Arbol</H2>
                {' '}
                <Li>
                  {fruit.tree_name}
                </Li>
                <H2>Origen</H2>
                {' '}
                <Li>
                  {fruit.origin}
                </Li>
                <H2>Familia</H2>
                {' '}
                <Li>
                  {fruit.family}
                </Li>
                <H2>Paises de Producción</H2>
                {' '}
                <Li>
                  {fruit.producing_countries.map(p => {
                    return (
                      <>
                        <li>{p.country}</li>
                      </>
                    )
                  })}
                </Li>
              </div>
              <h3>Descripcion:</h3>
              <p>{fruit.description}</p>
            </Cards>
          )
        })
      }
    </ContentCards>
  )
}

export default fruits;