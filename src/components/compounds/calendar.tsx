import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { CalanderData, getMonthDate } from "../../Utils/dates";

interface CalendarProps {
   locale: string
}

const Calendar = ({ locale } : CalendarProps) => {
    const dataList: CalanderData[] = getMonthDate(locale)
    const datesCurrentMonth = getMonthDate(locale)
    return  <FlatList
    data={dataList}
    renderItem={({ item }) => (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
         <Text>{item?.month + " " + item?.day}</Text>
      </View>
    )}
    numColumns={6}
    
  />
  };
  

  const styles = StyleSheet.create({
    
   
  })
  
export default Calendar;