import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app.routes';

const linking = {
    prefixes: ['exp://192.168.0.3:19000/--/deeplink'],
    config: {
        screens: {
            home: {
                path: 'home'
            },
            product: {
                path: 'product/:id',
                parse: {
                    id: (id: string) => id
                }
            }
        }
    }
}

export function Routes(){
    return (
        <NavigationContainer linking={linking}>
            <AppNavigator />
        </NavigationContainer>
    )   
}