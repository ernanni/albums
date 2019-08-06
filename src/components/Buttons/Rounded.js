import React from 'react';
import PropTypes from 'prop-types'

import Base from "./Base"

const Rounded = (props) => {
  const { color, onPress, text } = props
  
  return <Base
            onPress={onPress}
            text={text}
            version={"rounded"}
            color={color} />
}

Base.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}


export default Rounded