'use client'

import './card.css';
import custom from './custom.module.scss';

export default function Card() {

    // const [expanding, setExpanding] = useState(false);

    return (
        <div>
            <div className="bg-red-500 text-white">Test Tailwind</div>
            <div className={`card ${custom.card}`}>Card</div>

        </div>
    )
}