import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import Base from './Base'

const Menu = (props) => {
  const { onPress, text, Icon } = props

  return <Base
            onPress={onPress}
            text={text}
            Icon={
              <View style={styles.iconContainer}>
                {Icon}
              </View>}
            version={'menu'} />
}

Menu.prototypes = {
  Icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

Menu.defaultProps = {
  Icon: undefined,
  onPress: (() => {alert('Function not Defined')}),
  text: 'Início',
}

const styles = {
  iconContainer: {
    alignSelf: 'flex-start',
    alignContent: 'center',
    height: '100%',
    justifyContent: 'center',
    margin: 30,
    width: '100%',
  }
}

export default Menu