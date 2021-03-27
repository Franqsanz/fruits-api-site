import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Cards, ContentCards, Li, Load, UlCard } from './pages/home';

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

  if (loading) return <Load>Árboles en camino...</Load>
  if (error) return <Load>¡UPS! Hubo un error en el pedido.</Load>

  return (
    <ContentCards>
      {
        fruits.map((fruit) => {
          return (
            <Cards key={fruit.scientific_name}>
              <div>
                <h1>{fruit.fruit_name}</h1>
                <UlCard>
                  <h2>Nombre Cientifico</h2>
                  <Li>
                    {fruit.scientific_name}
                  </Li>
                  <h2>Nombre del Árbol</h2>
                  <Li>
                    {fruit.tree_name}
                  </Li>
                  <h2>Origen</h2>
                  <Li>
                    {fruit.origin}
                  </Li>
                  <h2>Familia</h2>
                  <Li>
                    {fruit.family}
                  </Li>
                  <h2>Paises de Producción</h2>
                  <UlCard>
                    {fruit.producing_countries.map(p => {
                        return (
                          <>
                            <Li>{p.country}</Li>
                          </>
                        )
                      })}
                  </UlCard>
                </UlCard>
              </div>
              <h2>Descripción:</h2>
              <p>{fruit.description}</p>
            </Cards>
          )
        })
      }
    </ContentCards>
  )
}

export default fruits;