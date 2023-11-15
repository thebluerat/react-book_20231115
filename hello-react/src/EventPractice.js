import { useState } from 'react';

const EventPractice =()=> {
    const [form, setForm] = useState({
        username: '',
        message: ''
    })
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }
    const onClick =()=> {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        })
    }
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }
    return (
        <>
            <div>
                <h1>event</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="your name"
                    value={username}
                    onChange={onChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="type anything"
                    value={message}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />
                <button onClick={onClick}>확인</button>
            </div>
        </>
    )
}


export default EventPractice;