import { FlatList, Animated, Easing, LayoutAnimation, Platform, UIManager, TouchableOpacity, StatusBar } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { colors } from '../../assets/colors';
import { Icon, Image } from '@rneui/themed'
import { Icons, IconsType } from '../../assets/icons';
import { hp } from '../../assets/fontsize';
import { base } from '../../assets/base';
import StarRating from 'react-native-star-rating-widget';
import { useEffect, useRef, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { styles } from './style';


//---------------------ENABLE setLayoutAnimationEnabledExperimental FOR LAYOUT ANIMATIONS----
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}


export const Home = (props) => {
    let isFocus = useIsFocused()
    const [rating, setRating] = useState(4);
    const fontSizes = new Animated.Value(20);
    const slideAnim = useRef(new Animated.Value(-1000)).current
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const [scaleAnim] = useState(new Animated.Value(0.5))
    const animatedDecayValue = useRef(new Animated.Value(0)).current;
    const [appliedDecayValue, setAppliedDecayValue] = useState(false);

    let list = [
        {
            id: 1,
            name: 'Seman, YN',
            image: 'https://img.jamesedition.com/listing_images/2022/12/27/15/52/32/73f2c6a5-0e7a-4058-b168-d89fd4f776ec/je/1900xxs.jpg',
            properities: '120 Properities'
        },
        {
            id: 2,
            name: 'Bantul, BN',
            image: 'https://www.john-taylor.com/sale-apartment-monaco-400x245-80-V1474MC-105930884.jpg?datetime=2023-03-09_1',
            properities: '1999 Properities'
        },
        {
            id: 3,
            name: 'Yuhal, YL',
            image: 'https://www.john-taylor.com/sale-apartment-monaco-400x245-80-V1284MC-80254271.jpg?datetime=2023-03-09_1',
            properities: '1500 Properities'
        },
    ]

    let list2 = [
        {
            image: 'https://www.john-taylor.com/sale-apartment-monaco-400x245-80-V1284MC-80254271.jpg?datetime=2023-03-09_1',
        },
        {
            image: 'https://www.john-taylor.com/sale-apartment-monaco-400x245-80-V1474MC-105930884.jpg?datetime=2023-03-09_1',
        },
        {
            image: 'https://www.john-taylor.com/sale-apartment-monaco-400x245-80-V1284MC-80254271.jpg?datetime=2023-03-09_1',
        },
    ]


    useEffect(() => {
        if (isFocus) {

            // Animated.sequence([                                                //---------------IF YOU WANT TO USE SEQUENCE WISE ANIMATIONS
            //     Animated.timing(fontSizes, {
            //         toValue: 30,
            //         duration: 2000,
            //         easing: Easing.bounce,
            //         // easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            //         useNativeDriver: false,
            //     }),
            //     Animated.timing(slideAnim, {
            //         toValue: 0,
            //         duration: 3000,
            //         easing: Easing.bounce,
            //         useNativeDriver: true,
            //     }),
            //     Animated.timing(fadeAnim, {
            //         toValue: 1,
            //         duration: 5000,
            //         useNativeDriver: true,
            //     }),
            //     Animated.timing(rotateAnim, {
            //         toValue: 1,
            //         duration: 2000,
            //         easing: Easing.bounce,
            //         // easing: Easing.back(10),
            //         useNativeDriver: true,
            //     }),
            // ]).start();


            // // -----------Font Sizes Animation--------------//
            Animated.timing(fontSizes, {
                toValue: 30,
                duration: 1000,
                delay: 2000,
                // easing: Easing.bounce,
                // easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                easing: Easing.back(10),
                easing: Easing.elastic(3),
                useNativeDriver: false,
            }).start();

            // //--------------- Slide Animation----------------//
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 3000,
                easing: Easing.bounce,
                useNativeDriver: true,
            }).start();

            // //-------------- Fade Animation------------------//
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }).start();

            // //--------------- Rotate Animation----------------//
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 2000,
                easing: Easing.bounce,
                // easing: Easing.back(10),
                useNativeDriver: true,
            }).start();


            //------------------Scale Animation--------------------//
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 1,
                tension: 20,
                useNativeDriver: true,
                duration: 2000,
            }
            ).start();


        } else {
            // Reset animations when losing focus
            fontSizes.setValue(20);
            slideAnim.setValue(-100);
            fadeAnim.setValue(0);
            rotateAnim.setValue(0);
            scaleAnim.setValue(0.5)
        }
    }, [isFocus])


    const rotateIcon = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });


    //--------------Layout Animation ----------------->
    const [expanded, setExpanded] = useState(false);


    const handleToggle = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    //-----------------------------------------------

    const startAnimation = () => {
        Animated.decay(animatedDecayValue, {
            velocity: 0.1, // Initial velocity
            deceleration: 0.997, // Rate of decay
            useNativeDriver: true,
        }).start();
    };


    const handleAnimation = () => {
        if (appliedDecayValue === false) {
            startAnimation();
            setAppliedDecayValue(true)
        }
        else {
            setAppliedDecayValue(false)
            animatedDecayValue.setValue(0)
        }
    };

    //--------------------NOTES-----------------------------

    /*
     transform : x , y / rotate
     opacity   :
     Scale     : we can Scale item with  Animated.spring().start() : - With scale the item will zoom out from its original size according to scale value
     easing: Easing.bounce,    : ------contant will bounce like ball, It will work acording to duration
     easing: Easing.elastic(3),: ----  we can handle bounces with parameter
     easing: Easing.back(10),  : ------where the object animates back slightly as the animation starts.
     Animated.sequence([])     : ------If we want to start animations sequencence wise
     LayoutAnimation           : ------Animations according to the layout When you want to change the size of the item with animation 
     setLayoutAnimationEnabledExperimental : For Layout animations set it TRUE
     friction                  : ------ Like spring animation, We can't use it with Animated.timing()
     tension                   : ------In the Animated.spring() method in React Native, the tension property controls the tension of the spring
                                 ------In the Animated.spring() method, the friction and tension properties work together to control the behavior of the spring animation.
     delay                      : we can delay the animation for particuler time  
    */

    return (
        <View style={styles.container}>
            {
                useIsFocused() ?
                    <StatusBar
                        translucent={true}
                        backgroundColor={colors.primary}
                    />
                    :
                    null
            }
            <View style={styles.containerHeader}>
                <View style={base.col8}>
                    <Animated.Text style={{ fontSize: fontSizes }}>Find Property</Animated.Text>
                    <Animated.Text style={[styles.title2, { transform: [{ translateX: slideAnim }], }]}>According to your wishes ?</Animated.Text>
                </View>
                <View style={[base.col4, { alignItems: 'flex-end' }]}>
                    <View style={styles.iconMian}>
                        <TouchableOpacity onPress={handleToggle}>
                            {
                                expanded === false ?
                                    <View style={{ backgroundColor: "#f85757", alignItems: "flex-end", justifyContent: "flex-end", borderRadius: 10, paddingVertical: 6, paddingHorizontal: 15, marginRight: 5 }}>
                                        <Icon
                                            type={IconsType.feather}
                                            name={Icons.search}
                                            color={colors.white}
                                            size={hp(20)}
                                            style={styles.icon1Style}
                                        />
                                    </View>
                                    :
                                    <View style={{ marginTop: hp(-5), paddingVertical: 6, paddingHorizontal: 10, backgroundColor: "#f85757", borderRadius: 10, marginRight: 10 }}>
                                        <Text style={{ color: colors.white }}>Search</Text>
                                    </View>
                            }
                        </TouchableOpacity>
                        <Animated.View
                            style={{ transform: [{ scale: scaleAnim }] }}>
                            <Icon
                                type={IconsType.fontAwesome}
                                name={Icons.bellO}
                                color={colors.textColor3}
                                size={hp(26)}
                                onPress={() => props.navigation.navigate('search')}
                            />
                        </Animated.View>
                    </View>
                </View>
            </View>
            <View>
                <FlatList
                    contentContainerStyle={styles.flat2}
                    data={list2}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index, item) => (index, item)}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer} >
                            <View style={styles.imageMain}>
                                <Animated.Image source={{ uri: item.image }}
                                    style={[styles.image, { transform: [{ translateX: slideAnim }], }]} />
                            </View>
                        </View>
                    )
                    }
                />
                <View style={styles.detailConatiner}>
                    <View style={styles.priceRow}>
                        <View style={base.col10}>
                            <Animated.View
                                style={[{ opacity: fadeAnim }]}>
                                <Text style={styles.price}>$450.00</Text>
                            </Animated.View>
                        </View>
                        <View style={base.col2}>
                            <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                                <View style={styles.teleIconMian}>
                                    <Icon
                                        type={IconsType.evilicon}
                                        name={Icons.scTelegram}
                                        color={colors.white}
                                        size={hp(36)}
                                        onPress={() => props.navigation.navigate('search')}
                                    />
                                </View>
                            </Animated.View>
                        </View>
                    </View>
                    <Animated.View style={[styles.tittleMain, { transform: [{ translateX: animatedDecayValue }] }]}>
                        <Text style={styles.tittle}>Juhal Muroh Vivo appartment...</Text>
                    </Animated.View>
                    <TouchableOpacity onPress={() => handleAnimation()}>
                        <View style={styles.locationMain}>
                            <View style={[, { alignItems: 'flex-end' }]}>
                                <Icon
                                    type={IconsType.ionIcon}
                                    name={Icons.iosLocation}
                                    color={colors.yellow}
                                    size={hp(20)}
                                    onPress={() => props.navigation.navigate('search')}
                                />
                            </View>
                            <View style={base.col11}>
                                <Text style={styles.loction}>JI, Great Noida, Chattisgarh</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.ratingMain}>
                        <View style={base.col4}>
                            <StarRating
                                rating={rating}
                                onChange={setRating}
                                maxStars={5}
                                starSize={hp(25)}
                                starStyle={styles.starStyle}
                            />
                        </View>
                        <View style={[base.col3, { alignItems: 'flex-start' }]}>
                            <Text style={styles.rating}>4.5</Text>
                        </View>
                        <View style={[base.col5, { alignItems: 'flex-end' }]}>
                            <Text style={styles.reviews}>2450 reviews</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.dotsMain}>
                <Animated.Text style={[styles.dots, { transform: [{ translateX: slideAnim }], }]} />
                <View style={styles.dots2} />
                <View style={styles.dots2} />
                <View style={styles.dots2} />
                <View style={styles.dots2} />
            </View>
            <View style={styles.topplaceConatiner}>
                <Animated.View style={[styles.TopPlacesMian, { transform: [{ translateX: slideAnim }], }]}>
                    <View style={base.col6}>
                        <Text style={styles.topPlaces}>Top Places</Text>
                    </View>
                    <View style={[base.col6, { alignItems: 'flex-end' }]}>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>
                </Animated.View>
                <View style={styles.main}>
                    <FlatList
                        contentContainerStyle={styles.flat}
                        data={list}
                        horizontal
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(index, item) => (index, item)}
                        renderItem={({ item }) => (
                            <Animated.View style={[styles.itemContainer, { transform: [{ translateX: slideAnim }] }]}>
                                <View style={styles.imageMian}>
                                    <Image source={{ uri: item.image }}
                                        style={styles.image} />
                                </View>
                                <View style={styles.properityName}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.totalProperitis}>{item.properities}</Text>
                                </View>
                            </Animated.View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
};
