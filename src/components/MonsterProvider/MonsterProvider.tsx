import { ReactNode, useReducer } from "react";
import { MonsterReducer } from "../MonsterReducer/MonsterReducer";
import { MonsterContext } from "../MonsterContext/MonsterContext";
import { monsterArray } from "../../monsterTypes";
// import { monsterArray } from "../../monsterTypes";

type MonsterProviderProps = {
  children: ReactNode;
};

export const MonsterProvider: React.FC<MonsterProviderProps> = ({
  children,
}) => {
  const [currentState, dispatch] = useReducer(MonsterReducer, monsterArray);

  return (
    <MonsterContext.Provider
      value={{
        currentMonster: currentState,
        dispatch,
      }}
    >
      {children}
    </MonsterContext.Provider>
  );
};
