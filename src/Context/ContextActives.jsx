import { useReducer, createContext } from "react";


const initialState = {
    activeAdd: false,
    activeView: false,
    activeEdit: false
}

const Reduce = (state, action) => {
    switch (action.type) {
        case "ACTIVE-ADD":
            return {
                ...state,
                activeAdd: !state.activeAdd,
                activeView: false
            }
        case "ACTIVE-VIEW":
            return {
                ...state,
                activeView: !state.activeView
            }
        case 'HIDE-ACTIVES': {
            return {
                initialState
            }
        }
 }
}
export const ContextActives = createContext()

export const  ActiveProvides = ({children})=> {
    const [state2, dispatch2] = useReducer(Reduce, initialState)

  return (
      <ContextActives.Provider value={{state2, dispatch2}}>
          {children}
        </ContextActives.Provider>
  )
}
