import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import Axios from 'axios';
import Weather from './Weather';

const API_KEY: string = "0140ffb9081dbe5a3bc2c8a8f7c120eb";

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  const [weatherInfo, setWeatherInfo] = useState({
    temp: 0,
    icon: '',
    condition: '',
  })

  const getWeather = async (latitude: number, longitude: number) => {
    try {
      const {
        data: {
          main : {
            temp
          },
          weather
        }
      } = await Axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      setWeatherInfo({
        temp: Math.round(temp),
        icon: weather[0].icon,
        condition: weather[0].description,
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);

    }
  }


  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('위치 정보를 허용해주세요')
    }
  }

  useEffect(() => {
    getLocation();
  }, [])

  return (
    isLoading ? <Loading /> : <Weather {...weatherInfo} />
  );
}
