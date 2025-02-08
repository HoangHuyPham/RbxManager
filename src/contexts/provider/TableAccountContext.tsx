import { createContext, Dispatch, ReactNode, Reducer, useReducer } from "react"
import { RowAccountData } from "../../components/TableAccount"

interface AccountInTableType {
    data : RowAccountData[],
    dispatch : Dispatch<Action>
}

interface Action {
    type: string,
    payload: RowAccountData | RowAccountData[] | string | string[]
}

const TABLE_ACTION = {
    ADD : "add",
    DELETE : "delete"
}

const TableAccountReducer : Reducer<RowAccountData[], Action> = (state = [], action)=>{
    switch (action?.type){
        case TABLE_ACTION.ADD : {
            const stateMapping = new Map(state.map(v=>[v.userName, v]))
            if (Array.isArray(action?.payload)){
                (action.payload as RowAccountData[]).map(v=>stateMapping.set(v.userName, v))
            }else{
                const item = action.payload as RowAccountData
                stateMapping.set(item.userName, item)
            }
            return [...Array.from(stateMapping.values())]
        }

        case TABLE_ACTION.DELETE : {
            if (Array.isArray(action?.payload)){
                const payloadSet = new Set(action.payload as string[])
                return [...state.filter(v=>payloadSet.has(v.userName))]
            }
            return [...state.filter(v=>v.userName != action.payload)]
        }
        default :
            return state
    }
}

const TableAccountContext = createContext<AccountInTableType>({} as AccountInTableType)

const TableAccountProvider : React.FC<{children : ReactNode}> = ({children})=>{
    const [data, dispatch] = useReducer(TableAccountReducer, [])
    return <>
        <TableAccountContext.Provider value={{data, dispatch}}>
            {children}
        </TableAccountContext.Provider>
    </>
}


export {
    TableAccountContext,
    TableAccountProvider,
    TABLE_ACTION,
}
export type { AccountInTableType }