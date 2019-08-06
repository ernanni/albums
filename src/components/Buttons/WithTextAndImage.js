import React from 'react';
import PropTypes from 'prop-types'

import Base from './Base'

const ButtonWithTextAndImage = (props) => {
  const { color, onPress, text, Icon } = props
  
  return <Base
            color={color}
            Icon={Icon}
            onPress={onPress}
            text={text}
            version={'horizontal'}/>
}

Base.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired
}


export default ButtonWithTextAndImage