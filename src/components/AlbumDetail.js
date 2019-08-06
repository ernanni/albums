import React from 'react'
import { Text, View, Image, Linking } from 'react-native'

import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album
  const { 
    thumbnail, 
    textContainer, 
    headerText,
    thumbnailContainer,
    imageStyle,
  } = styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            style={thumbnail}
            source={{uri: thumbnail_image}}/>
        </View>
        <View style={textContainer}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image
        style={imageStyle}
         source={{ uri: image }}/>
      </CardSection>
      
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  textContainer:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnail:{
    height: 50,
    width: 50,
  },
  thumbnailContainer:{
    aligntItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  imageStyle:{
    flex: 1,
    height: 300,
    width: null,
  },

}

export default AlbumDetail