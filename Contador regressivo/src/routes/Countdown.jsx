import Title from '../components/Title';
import Counter from '../components/Counter';

import useCountdown from '../hooks/useCountDown';

const Countdown = () => {
    const [day, hour, minute, second] = useCountdown('2025-01-01T00:00:00')
    return (
        <>
            <Title title="Contagem Regressiva"/>
            <div className="countdown-container">
                <Counter title="Dias" number={day}/>
                <Counter title="Horas" number={hour}/>
                <Counter title="Minutos" number={minute}/>
                <Counter title="Segundos" number={second}/>
            </div>
        </>
    )
}

export default Countdown