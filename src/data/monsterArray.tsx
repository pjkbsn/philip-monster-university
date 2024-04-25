import monsters from "../monsters.json";
import { v4 as uuidv4 } from "uuid";

export const updatedMonster = monsters.map((m) => ({
  ...m,
  Id: uuidv4(),
}));
