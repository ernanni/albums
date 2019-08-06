import React from 'react'
import PropTypes from 'prop-types'

import Base from './Base'

const Border = (props) => {
  const { borderColor, color, onPress, text, Icon, version } = props

  return <Base
            color={color}
            onPress={onPress}
            text={text}
            Icon={Icon}
            version={version}
            style={{borderColor: borderColor}} />
}

Base.propTypes = {
  borderColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.element,
  version: PropTypes.string,
}

Base.defaultProps = {
  Icon: undefined,
  version: 'border',
  borderColor: '#000',
  color: '#FFF'
}

export default Border