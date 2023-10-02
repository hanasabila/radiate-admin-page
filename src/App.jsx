import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/Home'
import Users from './pages/Users'
import Sidebar from './components/Sidebar'


function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Sidebar />
        <div className="container">
          <div className="menuContainer">
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }; 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />
 
}

export default App;
