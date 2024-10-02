import React from "react";
import { View, Text, Image } from "react-native";
import { Tabs, Stack } from "expo-router";
import { icons, images } from "../../constants";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

import { TabIconProps } from "../../types/type";

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => (
  <View className="items-center justify-center gap-2">
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
    />
    <Text
      className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
      style={{ color: color }}
    >
      {name}
    </Text>
  </View>
);

const tabsLayout = () => (
  <>
    <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn
            iconUrl={images.logo}
            handlePress={() => {}}
            width={150}
            height={90}
          />
        ),
        title: "",
      }}
    />
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#59A60E",
        tabBarInactiveTintColor: "#080807",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          height: 80,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.window}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.records}
              color={color}
              name="Transaction"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.booking}
              color={color}
              name="Booking"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.millmap}
              color={color}
              name="Map"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  </>
);

export default tabsLayout;
