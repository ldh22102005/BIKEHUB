// @ts-nocheck
import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";
import Home from "./src/Screens/Home";
import Profile from "./src/Screens/Profile";

export default function App() {
  const [screen, setScreen] = useState("login");

  if (screen === "login") {
    return (
      <Login
        goRegister={() => setScreen("register")}
        goHome={() => setScreen("home")}
      />
    );
  }

  if (screen === "register") {
    return <Register goLogin={() => setScreen("login")} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {screen === "home"     && <Home />}
        {screen === "products" && <PlaceholderScreen title="Sản phẩm" />}
        {screen === "cart"     && <PlaceholderScreen title="Giỏ hàng" />}
        {screen === "profile"  && <Profile />}
      </View>

      <View style={styles.tabBar}>
        <TabItem label="Trang chủ" icon="🏠" active={screen === "home"}     onPress={() => setScreen("home")} />
        <TabItem label="Sản phẩm"  icon="🛍️" active={screen === "products"} onPress={() => setScreen("products")} />
        <TabItem label="Giỏ hàng"  icon="🛒" active={screen === "cart"}     onPress={() => setScreen("cart")} />
        <TabItem label="Cá nhân"   icon="👤" active={screen === "profile"}  onPress={() => setScreen("profile")} />
      </View>
    </View>
  );
}

function PlaceholderScreen({ title }) {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>{title}</Text>
      <Text style={styles.placeholderSub}>Đang phát triển...</Text>
    </View>
  );
}

function TabItem({ label, icon, active, onPress }) {
  return (
    <Pressable style={styles.tabItem} onPress={onPress}>
      <Text style={styles.tabIcon}>{icon}</Text>
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
        {label}
      </Text>
      {active && <View style={styles.tabIndicator} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  content: {
    flex: 1,
    marginBottom: 60,
  },
  tabBar: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    fontSize: 20,
  },
  tabLabel: {
    fontSize: 11,
    marginTop: 2,
    color: "#999",
  },
  tabLabelActive: {
    color: "#00352C",
    fontWeight: "700",
  },
  tabIndicator: {
    position: "absolute",
    bottom: 6,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#00352C",
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F9FA",
  },
  placeholderText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  placeholderSub: {
    fontSize: 14,
    color: "#999",
  },
});