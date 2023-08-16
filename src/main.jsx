import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Projects from './components/pages/Projects.jsx'
import Skills from './components/pages/Skills.jsx'
import Experience from './components/pages/Experience.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/experience',
        element: <Experience />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/skills',
        element: <Skills />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)