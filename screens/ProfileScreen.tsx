import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mockUser } from "../data/mock";
import { styles } from "./ProfileScreen.styles";

export default function ProfileScreen() {
  const [name, setName] = useState(mockUser.name);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const storedName = await AsyncStorage.getItem("user_name");
        if (storedName) setName(storedName);
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };
    loadProfile();
  }, []);

  useEffect(() => {
    const saveProfile = async () => {
      try {
        await AsyncStorage.setItem("user_name", name);
      } catch (error) {
        console.error("Error saving profile:", error);
      }
    };
    if (name) saveProfile();
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{name[0]?.toUpperCase()}</Text>
          </View>
        </View>

        {editing ? (
          <TextInput
            value={name}
            onChangeText={setName}
            onBlur={() => setEditing(false)}
            autoFocus
            style={styles.nameInput}
            placeholder="Enter your name"
          />
        ) : (
          <TouchableOpacity
            onPress={() => setEditing(true)}
            style={styles.nameContainer}
          >
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.editHint}>Tap to edit</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Mobile</Text>
          <Text style={styles.infoValue}>{mockUser.mobile}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Credits</Text>
          <Text style={styles.infoValue}>{mockUser.credits}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>City</Text>
          <Text style={styles.infoValue}>{mockUser.city}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Member Since</Text>
          <Text style={styles.infoValue}>{mockUser.joinedDate}</Text>
        </View>
      </View>
    </View>
  );
}
