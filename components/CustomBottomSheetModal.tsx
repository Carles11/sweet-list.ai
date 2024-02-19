import { View, StyleSheet, Text } from 'react-native'
import React, { forwardRef, useMemo } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export type Ref = BottomSheetModal

const CustomBottomSheetModal = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%', '75%'], [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>Bottom Modal 😎</Text>
        </View>
      </BottomSheetModal>{' '}
    </GestureHandlerRootView>
  )
})

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
  },
})

export default CustomBottomSheetModal
