import { ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { IMAGES } from '../../assests/images'
import { styles } from './style'

const Spalsh = (props: any) => {
  const { navigation } = props

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000)
  })


  return (
    <ImageBackground source={IMAGES.backgroundImg} style={styles.container} >

    </ImageBackground>
  )
}

export default Spalsh