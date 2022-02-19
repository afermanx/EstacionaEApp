import { createContext } from 'react'

interface AppContextInterface {
  loading: boolean,
  setLoading: any
}

export default createContext({} as AppContextInterface)