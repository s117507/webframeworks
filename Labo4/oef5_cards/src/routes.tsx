import type { ReactElement } from "react";
import Home from "./pages/Home";

export interface AppRoute{
    name: string;
    path: string;
    element: ReactElement;
}

export const routes : AppRoute[] = [
    {name: "Home", path: "/", element:<Home /> }
]