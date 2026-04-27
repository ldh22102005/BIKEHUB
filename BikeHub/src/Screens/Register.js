import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Register({ goLogin }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        {/* Main */}
        <View style={styles.main}>
          <Text style={styles.title}>Đăng ký</Text>

          {/* Tab */}
          <View style={styles.tab}>
            <TouchableOpacity style={styles.tabBtn} onPress={goLogin}>
              <Text style={styles.inactiveText}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            <View style={[styles.tabBtn, styles.active]}>
              <Text style={styles.activeText}>ĐĂNG KÝ</Text>
            </View>
          </View>

          {/* Form */}
          <Text style={styles.label}>HỌ VÀ TÊN</Text>
          <TextInput style={styles.input} placeholder="Nguyễn Văn A" />

          <Text style={styles.label}>EMAIL</Text>
          <TextInput style={styles.input} placeholder="email@gmail.com" />

          <Text style={styles.label}>MẬT KHẨU</Text>
          <View style={styles.pass}>
            <TextInput style={{ flex: 1 }} placeholder="*****" secureTextEntry />
            <MaterialCommunityIcons name="eye-outline" size={20} color="#666" />
          </View>

          <Text style={styles.label}>XÁC NHẬN</Text>
          <View style={styles.pass}>
            <TextInput style={{ flex: 1 }} placeholder="*****" secureTextEntry />
            <MaterialCommunityIcons name="eye-outline" size={20} color="#666" />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00352C",
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  tab: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 20,
    marginBottom: 20,
  },
  tabBtn: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  active: {
    backgroundColor: "#00352C",
    borderRadius: 20,
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inactiveText: {
    color: "#888",
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#666",
  },
  input: {
    backgroundColor: "#f5f5f5",
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  pass: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#00352C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});