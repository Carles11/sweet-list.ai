import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native'
import CustomBottomSheet from '../../components/CustomBottomSheet'
import { useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'

export default function TabTwoScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const [title, setTitle] = useState('Passing my data 🔥')

  const handleClosePress = () => bottomSheetRef.current?.close()
  const handleOpenPress = () => bottomSheetRef.current?.expand()

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      <Pressable onPress={handleOpenPress}>
        <Text>Open</Text>
      </Pressable>
      <Pressable onPress={handleClosePress}>
        <Text>Close</Text>
      </Pressable>
      <CustomBottomSheet ref={bottomSheetRef} title={title} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
})
