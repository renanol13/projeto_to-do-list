import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { StorageProvider } from './Context/ContextParent.jsx'
import { ActiveProvides } from './Context/ContextActives.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActiveProvides>
      <StorageProvider>
        <App />
      </StorageProvider>
    </ActiveProvides>
  </React.StrictMode>,
)
