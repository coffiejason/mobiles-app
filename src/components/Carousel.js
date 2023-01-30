import React, { useState, useCallback, useRef } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel-v4';
import { Title } from './SubInfo';
import { COLORS, SIZES } from '../core/themeVariables';
import { RectButton } from './RectButton';



export default function CustomCarousel({ data,btnPressed }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(data);
    const ref = useRef(null);

    const renderItem = useCallback(({ item, index }) => (
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
                    source={{ uri: item.image, headers: { 'Accept': 'image/*' } }}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14,
                    }}
                />
            </View>

            <View style={{ width: "100%", padding: 14 }}>
                <Title
                    title={item.title}
                    subTitle={item.Creator}
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
                            fontSize: SIZES.font,
                            color: COLORS.primary,
                        }}
                    >
                        {"$1099"}
                    </Text>
                    <RectButton
                        minWidth={120}
                        fontSize={14}
                        //handlePress={btnPressed}
                    />
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

