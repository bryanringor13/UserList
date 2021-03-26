import { CardItem, Container } from 'native-base'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { Details, Info, ProfileContent } from '../../assets/styles'

const ProfileComponent = ({ data }: any) => {
    return (
        <Container>
            <ProfileContent>
                <Image source={{uri: data?.picture}} style={{ width: '50%', height: '30%', resizeMode: 'cover' }}/>
                <Details>
                    <Info>Details: {data?.id}</Info>
                    <Info style={{ textTransform: 'capitalize'}}>Name: {!!data ? `${data?.title} ${data?.firstName} ${data?.lastName}` : 'No Data'}</Info>
                    <Info>Email: {data?.email}</Info>
                    <Info>Phone: {data?.phone}</Info>
                    <Info>Gender: {data?.gender}</Info>
                </Details>
            </ProfileContent>
        </Container>
    )
}

export default ProfileComponent
