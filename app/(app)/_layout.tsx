import React from 'react'
import { Stack } from 'expo-router'
import { Pressable } from 'react-native'
import { useAuth } from '../../provider/AuthProvider'
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
  const { signOut, session } = useAuth()
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#151515',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="index"
        redirect={!session}
        options={{
          title: 'SupaList',
          headerRight: () => (
            <Pressable onPress={signOut}>
              <Ionicons name="log-out-outline" size={24} color="white" />
            </Pressable>
          ),
        }}
      />
    </Stack>
  )
}

export default Layout
