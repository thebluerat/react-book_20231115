import {useState} from "react";

const Say =()=> {
    const [message, setMessage] = useState('');
    const onClickEnter =()=> setMessage('안녕하세유.....');
    const onClickLeave =()=> setMessage('안녕히 가세요우');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>들어오기</button>
            <button onClick={onClickLeave}>나가기</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'yellow'}} onClick={()=> setColor('yellow')}>노란색</button>
            <button style={{color: 'skyblue'}} onClick={()=> setColor('skyblue')}>하늘색</button>
            <button style={{color: 'darkgoldenrod'}} onClick={()=> setColor('darkgoldenrod')}>금색</button>
        </div>
    )
}

export default Say;  