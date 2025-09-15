import React, { useState } from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';
import { Class } from '../types';

interface Props {
  classItem: Class;
}

export default function ClassCard({ classItem }: Props) {
  const [booked, setBooked] = useState(false);
  const handleBook = () => {
    const success = Math.random() > 0.15;
    setBooked(true);
    setTimeout(() => {
      if (!success) {
        setBooked(false); 
        ToastAndroid.show('Booking failed!', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Booked successfully!', ToastAndroid.SHORT);
      }
    }, 500);
  };

  return (
    <View style={{ padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 8 }}>
      <Text style={{ fontWeight: 'bold' }}>{classItem.name}</Text>
      <Text>{classItem.level} | {classItem.instructor} | {classItem.center}</Text>
      <Button title={booked ? 'Booked' : 'Quick Book'} onPress={handleBook} disabled={booked} />
    </View>
  );
}
