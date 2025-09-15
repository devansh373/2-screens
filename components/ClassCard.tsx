import React, { useState } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { Class } from "../types";
import { styles } from "./ClassCard.styles";

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
        ToastAndroid.show("Booking failed!", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Booked successfully!", ToastAndroid.SHORT);
      }
    }, 500);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{classItem.name}</Text>
      <Text style={styles.details}>
        {classItem.level} • {classItem.instructor} • {classItem.center}
      </Text>

      <TouchableOpacity
        style={[styles.button, booked && styles.buttonDisabled]}
        onPress={handleBook}
        disabled={booked}
      >
        <Text style={styles.buttonText}>{booked ? "Booked" : "Quick Book"}</Text>
      </TouchableOpacity>
    </View>
  );
}


