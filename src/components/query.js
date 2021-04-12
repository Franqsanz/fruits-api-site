import { gql } from "@apollo/client";

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

const FILTER_FRUIT_ORI = gql`
  query filterFruitOri {
    filterFruitsOri(origin: "Asia") {
      id
      scientific_name
      tree_name
      fruit_name
      family
    }
  }
`;

export { ALL_FRUITS, FILTER_FRUIT_ORI };
