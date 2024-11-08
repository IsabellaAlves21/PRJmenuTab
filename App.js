import * as React from 'react';
import { NavigationContainer } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from './TelaInicial';
import Pagina01 from './Pagina01';
import Pagina02 from './Pagina02';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Tela inicial" component={TelaInicial} />
        <Tab.Screen name="pagina 01" component={Pagina01} />
        <Tab.Screen name="pagina 02" component={Pagina02} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;