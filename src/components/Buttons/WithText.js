import React from 'react';
import PropTypes from 'prop-types'

import Base from './Base'

const WithText = (props) => {
  const { color, onPress, style, text, } = props
  
  return <Base
            color={color}
            onPress={onPress}
            style={style}
            version={'horizontal-no-image'}
            text={text} />
}

Base.propTypes = {
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
}


export default WithText