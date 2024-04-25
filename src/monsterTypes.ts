// import monsters from "./monsters.json";

export type MonsterType = {
  Id: string;
  First_name: string;
  Last_name: string;
  Class: string;
  Program: string;
  Description: string;
};

export type MonsterContextType = {
  currentMonster: MonsterType[];
  dispatch: React.Dispatch<MonsterAction>;
};

export type MonsterAction =
  | { type: "ADD_MONSTER"; payload: MonsterType }
  | { type: "REMOVE_MONSTER"; payload: string };

// export const monsterArray = monsters;
