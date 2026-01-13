import {clsx} from "clsx";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export const cn = (...inputs:ClassNameValue[]) =>{
    return twMerge(clsx(...inputs));
}