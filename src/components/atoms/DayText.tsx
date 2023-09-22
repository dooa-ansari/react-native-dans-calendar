import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { CalanderData, getMonthDate } from "../../Utils/dates";

interface DayTextProps {
  text: string
}

const DayText = ({ text } : DayTextProps) => {
    return <View>
         <Text>{text}</Text>
    </View>
  };
  

  const styles = StyleSheet.create({
    
   
  })
  
export default DayText;