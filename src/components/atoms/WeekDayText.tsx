import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { CalanderData, getMonthDate } from "../../Utils/dates";

interface WeekDayTextProps {
  text: string
}

const WeekDayText = ({ text } : WeekDayTextProps) => {
    return <View>
         <Text>{text}</Text>
    </View>
  };
  

  const styles = StyleSheet.create({
    
   
  })
  
export default WeekDayText;