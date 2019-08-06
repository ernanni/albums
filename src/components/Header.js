//import libraries for making a component
import React from 'react'
import { Text, View } from 'react-native'

//making a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>  
    </View>

  )
}

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    position: 'relative',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1
  },

  textStyle: {
    fontSize: 20
  }
}

//make component available for other parts
export default Header