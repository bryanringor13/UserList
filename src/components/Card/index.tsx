import { Card, CardItem, View } from 'native-base'
import React from 'react'
import { Image, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CardComponent = ({ item, action }: any) => {
    return (
        <Card 
            style={{
                flex: 1,
                flexDirection: 'column',
                margin: 1
            }}>
            <TouchableOpacity onPress={() => action(item.id)}>
                <CardItem style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: item.picture}} style={styles.imageThumbnail}/>
                </CardItem>
                <CardItem style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={[styles.personName, { textTransform: 'capitalize'}]}>{`${item.title}.`}</Text>
                        <Text style={styles.personName}>{item.firstName}</Text>
                        <Text>{item.lastName}</Text>
                    </View>
                </CardItem>
            </TouchableOpacity>
        </Card>
    )
}


const styles = StyleSheet.create({
    imageThumbnail: {
        width: 130,
        height: 150
    },
    personName: {
        marginEnd: 5
    }
});

export default CardComponent
