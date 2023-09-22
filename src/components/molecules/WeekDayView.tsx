import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { CalanderData, getMonthDate } from "../../Utils/dates";

interface WeekDayViewProps {
   weekDayList: string[]
}

const WeekDayView = ({ weekDayList } : WeekDayViewProps) => {
    return <View style={styles.parent}>
         {weekDayList.map((item) => <View style={styles.child}>
            <Text>{item[0] + item[1]}</Text>
         </View>)}
    </View>
  };
  

  const styles = StyleSheet.create({
    parent: {
        flexDirection: "row"
    },
    child: {
        width: 40
    }
  })
  
export default WeekDayView;