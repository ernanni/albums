import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import PropTypes from 'prop-types'

import appearance from './appearance'
import styles from './style'

const Base = (props) => {
  const { color, version, onPress, text, Icon, style } = props

  return(
    <TouchableHighlight
      underlayColor={color}
      style={[
        styles.container,
        {backgroundColor: color},
        {...appearance[version].button},
        style,
      ]}
      onPress={()=>{onPress()}}>

      <View style={[styles.component, {...appearance[version].component}]}>
        { (Icon) ?
          <View style={{alignSelf: 'center'}}>
            { Icon }
          </View>
        : <View /> }

        <Text allowFontScaling={false} style={{...appearance[version].text}}>{text.toUpperCase()}</Text>

      </View>
    </TouchableHighlight>
  )
}

Base.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  Icon: PropTypes.element,
  version: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
}

Base.defaultProps = {
  color: '#000'
}

export default Base