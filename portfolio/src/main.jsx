import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Projects from './components/pages/Projects.jsx'
import Resume from './components/pages/Resume.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    Element: <App />,
    children: [
      {
        index:true,
        element:<App/>
      },
      {
      path:'/about',
      element:<About />
      },
      {
        path:'/projects',
        element:<Projects />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/resume',
        element:<Resume />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
