import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

export function ImageSwiper({ images }: { images: string[] }) {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsPagination loop >
        {images.map((uri, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 280, 
    width: '100%',
    overflow: 'hidden',
  },
  wrapper: {
    height: '100%'    
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
  },
});
