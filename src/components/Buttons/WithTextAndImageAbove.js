import React from 'react';
import PropTypes from 'prop-types'

import Base from './Base'

const WithTextAndImageAbove = (props) => {
  const { color, onPress, text, Icon } = props
  
  return <Base
            onPress={onPress}
            text={text}
            Icon={Icon}
            version={'vertical'}
            color={color} />
}

Base.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired
}


export default WithTextAndImageAbove