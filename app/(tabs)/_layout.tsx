import Header from '@/components/Header';
import TabBarIcon from '@/components/TabBarIcon';
import { height } from '@/constants';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
    return (
        <SafeAreaView
            style={{ flex: 1 }}
            edges={['left', 'right', 'bottom']}
            className="bg-primary_bg"
        >
            <Header />
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#F2C94C",
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: "#000000", height: height * 0.07, paddingTop: 25 }
            }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        tabBarPosition: "bottom",
                        tabBarButton: (props) => (
                            <TouchableWithoutFeedback onPress={props.onPress}>
                                <View className={`flex justify-center items-center`}>{props.children}</View>
                            </TouchableWithoutFeedback>
                        ),
                        tabBarIcon: ({ color, focused }) => <TabBarIcon icon={<FontAwesome name="home" size={24} color={color} />} title={"Home"} focused={focused} />
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        headerShown: false,
                        tabBarPosition: "bottom",
                        tabBarButton: (props) => (
                            <TouchableWithoutFeedback onPress={props.onPress}>
                                <View className={`flex justify-center items-center`}>{props.children}</View>
                            </TouchableWithoutFeedback>
                        ),
                        tabBarIcon: ({ color, focused }) =>
                            <TabBarIcon icon={<Feather name="search" size={24} color={color} />} title={"Search"} focused={focused} />,
                    }}
                />
                <Tabs.Screen
                    name="whishlist"
                    options={{
                        headerShown: false,
                        tabBarPosition: "bottom",
                        tabBarButton: (props) => (
                            <TouchableWithoutFeedback onPress={props.onPress}>
                                <View className={`flex justify-center items-center`}>{props.children}</View>
                            </TouchableWithoutFeedback>
                        ),
                        tabBarIcon: ({ color, focused }) =>
                            <TabBarIcon icon={
                                <MaterialCommunityIcons name="clipboard-list" size={24} color={color} />} title={"Whishlist"} focused={focused} />,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                        tabBarPosition: "bottom",
                        tabBarButton: (props) => (
                            <TouchableWithoutFeedback onPress={props.onPress}>
                                <View className={`flex justify-center items-center`}>{props.children}</View>
                            </TouchableWithoutFeedback>
                        ),
                        tabBarIcon: ({ color, focused }) =>
                            <TabBarIcon icon={<Feather name="user" size={24} color={color} />} title={"Profile"} focused={focused} />,
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}
