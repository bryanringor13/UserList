import * as React from 'react';
import { Button, Icon } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './details';
import List from './list';
import { CONSTANT } from '../../service/config';

const Stack = createStackNavigator();

function Users({ navigation }: any) {
    const toggleNavHandler = () => {
        navigation.toggleDrawer()
    }

    const _headerRightContent = () => {
        return (
            <Button transparent onPress={() => toggleNavHandler()}>
                <Icon name='menu' />
            </Button>
        )
    }

    return (
        <Stack.Navigator
            initialRouteName={CONSTANT.SCREEN_LIST}
        >
            <Stack.Screen name={CONSTANT.SCREEN_LIST} component={List} 
                options={{
                    headerTitle: "User",
                    headerRight: () => _headerRightContent(),
                    headerLeft: () => null
                }}
            />
            <Stack.Screen name={CONSTANT.SCREEN_DETAILS} component={Details}
                options={{
                    headerTitle: "User",
                    headerRight: () => _headerRightContent()
                }}
            />
        </Stack.Navigator>
    );
}

export default Users;
