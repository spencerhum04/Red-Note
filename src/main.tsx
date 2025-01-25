import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Landing from './routes/landing/landing.tsx'
import A1 from './routes/landing/A1.tsx'
import A2 from './routes/landing/A2.tsx'
import A3 from './routes/landing/A3.tsx'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Landing />,
  },
  {
      path: "/A1",
      element: <A1 />,
  },
  {
    path: "/A2",
    element: <A2 />,
  },
  {
    path: "/A3",
    element: <A3 />,
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)