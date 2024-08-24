import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

interface ImageProps{
    url: string
    desc: string
}

const ImageTurma = ({ url, desc }: ImageProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <View style={styles.descContainer}>
            <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 20,
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  descContainer: {
    flex: 1,
    marginTop: 5,
    padding: 7,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff', 
  },
  desc: {
    textAlign: 'left',
    fontSize: 10,
    color: '#333',
    flexWrap: 'wrap', 
    lineHeight: 20, 
  },
})

export default ImageTurma