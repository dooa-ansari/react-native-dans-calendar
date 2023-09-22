import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { CalanderData, getMonthDate } from "../../Utils/dates";

interface BottomBarHeadingProps {
  text: string
}

const BottomBarHeading = ({ text } : BottomBarHeadingProps) => {
    return <View>
         <Text>{text}</Text>
    </View>
  };
  

  const styles = StyleSheet.create({
    
   
  })
  
export default BottomBarHeading;