import React from 'react'
import PropTypes from 'prop-types'

import Base from './Base'

const Login = (props) => {
  const { color, onPress, text, email, password } = props

  return <Base
            color={color}
            onPress={() => {doLogin(email,password)}}
            text={text}
            version={'login'}
            email={email}
            password={password}/>
}

const doLogin = (email, password) => {
  //do something
  alert('Logged in successfully!\n'+'Welcome, '+email+' with password '+password)
}

Base.PropTypes = {
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Login