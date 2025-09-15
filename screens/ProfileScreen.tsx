import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { mockUser } from '../data/mock';


export default function ProfileScreen() {
  const [name, setName] = useState(mockUser.name);
  const [editing, setEditing] = useState(false);

  return (
    <View style={{ flex: 1, padding: 16, alignItems: 'center' }}>
      <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc', marginBottom: 16 }} />
      {editing ? (
        <TextInput
          value={name}
          onChangeText={setName}
          onBlur={() => setEditing(false)}
          style={{ borderBottomWidth: 1, width: '80%', textAlign: 'center' }}
        />
      ) : (
        <Text style={{ fontSize: 20, marginBottom: 8 }} onPress={() => setEditing(true)}>
          {name}
        </Text>
      )}
      <Text>Mobile: {mockUser.mobile}</Text>
      <Text>Credits: {mockUser.credits}</Text>
      <Text>City: {mockUser.city}</Text>
      <Text>Joined: {mockUser.joinedDate}</Text>
    </View>
  );
}
