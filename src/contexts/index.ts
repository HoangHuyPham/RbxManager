import { useContext } from "react";
import { TableAccountContext } from "./provider/TableAccountContext";

export const useTableAccountContext = ()=> useContext(TableAccountContext)