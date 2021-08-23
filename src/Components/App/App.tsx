import Timer from '../Timer/Timer'
import styles from './App.module.css'

const App = () => {
    return (
        <div className={styles.container}>
            <h1>Timer App</h1>
            <Timer />
        </div>
    )
}

export default App
