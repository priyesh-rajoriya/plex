import HomeScreen from './src/components/Homescreen'

const plexus = StackNavigator({
    HomeScreen: {
        screen: HomeScreen,
    },
},
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none'
    });
export default plexus
console.disableYellowBox = true;
