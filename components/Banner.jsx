import { Image, View } from "react-native";

const Banner = () => {
  return (
    <View style={{ padding: 15 }}>
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/super-sale-up-50-off-banner-sales-promotions-banner-discount_71208-287.jpg",
        }}
        style={{ borderRadius: 12, width: "100%", aspectRatio: 3 / 1 }}
      />
    </View>
  );
};

export default Banner;
