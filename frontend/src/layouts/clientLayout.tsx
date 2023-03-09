import React from 'react'
import { IClientLayout } from '@customTypes/layouts'

const ClientLayout : React.FC <IClientLayout> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default ClientLayout