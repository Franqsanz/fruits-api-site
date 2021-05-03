import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Cards, ContentCards, Li, Load, UlCard } from "../styles/index";
import { ALL_FRUITS, FILTER_FRUIT_ORI } from "./query";

function Fruits() {
  const { error, loading, data } = useQuery(ALL_FRUITS);
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    if (data) setFruits(data.fruits);
  }, [data]);

  if (loading) return <Load>Árboles en camino...</Load>;
  if (error) return <Load>¡UPS! Hubo un error en el pedido.</Load>;

  return (
    <ContentCards>
      {fruits.map((fruit) => {
        return (
          <Cards key={fruit.id}>
            <div>
              <h1>{fruit.fruit_name}</h1>
              <UlCard>
                <h2>Nombre Cientifico</h2>
                <Li>{fruit.scientific_name}</Li>
                <h2>Nombre del Árbol</h2>
                <Li>{fruit.tree_name}</Li>
                <h2>Origen</h2>
                <Li>{fruit.origin}</Li>
                <h2>Familia</h2>
                <Li>{fruit.family}</Li>
                <h2>Floración</h2>
                <Li>{fruit.bloom || "Desconocido"}</Li>
                <h2>Maduración</h2>
                <Li>{fruit.maturation_fruit || "Desconocido"}</Li>
                <h2>Ciclo de vida</h2>
                <Li>{fruit.life_cycle || "Desconocido"}</Li>
                <h2>Zona climática</h2>
                <Li>{fruit.climatic_zone}</Li>
                <h2>Paises de Producción</h2>
                <UlCard>
                  {fruit.producing_countries.map((p) => {
                    return (
                      <>
                        <Li>{p.country}</Li>
                      </>
                    );
                  })}
                </UlCard>
                <h2>Descripción:</h2>
                <p>{fruit.description}</p>
              </UlCard>
            </div>
          </Cards>
        );
      })}
    </ContentCards>
  );
}

function FruitOri() {
  const { error, loading, data } = useQuery(FILTER_FRUIT_ORI);
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    console.log(data);
    // if (data) setFruits(data);
  }, [data]);

  return (
    <ContentCards>
      {/* {
        fruitOri.map((fruit) => {
          return (
            <Cards key={fruit.id}>
              <div>
                <li>{fruit.scientific_name}</li>
                <li>{fruit.tree_name}</li>
                <li>{fruit.fruit_name}</li>
                <li>{fruit.family}</li>
              </div>
            </Cards>
          )
        })
      } */}
    </ContentCards>
  );
}

export { Fruits, FruitOri };
