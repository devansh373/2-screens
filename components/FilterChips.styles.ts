import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  scroll: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
  },
  chipSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  chipUnselected: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  textSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textUnselected: {
    color: '#333',
  },
});