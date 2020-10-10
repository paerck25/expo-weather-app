import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('위치 정보를 허용해주세요')
    }
  }

  useEffect(() => {
    getLocation();
  }, [])

  return (
    isLoading ? <Loading /> : null
  );
}
