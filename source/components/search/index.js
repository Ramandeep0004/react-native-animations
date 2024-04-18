import { Icon, Image, Button } from '@rneui/themed';
import { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { base } from '../../assets/base';
import { colors } from '../../assets/colors';
import { Font } from '../../assets/fontfamily';
import { fp, hp, hzp, vp, wp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import DropdownComponent from '../../modals/dropdown/index.js';
import StarRating from 'react-native-star-rating-widget';
import { FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native';
import { styles } from './styles';

export const Search = (props) => {
    const [rating, setRating] = useState(4);
    const [searchList, setSearchList] = useState([
        {
            type: 'House',
            image: 'https://www.john-taylor.com/sale-apartment-monaco-400x245-80-V1284MC-80254271.jpg?datetime=2023-03-09_1',
            price: '$300k',
            status: 0,
            location: 'Ludhiana'
        },
        {
            type: 'Chandigarh',
            image: 'https://img.jamesedition.com/listing_images/2022/12/27/15/52/32/73f2c6a5-0e7a-4058-b168-d89fd4f776ec/je/1900xxs.jpg',
            price: '$950k',
            status: 1,
            location: 'Ludhiana'
        },
        {
            type: 'Rented Houes',
            image: 'https://www.john-taylor.com/sale-apartment-monaco-400x245-80-V1284MC-80254271.jpg?datetime=2023-03-09_1',
            price: '$1050k',
            status: 2,
            location: 'Jalandhar'
        },
    ])

    let list1 = [
        {
            label: 'House',
            name: 'house'
        },
        {
            label: 'Apartment',
            name: 'Apartment'
        },
        {
            label: 'Rented Houes',
            name: 'Rented Houes'
        },
        {
            label: 'house',
            name: 'house'
        }
    ]
    let list2 = [
        {
            label: 'Ludhiana',
            name: 'Ludhiana'
        },
        {
            label: 'Chandigarh',
            name: 'Chandigarh'
        },
        {
            label: 'Amritsar',
            name: 'Amritsar'
        },
        {
            label: 'Jalandhar',
            name: 'Jalandhar'
        }
    ]

    let list3 = [
        {
            label: '$300k',
            name: '$300k'
        },
        {
            label: '$550k',
            name: '$550k'
        },
        {
            label: '$950k',
            name: '$950k'
        },
        {
            label: '$1050k',
            name: '$1050k'
        }
    ]

    const handleFilters = (item) => {
        let array = [...searchList]
        let status = array.filter((data) => data.type.toLowerCase().includes(item.label.toLowerCase()));
        setSearchList(status)
    };

    const handleFilters2 = (item) => {
        let array = [...searchList]
        let status = array.filter((data) => data.location.toLowerCase().includes(item.label.toLowerCase()));
        setSearchList(status)
    };

    const handleFilters3 = (item) => {
        let array = [...searchList]
        let status = array.filter((data) => data.price === item.label);
        setSearchList(status)
    };


    return (
        <View style={styles.conatainer}>
            {
                useIsFocused() ?
                    <StatusBar
                        translucent={true}
                        backgroundColor={colors.primary}
                    />
                    :
                    null
            }
            <Animatable.View
                easing="ease-in-out-back"
                animation="zoomInUp" // Animation type (e.g., fadeIn, slideInUp, zoomIn, bounce)
                duration={3000} // Duration of the animation in milliseconds
                style={{ height: 200, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}
            >
                <Animatable.Text
                    animation="fadeInRightBig" // You can use different animations for text inside the Animatable components
                    duration={2000} // Duration of the animation in milliseconds
                    style={{ fontSize: 20 }}
                >
                    Hello, Animations!
                </Animatable.Text>
            </Animatable.View>
            <View style={styles.body}>
                <View style={styles.filtersMain}>
                    <View style={base.col4}>
                        <DropdownComponent
                            placeholder={'Type'}
                            data={list1}
                            onChange={(item) => handleFilters(item)}
                        />
                    </View>
                    <View style={base.col4}>
                        <DropdownComponent
                            placeholder={'City'}
                            data={list2}
                            onChange={(item) => handleFilters2(item)}
                        />
                    </View>
                    <View style={base.col4}>
                        <DropdownComponent
                            placeholder={'Budget'}
                            data={list3}
                            onChange={(item) => handleFilters3(item)}
                        />
                    </View>
                </View>
                <View style={styles.searchResult}>
                    <Text style={styles.search}>Search Result</Text>
                </View>
                <FlatList
                    contentContainerStyle={styles.flat}
                    data={searchList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(index, item) => (index, item)}
                    ListEmptyComponent={() =>
                        <View style={styles.nodata}>
                            <Text style={styles.nodataText}>No Result Found</Text>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                            </View>
                            <View style={styles.iconMian}>
                                <Icon
                                    type={IconsType.antDesign}
                                    name={Icons.heart}
                                    color={colors.primary}
                                    size={hp(28)}
                                />
                            </View>
                            <View style={styles.itemBody}>
                                <View style={styles.tittleRow}>
                                    <View style={base.col9}>
                                        <Text style={styles.tittle}>Grass appartment Lantai 2</Text>
                                        <View style={styles.locationMian}>
                                            <Icon
                                                type={IconsType.ionIcon}
                                                name={Icons.iosLocation}
                                                color={colors.yellow}
                                                size={hp(20)}
                                                onPress={() => props.navigation.navigate('search')}
                                            />
                                            <Text style={styles.location}>Juhal Muroh Vivo appartment</Text>
                                        </View>
                                    </View>
                                    <View style={base.col3}>
                                        <View style={[styles.statusMian, item.status === 0 ? { backgroundColor: colors.parrotGreen } : { backgroundColor: '#fcd190' }]}>
                                            <Text style={[styles.status, item.status === 0 ? { color: colors.green } : { color: '#b0791c' }]}>{item.status === 0 ? 'For sell' : 'For rent'}</Text>
                                        </View>
                                    </View>
                                </View>
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
                                <View style={styles.detailRow}>
                                    <View style={[base.col4, { alignItems: 'flex-start' }]}>
                                        <View style={base.row}>
                                            <Icon
                                                type={IconsType.materialCommunity}
                                                name={Icons.bathtub}
                                                color={colors.textColor2}
                                                size={hp(18)}
                                                onPress={() => props.navigation.navigate('search')}
                                            />
                                            <Text style={styles.bath}>4 Baths</Text>
                                        </View>
                                    </View>
                                    <View style={[base.col4, { alignItems: 'center' }]}>
                                        <View style={base.row}>
                                            <Icon
                                                type={IconsType.fontAwesome5}
                                                name={Icons.bed}
                                                color={colors.textColor2}
                                                size={hp(18)}
                                                onPress={() => props.navigation.navigate('search')}
                                            />
                                            <Text style={styles.bath}>4 Beds</Text>
                                        </View>
                                    </View>
                                    <View style={[base.col4, { alignItems: 'flex-end' }]}>
                                        <View style={base.row}>
                                            <Icon
                                                type={IconsType.fontAwesome5}
                                                name={Icons.building}
                                                color={colors.textColor2}
                                                size={hp(18)}
                                                onPress={() => props.navigation.navigate('search')}
                                            />
                                            <Text style={styles.bath}>2 Flors</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.detailRow2}>
                                    <View style={[base.col4, { alignItems: 'flex-start' }]}>
                                        <View style={base.row}>
                                            <Icon
                                                type={IconsType.ionIcon}
                                                name={Icons.mdMifiSharp}
                                                color={colors.textColor2}
                                                size={hp(20)}
                                                onPress={() => props.navigation.navigate('search')}
                                            />
                                            <Text style={styles.bath}>Wifi</Text>
                                        </View>
                                    </View>
                                    <View style={[base.col4, styles.tvMain]}>
                                        <View style={base.row}>
                                            <Icon
                                                type={IconsType.entypo}
                                                name={Icons.tv}
                                                color={colors.textColor2}
                                                size={hp(18)}
                                                onPress={() => props.navigation.navigate('search')}
                                            />
                                            <Text style={styles.bath}>TV</Text>
                                        </View>
                                    </View>
                                    <View style={[base.col4, { alignItems: 'flex-end' }]}>
                                        <View style={base.row}>
                                            <Icon
                                                type={IconsType.materialCommunity}
                                                name={Icons.garage}
                                                color={colors.textColor2}
                                                size={hp(26)}
                                                onPress={() => props.navigation.navigate('search')}
                                            />
                                            <Text style={styles.garage}>Garage</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.priceRow}>
                                    <View style={base.col6}>
                                        <Text style={styles.price}>{item.price}</Text>
                                    </View>
                                    <View style={[base.col6, { alignItems: 'flex-end' }]}>
                                        <Button
                                            title={'View Detail'}
                                            containerStyle={styles.buttonContainer}
                                            buttonStyle={styles.buttonStyle}
                                            titleStyle={styles.titleStyle}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

