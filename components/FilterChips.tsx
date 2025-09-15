import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './FilterChips.styles';

interface FilterChipsProps {
  levels: string[];
  selectedLevel: string | null;
  onSelectLevel: (level: string | null) => void;
  instructors: string[];
  selectedInstructor: string | null;
  onSelectInstructor: (inst: string | null) => void;
}

export default function FilterChips({
  levels,
  selectedLevel,
  onSelectLevel,
  instructors,
  selectedInstructor,
  onSelectInstructor,
}: FilterChipsProps) {
  return (
    <View style={styles.container}>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {levels.map(level => (
          <TouchableOpacity
            key={level}
            style={[
              styles.chip,
              selectedLevel === level ? styles.chipSelected : styles.chipUnselected,
            ]}
            onPress={() => onSelectLevel(selectedLevel === level ? null : level)}
          >
            <Text style={selectedLevel === level ? styles.textSelected : styles.textUnselected}>
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {instructors.map(inst => (
          <TouchableOpacity
            key={inst}
            style={[
              styles.chip,
              selectedInstructor === inst ? styles.chipSelected : styles.chipUnselected,
            ]}
            onPress={() => onSelectInstructor(selectedInstructor === inst ? null : inst)}
          >
            <Text style={selectedInstructor === inst ? styles.textSelected : styles.textUnselected}>
              {inst}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}


