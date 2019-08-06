import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = {
  container: {
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    width: '100%'
  }
}

export default Card