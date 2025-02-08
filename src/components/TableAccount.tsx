import { useCallback, useEffect } from 'react';
import tableStyle from '../styles/table.module.css'
import { useTableAccountContext } from './../contexts';
import { TABLE_ACTION } from '../contexts/provider/TableAccountContext';



const TableAccount: React.FC<TableAccountProps> = ({ width }) => {
    const { data, dispatch } = useTableAccountContext()

    useEffect(() => {
        dispatch({
            type: TABLE_ACTION.ADD,
            payload: [
                { groupName: "test",isLoading: true, isSelected: false, isOnline: false, userName: "tester123", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", userName: "tester1923", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", isOnline: true, userName: "tester1273", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", userName: "tester1233", displayName: "TestTestTest", status: "In Game"},

                { groupName: "test",isLoading: true, isSelected: false, isOnline: false, userName: "tester4123", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", userName: "tesgter1923", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", isOnline: true, userName: "tes3ter1273", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", userName: "testzer1233", displayName: "TestTestTest", status: "In Game"},

                { groupName: "test",isLoading: true, isSelected: false, isOnline: false, userName: "tester41s23", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", userName: "tesgter51923", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", isOnline: true, userName: "tes3ter1273s", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", userName: "testzer15233", displayName: "TestTestTest", status: "In Game"},

                { groupName: "test",isLoading: true, isSelected: false, isOnline: false, userName: "testefr41s23", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", userName: "tesgterx51923", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", isOnline: true, userName: "tes3ter127h3s", displayName: "TestTestTest", status: "In Game"},
                { groupName: "test", userName: "testzerx15233", displayName: "TestTestTest", status: "In Game"},
            ]
        })
    }, [])

    return <>
        <span>Account selected: {data.filter(v=>v.isSelected != undefined && v.isSelected).length}</span>
        {
            (data?.length > 0) && (<table width={width}>
                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Username</th>
                        <th>Display Name</th>
                        <th>Status</th>
                        <th>Place ID</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((v, i) => <TableAccountRow key={i} {...v} />)
                    }
                </tbody>
            </table>)
            || <span className={tableStyle.span}>No data</span>
        }
    </>
}

const TableAccountRow: React.FC<RowAccountData> = (props) => {
    const { dispatch } = useTableAccountContext()

    const handleSelect = useCallback((data: RowAccountData) => {
        dispatch({
            type: TABLE_ACTION.ADD,
            payload: { ...data, isSelected: !data.isSelected }
        })
    }, [props])

    return <>
        <tr onClick={() => { handleSelect(props) }} className={`${props.isLoading ? tableStyle.loading : ""} ${props.isSelected ? tableStyle.selected : props.isOnline !== undefined ? props.isOnline ? tableStyle.online : tableStyle.offline : ""}`}>
            <td>{props?.groupName || "..."}</td>
            <td>{props?.userName || "..."}</td>
            <td>{props?.displayName || "..."}</td>
            <td>{props?.status || "..."}</td>
            <td>{props?.placeId || "..."}</td>
        </tr>
    </>
}

export interface TableAccountProps {
    width?: number,
    data1?: RowAccountData[]
}

export interface RowAccountData {
    groupName?: string,
    userName?: string,
    displayName?: string,
    placeId?: number,
    status?: string,
    isOnline?: boolean,
    isSelected?: boolean,
    isLoading?: boolean
}

export default TableAccount