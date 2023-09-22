import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CalanderData, getMonthDate } from "../../Utils/dates";

interface ArrowProps {
   src: string
   onPress: () => void
}

const Arrow = ({ src, onPress } : ArrowProps) => {
    return <TouchableOpacity onPress={onPress}>
         <Image style={styles.imageSize} source={{uri: src}}></Image>
    </TouchableOpacity>
  };
  

  const styles = StyleSheet.create({
     imageSize: {
        width: 30,
        height: 30
     }
   
  })
  
export default Arrow;