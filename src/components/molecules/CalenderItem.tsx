import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Marker from "../atoms/Marker";
import DayText from "../atoms/DayText";

interface CalendarItemProps {
   style: object
   text: string
}

const CalendarItem = ({ style, text } : CalendarItemProps) => {
    return <View style={styles.parent}>
       <Marker style={style}/>
       <DayText text={text} />
    </View>
  };
  

  const styles = StyleSheet.create({
     parent: {
        width: 40,
        height: 50
     }
   
  })
  
export default CalendarItem;