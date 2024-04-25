import { MonsterAction, MonsterType } from "../../monsterTypes";

export const MonsterReducer = (state: MonsterType[], action: MonsterAction) => {
  switch (action.type) {
    case "ADD_MONSTER":
      return [...state, action.payload];
    case "REMOVE_MONSTER":
      return state.filter(
        (monster: MonsterType) => monster.Id !== action.payload
      );
    default:
      return state;
  }
};
