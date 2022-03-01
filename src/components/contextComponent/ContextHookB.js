import React, { useContext } from 'react'
import { UserContext } from '../../App'
import { UserConsumer } from './UserContext'

function ContextHookB() {

    const user= useContext(UserContext)
  return (
    <div>
        {user}
    </div>
  )
}

export default ContextHookB