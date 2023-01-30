import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import {BackButton} from "../components/BackButton"
import { RectButton } from "../components/RectButton";
import { SubInfo } from "../components/SubInfo";


import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../core/themeVariables";
//import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";

const DetailsScreen = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={{uri:"https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-xs-max-silver.png"}}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <Details navigation={navigation} />

  </View>
);

const Details = ({ route, navigation }) => {
  //const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      /> */}

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={"1000"}
        // renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            {/* <DetailsHeader data={data} navigation={navigation} /> */}
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              {/* <DetailsDesc data={data} /> */}

              {[10,20] > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
