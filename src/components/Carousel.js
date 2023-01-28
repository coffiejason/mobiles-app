import React, { useState, useCallback, useRef } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel-v4';
import { EthPrice, NFTTitle, SubInfo } from './SubInfo';
import { COLORS, SIZES } from '../core/themeVariables';

const exampleItems = [
    {
        title: 'Item 1',
        text: 'Text 1',
    },
    {
        title: 'Item 2',
        text: 'Text 2',
    },
    {
        title: 'Item 3',
        text: 'Text 3',
    },
    {
        title: 'Item 4',
        text: 'Text 4',
    },
    {
        title: 'Item 5',
        text: 'Text 5',
    },
];

export default function CustomCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(exampleItems);
    const ref = useRef(null);

    const renderItem = useCallback(({ item, index }) => (
        // <View
        //     style={{
        //         backgroundColor: 'floralwhite',
        //         borderRadius: 5,
        //         height: 350,
        //         padding: 50,
        //         marginLeft: 25,
        //         marginRight: 25,
        //     }}
        // >
        //     <Text style={{ fontSize: 30 }}>{item.title}</Text>
        //     <Text>{item.text}</Text>
        // </View>

        <View
            style={{
                backgroundColor: "#FFF",
                borderRadius: 14,
                marginTop: 24,
                margin: 8,
                shadowColor: "#74858C",
                shadowOffset: {
                    width: 0,
                    height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,

                elevation: 14,
            }}
        >
            <View
                style={{
                    width: "100%",
                    height: 300,
                }}
            >
                <Image
                    source={{ uri: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-xs-max-silver.png", headers: { 'Accept': 'image/*'} }}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14,
                    }}
                />

                {/* <CircleButton imgUrl={assets.heart} right={10} top={10} /> */}
            </View>

            {/* <SubInfo /> */}

            <View style={{ width: "100%", padding: 14 }}>
                <NFTTitle
                    title={"iPhone X"}
                    subTitle={"Apple Inc."}
                    titleSize={18}
                    subTitleSize={12}
                />

                <View
                    style={{
                        marginTop: 14,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            //fontFamily: FONTS.medium,
                            fontSize: SIZES.font,
                            color: COLORS.primary,
                        }}
                    >
                        {"$1099"}
                    </Text>
                    {/* <RectButton
                        minWidth={120}
                        fontSize={"14"}
                        handlePress={() => navigation.navigate("DetailsScreen", {  })}
                    /> */}
                </View>
            </View>
        </View>
    ), []);

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
                layout="default"
                ref={ref}
                data={carouselItems}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
        </View>
    );
};

