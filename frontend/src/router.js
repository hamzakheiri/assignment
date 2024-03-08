import { createBrowserRouter } from "react-router-dom";
import Interface1 from "./pages/interface1";
import Interface3 from "./pages/interface3";
import Monitor from "./pages/monitorSubmits";
import TestingUpLoad from "./pages/testingUpLoad";
import Testing from "./pages/testing";
export const router = createBrowserRouter([
    {
        path: "/interface1",
        element: <Interface1 />
    },
    {
        path: "/interface3",
        element: <Interface3 />
    },
    {
        path: "/monitor",
        element: <Monitor/>
    },
    {
        path: "/testing",
        element: <TestingUpLoad/>
    },
    {
        path: "/testing1",
        element: <Testing/>
    }
]);