import React from "react";
import { Text, View, ScrollView } from "react-native";
import NewsCardv2 from "./NewsCardv2";

const News = () => {
  return (
    <View>
      {/* Wrap the below Text tags in View */}
      <View style={{}}>
        <Text
          style={{
            fontFamily: "Barlow-SemiBold",
            color: "#fff",
            fontSize: 25,
            marginVertical: 10,
          }}
        >
          News
        </Text>
        <Text style={{ fontFamily: "Inter-Light", color: "#fff" }}>
          Top Headlines
        </Text>
      </View>
      <View style={{ borderRadius: 20 }}></View>
      <ScrollView style={{ marginTop: 2 }}>
        <NewsCardv2 />
        {/* The below code inserts a blank card */}
        <View
          style={{ height: 50, width: 100, backgroundColor: "white" }}
        ></View>
      </ScrollView>
    </View>
  );
};

export default News;
