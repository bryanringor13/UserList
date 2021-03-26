import React, { useEffect, useState } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Toast } from 'native-base';
import { FlatList, View, Image, StyleSheet, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Spinner from 'react-native-loading-spinner-overlay';
import ProfileComponent from '../../../components/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { clearInfoFailed, fetchSearchInfo } from '../../../redux/actions/search';

const Details = ({ route, navigation }: any) => {
    const dispatch = useDispatch()
    const search = useSelector((state: RootState) => state.search)
    const { user_id } = route.params

    useEffect(() => {
        dispatch(fetchSearchInfo({ user_id }))
    }, [user_id])

    useEffect(() => {
        if(search.error?.length > 0) {
            Toast.show({
                text: search.error,
                buttonText: 'Okay',
                type: "danger"
            })
            dispatch(clearInfoFailed())
        }
    }, [search])

    return (
        <Container>
            <Spinner
                //visibility of Overlay Loading Spinner
                // visible={sports.loading}
                visible={search.loading}
                overlayColor="rgba(0, 0, 0, 0.59)"
                textContent="Please wait"
                textStyle={{
                    color: 'rgba(255, 255, 255, 0.65)',
                    marginTop: -30
                }}
            />
            <ProfileComponent data={search.search}/>
        </Container>
    )
}

export default Details
