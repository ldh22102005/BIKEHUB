// @ts-nocheck
import React from "react";
import {
  View, Text, StyleSheet, TouchableWithoutFeedback,
  Keyboard, TextInput, FlatList, ScrollView,
  TouchableOpacity, ImageBackground, Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import data from "../../data.json";

const { width } = Dimensions.get("window");
const PRODUCT_CARD_WIDTH = 160;
const PRODUCT_MARGIN = 12;

const CATEGORIES   = data.categories;
const NEW_PRODUCTS = data.newProducts;
const COLLECTIONS  = data.collections;

// ── Sub-components ─────────────────────────────────────
const ProductCard = React.memo(({ item }) => (
  <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
    <View style={styles.productImagePlaceholder} />
    <View style={styles.addBtn}>
      <MaterialCommunityIcons name="plus" size={20} color="#fff" />
    </View>
    <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
  </TouchableOpacity>
));

const CollectionCard = React.memo(({ item }) => (
  <TouchableOpacity
    style={styles.collectionCard}
    activeOpacity={0.9}
    onStartShouldSetResponder={() => false}
  >
    <View style={styles.collectionImagePlaceholder} />
    <Text style={styles.collectionName} numberOfLines={1}>{item.name}</Text>
    <Text style={styles.collectionPrice}>{item.price}</Text>
  </TouchableOpacity>
));

const CollectionGroup = React.memo(({ item }) => (
  <View style={styles.collectionContainer}>
    <Text style={styles.groupTitle}>■ {item.title}</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.horizontalScrollPadding}
      decelerationRate="fast"
      snapToInterval={140 + 12}
      nestedScrollEnabled={true}
      scrollEventThrottle={16}
      directionalLockEnabled={true}
      disableScrollViewPanResponder={false}
    >
      {item.items.map((p) => (
        <CollectionCard key={p.id} item={p} />
      ))}
    </ScrollView>
  </View>
));

// ── List Header ────────────────────────────────────────
const ListHeader = React.memo(() => (
  <>
    {/* THANH TÌM KIẾM */}
    <View style={styles.searchSection}>
      <View style={styles.searchBox}>
        <MaterialCommunityIcons name="magnify" size={20} color="#999" />
        <TextInput
          placeholder="Tìm kiếm sản phẩm..."
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>
    </View>

    {/* BANNER */}
    <ImageBackground
      source={require("../../assets/banner.jpg")}
      style={styles.bannerBackground}
      imageStyle={styles.bannerImage}
    >
      <View style={styles.bannerDarkOverlay} />
      <View style={styles.bannerGlass}>
        <Text style={styles.bannerSub}>ƯU ĐÃI ĐỘC QUYỀN</Text>
        <Text style={styles.bannerTitle}>GIẢM GIÁ LÊN{"\n"}ĐẾN 30%</Text>
        <TouchableOpacity style={styles.bannerBtn} activeOpacity={0.8}>
          <Text style={styles.bannerBtnText}>KHÁM PHÁ NGAY</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

    {/* DANH MỤC */}
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Danh mục</Text>
      <Text style={styles.sectionLink}>Xem tất cả</Text>
    </View>
    <View style={styles.categoryRow}>
      {CATEGORIES.map((item) => (
        <TouchableOpacity key={item.id} style={styles.categoryItem} activeOpacity={0.7}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name={item.icon} size={26} color="#00352C" />
          </View>
          <Text style={styles.categoryLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>

    {/* SẢN PHẨM MỚI NHẤT */}
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Sản phẩm mới nhất</Text>
      <Text style={styles.sectionLink}>Xem tất cả</Text>
    </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.horizontalScrollPadding}
      decelerationRate="fast"
      snapToInterval={PRODUCT_CARD_WIDTH + PRODUCT_MARGIN}
      snapToAlignment="start"
      disableIntervalMomentum={true}
      directionalLockEnabled={true}
      scrollEventThrottle={16}
    >
      {NEW_PRODUCTS.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </ScrollView>

    {/* TIÊU ĐỀ BỘ SƯU TẬP */}
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Khám phá bộ sưu tập</Text>
    </View>
  </>
));

// ── Component chính ────────────────────────────────────
export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <MaterialCommunityIcons name="menu" size={24} color="#00352C" />
          <Text style={styles.logo}>BIKEHUB</Text>
          <View style={styles.headerIcons}>
            <MaterialCommunityIcons name="cart-outline" size={24} color="#00352C" />
          </View>
        </View>

        {/* FLATLIST CHÍNH */}
        <FlatList
          data={COLLECTIONS}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeader}
          renderItem={({ item }) => <CollectionGroup item={item} />}
          ListFooterComponent={<View style={{ height: 100 }} />}
          nestedScrollEnabled={true}
          removeClippedSubviews={false}
        />

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingTop: 44,
  },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
  logo: {
    fontSize: 20,
    fontWeight: "900",
    color: "#00352C",
    letterSpacing: 1,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchSection: {
    backgroundColor: "#FFF",
    paddingBottom: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F3F4",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#333",
  },
  bannerBackground: {
    margin: 16,
    borderRadius: 20,
    overflow: "hidden",
    minHeight: 200,
    justifyContent: "center",
  },
  bannerImage: {
    resizeMode: "cover",
  },
  bannerDarkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 53, 44, 0.4)",
  },
  bannerGlass: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  bannerSub: {
    color: "#AAD4C8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  bannerTitle: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "800",
    lineHeight: 34,
    marginBottom: 15,
  },
  bannerBtn: {
    backgroundColor: "#FFF",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 50,
  },
  bannerBtnText: {
    color: "#00352C",
    fontSize: 13,
    fontWeight: "700",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 25,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  sectionLink: {
    fontSize: 14,
    color: "#00352C",
    fontWeight: "500",
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: "center",
    width: (width - 60) / 3,
  },
  categoryIcon: {
    width: "100%",
    height: 70,
    borderRadius: 16,
    backgroundColor: "#E8F5F1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: "#444",
  },
  horizontalScrollPadding: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
  },
  productCard: {
    width: PRODUCT_CARD_WIDTH,
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 12,
    marginRight: PRODUCT_MARGIN,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  productImagePlaceholder: {
    width: "100%",
    height: 120,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    marginBottom: 10,
  },
  addBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#00352C",
    borderRadius: 12,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  productName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#222",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 13,
    color: "#00352C",
    fontWeight: "600",
  },
  collectionContainer: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#555",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  collectionCard: {
    width: 140,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  collectionImagePlaceholder: {
    width: "100%",
    height: 90,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    marginBottom: 8,
  },
  collectionName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  collectionPrice: {
    fontSize: 12,
    color: "#00352C",
    marginTop: 2,
  },
});