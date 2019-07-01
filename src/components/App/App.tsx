import React, { FC } from 'react'
import styles from './App.module.scss'

const App: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      Hello!
    </div>
  )
}

export default App
