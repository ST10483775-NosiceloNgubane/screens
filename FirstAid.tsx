import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, Button } from "react-native";
/* If @react-navigation/native-stack is not installed, provide a minimal Props
   type so the screen can compile without the external type declaration. */

// --- Navigation Type ---
type RootStackParamList = {
  Home: undefined;
  FirstAid: undefined;
};

type Props = {
  navigation: {
    navigate: (screen: keyof RootStackParamList) => void;
    goBack?: () => void;
    // add other navigation methods you use if needed
  };
  route?: {
    name?: string;
    params?: object | undefined;
  };
};

export default function FirstAidScreen({ navigation }: Props) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.background}
      blurRadius={3}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo and Menu */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.headerText}>Empowering{"\n"}the Nation</Text>
          </View>
          <Text style={styles.menuIcon}>☰</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>FIRST AID</Text>

        {/* Main Course Image */}
        <Image
          source={require("../assets/first-aid.jpg")}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Description */}
        <Text style={styles.description}>
          This course equips students with skills that will allow them to
          provide first aid awareness and basic life support.
        </Text>

        {/* Course Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course details:</Text>
          <Text style={styles.listItem}>• Six-month extensive course</Text>
          <Text style={styles.listItem}>
            • Can be completed online or in-person (see contact page for
            in-person locations)
          </Text>
        </View>

        {/* Course Content */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course content:</Text>
          <Text style={styles.listItem}>• Wounds and bleeding</Text>
          <Text style={styles.listItem}>• Burns and fractures</Text>
          <Text style={styles.listItem}>• Emergency scene management</Text>
          <Text style={styles.listItem}>
            • Cardio-Pulmonary Resuscitation (CPR)
          </Text>
          <Text style={styles.listItem}>
            • Respiratory distress, e.g. choking, blocked airway
          </Text>
        </View>

        {/* Price */}
        <Text style={styles.price}>R1500.00 pp</Text>

      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#d9d9d9",
  },
  container: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  headerText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
  menuIcon: {
    fontSize: 26,
    color: "#333",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginVertical: 12,
  },
  description: {
    textAlign: "center",
    color: "#555",
    fontSize: 13,
    marginBottom: 18,
  },
  section: {
    width: "100%",
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#2E7D32",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  listItem: {
    color: "#444",
    fontSize: 13,
    marginLeft: 6,
    marginBottom: 2,
  },
  price: {
    color: "#2E7D32",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
    marginBottom: 30,
  },
  bottomButtons: {
    width: "80%",
    marginBottom: 50,
  },
});