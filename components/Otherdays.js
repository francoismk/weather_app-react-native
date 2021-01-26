import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View,} from 'react-native'
import axios from 'axios';


export default function Otherdays() {

    const [temperature, setTemp] = useState([]);
    const [mintemperature, setMintemp] = useState([]);
    const [description, setDescription] = useState([]);
    const [icon, setIcon] = useState([]);
  
    useEffect(() => {
      axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
      .then(res => {
        setTemp(res.data.daily[0].temp.day)
        setMintemp(res.data.daily[0].temp.min)
        setDescription(res.data.daily[0].weather[0].desription)
        setIcon(res.data.daily[0].weather[0].icon)
      })
    }, [])
  
    return (
      <View>
         
      </View>
    );
  }





const styles = StyleSheet.create({})
