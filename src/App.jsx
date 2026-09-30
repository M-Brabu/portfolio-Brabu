import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
function App() {
  const router = createBrowserRouter(
    [
    {element:<Home/>,path:"/"},
    {element:<About/>,path:"/About"},
    {element:<Project/>,path:"/Project"},
    {element:<Skills/>,path:"/Skills"},
    ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
