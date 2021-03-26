import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, H1, Item, Input, H2, Toast } from 'native-base';

import { Content } from '../../assets/styles';
import { APP_ID, CONSTANT } from '../../service/config';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Search = ({ navigation }: any) => {
    const [userIdField, setUserIdField] = useState('')

    const userIdFieldHandler = (event: any) => {
        setUserIdField(event)
    }

    const navigateUserListHandler = () => {
        navigation.navigate(CONSTANT.SCREEN_USER, { screen: CONSTANT.SCREEN_LIST })
    }

    const gobuttonHandler = () => {
        if(userIdField.length > 0) return navigation.navigate(CONSTANT.SCREEN_USER, { screen: CONSTANT.SCREEN_DETAILS, params: { user_id: userIdField } })

        Toast.show({
            text: 'Empty Field!',
            buttonText: 'Okay',
            type: "danger"
        })
    }

    return (
        <Container>
            <Content>
                <H1 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: 30 }}>Test App</H1>
                <TouchableOpacity onPress={() => navigateUserListHandler()} style={{ marginVertical: 50, backgroundColor: 'orange', width: 160, height: 80, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'brown', borderRadius: 20 }}>
                    <H2 style={{ fontWeight: '500' }} >Users</H2>
                </TouchableOpacity>
                <Text>
                    
                </Text>
                <View style={{ width: 250, borderColor: '#000000', borderWidth: 1, borderStyle: 'dotted', height: 150, padding: 10, justifyContent: 'space-between' }}>
                    <Item regular>
                        <Input placeholder='User ID' onChangeText={(event) => userIdFieldHandler(event)} />
                    </Item>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: '50%' }}>
                            <Button warning large block onPress={() => gobuttonHandler()}>
                                <Text style={{ fontSize: 30 }}>Go</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Content>
        </Container>
    )
}

export default Search
