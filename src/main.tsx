import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// routes 
import { routes } from './routes/routes.tsx'
import { RouterProvider } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
)
