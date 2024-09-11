import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#FFFFFF80",
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: Colors.tintDark,
        },
        title: "AquaNível",
        headerTitleStyle: {
          color: "white",
          fontSize: 24,
        },
        tabBarStyle: {
          backgroundColor: Colors.tintDark,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="charts"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bar-chart" : "bar-chart-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
