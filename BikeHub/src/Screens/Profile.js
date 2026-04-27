// @ts-nocheck
import React, { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, ScrollView, Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// ── Data menu ──────────────────────────────────────────
const MENU_ITEMS = [
  { id: "1", icon: "shopping-outline",        label: "Đơn hàng của tôi" },
  { id: "2", icon: "heart-outline",           label: "Sản phẩm yêu thích" },
  { id: "3", icon: "map-marker-outline",      label: "Địa chỉ giao hàng" },
  { id: "4", icon: "credit-card-outline",     label: "Phương thức thanh toán" },
  { id: "5", icon: "cog-outline",             label: "Cài đặt" },
];

// ── Menu Item ──────────────────────────────────────────
const MenuItem = React.memo(({ item, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.7}>
    <View style={styles.menuLeft}>
      <View style={styles.menuIconBox}>
        <MaterialCommunityIcons name={item.icon} size={22} color="#00352C" />
      </View>
      <Text style={styles.menuLabel}>{item.label}</Text>
    </View>
    <MaterialCommunityIcons name="chevron-right" size={20} color="#CCC" />
  </TouchableOpacity>
));

// ── Component chính ────────────────────────────────────
export default function Profile() {
  const [user] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    point: 487.5,
    avatar: null, // thay bằng require("../../assets/avatar.jpg") nếu có ảnh
  });

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#00352C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hồ sơ</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="cog-outline" size={24} color="#00352C" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* AVATAR + INFO */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            {user.avatar ? (
              <Image source={user.avatar} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <MaterialCommunityIcons name="account" size={50} color="#FFF" />
              </View>
            )}
            {/* Badge điểm */}
            <View style={styles.pointBadge}>
              <Text style={styles.pointText}>{user.point}</Text>
            </View>
          </View>

          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>

          <TouchableOpacity style={styles.editBtn} activeOpacity={0.8}>
            <Text style={styles.editBtnText}>Chỉnh sửa hồ sơ</Text>
          </TouchableOpacity>
        </View>

        {/* MENU */}
        <View style={styles.menuCard}>
          {MENU_ITEMS.map((item, index) => (
            <View key={item.id}>
              <MenuItem item={item} onPress={() => {}} />
              {index < MENU_ITEMS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* ĐĂNG XUẤT */}
        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>

        {/* PHIÊN BẢN */}
        <Text style={styles.version}>PHIÊN BẢN 2.4.0 • BIKEHUB PREMIUM</Text>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingTop: 44,
  },

  // HEADER
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  // PROFILE
  profileSection: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#FFF",
    marginBottom: 16,
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: 14,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#00352C",
    justifyContent: "center",
    alignItems: "center",
  },
  pointBadge: {
    position: "absolute",
    bottom: 0,
    right: -10,
    backgroundColor: "#00B4D8",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  pointText: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "700",
  },
  userName: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  editBtn: {
    borderWidth: 1.5,
    borderColor: "#00352C",
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  editBtnText: {
    color: "#00352C",
    fontSize: 14,
    fontWeight: "600",
  },

  // MENU
  menuCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    borderRadius: 16,
    paddingHorizontal: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#E8F5F1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  menuLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  divider: {
    height: 1,
    backgroundColor: "#F5F5F5",
    marginHorizontal: 8,
  },

  // LOGOUT
  logoutBtn: {
    marginHorizontal: 16,
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#E53935",
  },

  // VERSION
  version: {
    textAlign: "center",
    fontSize: 11,
    color: "#BBB",
    marginTop: 20,
    letterSpacing: 0.5,
  },
});