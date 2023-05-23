import { FC, useState } from 'react'
import styles from './Counter.module.scss'

const Counter: FC = () => {
	const [counter, setCounter] = useState(0)

	const increment = () => setCounter(counter + 1)

	const decrement = () => {
		if (counter > 0) setCounter(counter - 1)
	}

	return (
	    <div className={styles.wrapper}>
		    <h1 style={{marginBottom: 10}}>{counter}</h1>
		    <button className={styles.btn} onClick={() => decrement()}>Minus</button>
		    <button className={styles.btn} onClick={() => increment()}>Add</button>
	    </div>
	)
}

export default Counter
