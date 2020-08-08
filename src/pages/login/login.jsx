import React from 'react';
import './login.css';

class Login extends React.Component {
//   constructor(props) {
//       super(props);
//   }
  handlePush = (event) => {
      this.props.history.push('/register')
  }
  render() {
      return (
          <div className='home-container'>
              <h1 className='home-title'>home首页</h1>
              <div>
                  <button
                      className='home-btn'
                      onClick={this.handlePush}
                  >点我push
                  </button>
              </div>
          </div>
      );
  }
}

export default Login;