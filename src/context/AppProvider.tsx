import React, { useState } from 'react'

import AppContext from './AppContext'

export default function AppProvider({ children }: any) {
  const [loading, setLoading] = useState(false)
  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      {children}
    </AppContext.Provider>
  )
}
