import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Class } from "../types";
import { classes, instructors } from "../data/mock";
import ClassCard from "../components/ClassCard";
import FilterChips from "../components/FilterChips";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./HomeScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [loading, setLoading] = useState(true);
  const [filteredClasses, setFilteredClasses] = useState<Class[]>(classes);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(
    null
  );

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = classes;
    if (selectedLevel)
      filtered = filtered.filter((c) => c.level === selectedLevel);
    if (selectedInstructor)
      filtered = filtered.filter((c) => c.instructor === selectedInstructor);
    setFilteredClasses(filtered);
  }, [selectedLevel, selectedInstructor]);

  const handleClearFilters = () => {
    setSelectedLevel(null);
    setSelectedInstructor(null);
  };

  const hasActiveFilters = selectedLevel || selectedInstructor;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <View style={[styles.loadingCard, { padding: width * 0.1 }]}>
          <ActivityIndicator size="large" color="#6366f1" />
          <Text style={[styles.loadingText, { fontSize: width * 0.04 }]}>
            Discovering amazing classes...
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.gradientBackground, { height: height * 0.3 }]} />

      <View style={{ paddingHorizontal: width * 0.05, marginVertical: 10 }}>
        <View style={[styles.header, { padding: width * 0.06 }]}>
          <View style={styles.headerContent}>
            <Text style={[styles.greeting, { fontSize: width * 0.035 }]}>
              ✨ Welcome back
            </Text>
            <Text style={[styles.title, { fontSize: width * 0.07 }]}>
              Discover Classes
            </Text>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate("Profile")}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.profileGradient,
                { width: width * 0.12, height: width * 0.12 },
              ]}
            >
              <Text style={{ fontSize: width * 0.05, color: "#fff" }}>👤</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          styles.filtersCard,
          { marginHorizontal: width * 0.05, padding: width * 0.05 },
        ]}
      >
        <Text style={[styles.filtersTitle, { fontSize: width * 0.04 }]}>
          Filter by
        </Text>
        <FilterChips
          levels={["Beginner", "Intermediate", "Advanced"]}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
          instructors={instructors}
          selectedInstructor={selectedInstructor}
          onSelectInstructor={setSelectedInstructor}
        />

        {hasActiveFilters && (
          <TouchableOpacity
            style={styles.clearFiltersButton}
            onPress={handleClearFilters}
            activeOpacity={0.8}
          >
            <Text
              style={[styles.clearFiltersText, { fontSize: width * 0.035 }]}
            >
              ✕ Clear All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.resultsHeader}>
        <Text style={[styles.resultsCount, { fontSize: width * 0.045 }]}>
          {filteredClasses.length} classes found
        </Text>
        <View style={[styles.countBadge, { paddingHorizontal: width * 0.03 }]}>
          <Text style={[styles.countBadgeText, { fontSize: width * 0.04 }]}>
            {filteredClasses.length}
          </Text>
        </View>
      </View>

      {filteredClasses.length === 0 ? (
        <View style={styles.emptyState}>
          <View
            style={[
              styles.emptyCircle,
              { width: width * 0.25, height: width * 0.25 },
            ]}
          >
            <Text style={{ fontSize: width * 0.1 }}>🎯</Text>
          </View>
          <Text style={[styles.emptyTitle, { fontSize: width * 0.05 }]}>
            No matches found
          </Text>
          <Text style={[styles.emptySubtitle, { fontSize: width * 0.04 }]}>
            Try different filters or browse all available classes
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredClasses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ClassCard classItem={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}
