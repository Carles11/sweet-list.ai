import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { useRef } from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import CustomBottomSheetModal from '../../components/CustomBottomSheetModal'

export default function TabOneScreen() {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const { dismiss } = useBottomSheetModal()

  const handlePresentModalPress = () => bottomSheetRef.current?.present()

  return (
    <View style={styles.container}>
      <CustomBottomSheetModal ref={bottomSheetRef} />
      <Pressable onPress={handlePresentModalPress}>
        <Text>Present Modal</Text>
      </Pressable>
      <Pressable onPress={() => dismiss()}>
        <Text>Dismiss Modal</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
    color: '#fff',
  },
  input: {
    marginTop: 8,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
    color: '#fff',
  },
})
