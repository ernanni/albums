import React from 'react'
import PropTypes from 'prop-types'

import Base from './Base'

const WithoutBackground = (props) => {
  const { onPress, text } = props

  return <Base 
            color={'transparent'}
            onPress={onPress}
            text={text}
            version={'link'} />
}

WithoutBackground.propTypes = {
  text: PropTypes.string.isRequired
}

WithoutBackground.defaultProps = {
  onPress: (() => {alert('Define onPress')})
}

export default WithoutBackground