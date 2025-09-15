# Class Booking App Task

A React Native mobile application that allows users to browse fitness classes, filter by level or instructor, and book instantly. Includes a profile screen with editable user details.

---

##  Features

- **Home Screen**
  - Browse a list of available fitness classes.
  - Filter classes by difficulty level (Beginner, Intermediate, Advanced).
  - Filter classes by instructor.
  - Clear filters easily.
  - Loading indicator while fetching classes.
  - Empty state UI with option to reset filters.

- **Class Booking**
  - Quick Book button on each class card.
  - Simulated booking success/failure with `ToastAndroid` feedback.
  - Booked classes are visually updated.

- **Profile Screen**
  - Displays user details (name, mobile, credits, city, join date).
  - Edit profile name (tap to edit).
  - Profile updates are persisted using `AsyncStorage`.

---

##  Tech Stack

- **React Native** (Expo or CLI)
- **TypeScript**
- **React Navigation**
- **AsyncStorage** for persistent profile data

---

##  Project Structure

```
/components
  ClassCard.styles.ts
  ClassCard.tsx
  FilterChips.styles.ts
  FilterChips.tsx

/data
  mock.ts

/screens
  HomeScreen.styles.ts
  HomeScreen.tsx
  ProfileScreen.styles.ts
  ProfileScreen.tsx

/types
  index.ts

App.tsx
```

---

##  Getting Started

### 1. Clone the repo
```sh
git clone https://github.com/devansh373/2-screens.git

```

### 2. Install dependencies
```sh
npm install
```

### 3. Run the app

If using Expo:
```sh
npx expo start
```

If using React Native CLI (Android):
```sh
npx react-native run-android
```

For iOS:
```sh
npx react-native run-ios
```

---

##  Dependencies

- `@react-navigation/native`
- `@react-navigation/native-stack`
- `react-native-safe-area-context`
- `@react-native-async-storage/async-storage`
- `react-native-gesture-handler`

---




