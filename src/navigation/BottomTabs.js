import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import GitHubProfile from 'screens/GitHubProfile';
import GitHubProfiles from 'screens/GitHubProfiles';
import Settings from 'screens/Settings';

import { useThemeColors } from 'hooks/useThemeColors';

const TabBarIcon = ({ color, size, name }) => (
  <Ionicons name={name} size={size} color={color} />
);

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { colors } = useThemeColors();

  return (
    <Tab.Navigator
      initialRouteName='GitHubProfile'
      screenOptions={{
        tabBarInactiveTintColor: colors.textMidContrast,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name='Profile'
        component={GitHubProfile}
        options={{
          title: 'Profile',
          tabBarIcon: (props) => (
            <TabBarIcon name='ribbon-outline' {...props} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Profiles'
        component={GitHubProfiles}
        options={{
          title: 'Profiles',
          tabBarIcon: (props) => (
            <TabBarIcon name='apps-outline' {...props} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: (props) => (
            <TabBarIcon name='settings-outline' {...props} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
