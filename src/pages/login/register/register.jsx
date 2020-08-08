import React from 'react';
import './register.css';

function Register(props) {

    function handlePush(event) {

    }
    function handlePop(event) {
        props.history.goBack();
    }

    return (
        <div className={'second-container'}>
            <h1 className={'second-title'}>当前为第二页</h1>
            <div>
                <button
                    className='second-popBtn'
                    onClick={handlePop}
                >点我pop
                </button>
                <button
                    className='second-pushBtn'
                    onClick={handlePush}
                >点我push
                </button>
            </div>
        </div>
    );
}

export default Register;