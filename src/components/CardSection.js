import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = {
  container: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 5,
    position: 'relative',
  }
}

export default CardSection