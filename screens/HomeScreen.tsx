


import React, { useEffect, useState } from 'react';
import { 
  View, 
  FlatList, 
  ActivityIndicator, 
  Text, 
  TouchableOpacity, 
  ToastAndroid, 
  StyleSheet 
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Class } from '../types';
import { classes, instructors } from '../data/mock';
import ClassCard from '../components/ClassCard';
import FilterChips from '../components/FilterChips';
import { styles } from './HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [loading, setLoading] = useState(true);
  const [filteredClasses, setFilteredClasses] = useState<Class[]>(classes);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(null);

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    let filtered = classes;
    if (selectedLevel) filtered = filtered.filter(c => c.level === selectedLevel);
    if (selectedInstructor) filtered = filtered.filter(c => c.instructor === selectedInstructor);
    setFilteredClasses(filtered);
  }, [selectedLevel, selectedInstructor]);

  const handleClearFilters = () => {
    setSelectedLevel(null);
    setSelectedInstructor(null);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      
      <TouchableOpacity 
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileButtonText}>Profile</Text>
      </TouchableOpacity>

      
      <FilterChips
        levels={['Beginner', 'Intermediate', 'Advanced']}
        selectedLevel={selectedLevel}
        onSelectLevel={setSelectedLevel}
        instructors={instructors}
        selectedInstructor={selectedInstructor}
        onSelectInstructor={setSelectedInstructor}
      />

      
      {filteredClasses.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No classes found.</Text>
          <TouchableOpacity style={styles.clearButton} onPress={handleClearFilters}>
            <Text style={styles.clearButtonText}>Clear Filters</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredClasses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ClassCard classItem={item} />}
        />
      )}
    </View>
  );
}
