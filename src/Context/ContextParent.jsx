import { useReducer, createContext } from "react";
import { useEffect } from "react";

let object = JSON.parse(localStorage.getItem("dataStorage")) || [];

const initialState = {
  data: object,
  dataView: [],
  tempData: {}
};

const Reduce = (state, action) => {
  switch (action.type) {
    case "ADD-OBJECT":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "DELETE-ELEMENT":
      const deletion = state.data.filter(
        (elm) => elm.titulo !== action.payload
      );
      return {
        ...state,
        data: deletion,
      };
    case "COMPLETED-TASK":
      const completing = state.data.map((elm) =>
        elm.titulo === action.payload
          ? { ...elm, isCompleted: !elm.isCompleted }
          : elm
      );
      return {
        ...state,
        data: completing,
      };
    case 'VIEW-DATA':
      const  viewing = state.data.filter((elm) =>
        elm.titulo === action.payload 
      )
      return {
        ...state,
        dataView: viewing 
      }
    case "EDIT-DATA": {
      const  editing = state.data.filter((elm) =>
        elm.titulo === action.payload 
      )
      return {
        ...state,
        tempData: editing[0]
      }
    }
    case 'UPDATE-DATA':
      const index = state.data.findIndex((elm) => elm.id == action.payload.id)
      const updatedData = [...state.data];
      updatedData[index] = action.payload

      return {
        ...state,
        tempData: null,
        data: updatedData
      }
    default:
      return state;
  }
};

export const ContextStorage = createContext();
export function StorageProvider({ children }) {
  const [state, dispatch] = useReducer(Reduce, { data: object });

  useEffect(() => {
    localStorage.setItem("dataStorage", JSON.stringify(state.data));
  }, [state.data]);

  return (
    <ContextStorage.Provider value={{ state, dispatch }}>
      {children}
    </ContextStorage.Provider>
  );
}
