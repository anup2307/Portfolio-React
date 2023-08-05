import Nav from './components/Nav';
import Footer from './components/Footer'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Projects from './components/pages/Projects.jsx'
import Resume from './components/pages/Resume.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    children: [
      {
        index:true,
        element:<About />
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

function App() {
   return (
    <>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;