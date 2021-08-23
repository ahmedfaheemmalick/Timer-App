import Timer from '../Timer/Timer'
import styles from './App.module.css'

const App = () => {
    return (
        <div className={styles.container}>
            <h2>Timer App</h2>
            <Timer />
        </div>
    )
}

export default App
