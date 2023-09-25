import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {CalanderData, MarkerData, getMonthAndYear, getMonthDate, getWeekDays} from '../../Utils/dates';
import Marker from '../atoms/Marker';
import CalendarItem from '../molecules/CalenderItem';
import WeekDayView from '../molecules/WeekDayView';
import BottomBar from '../molecules/BottomBar';
import { LEFT_IMAGE_URL, RIGT_IMAGE_URL } from '../../Utils/constants';
import { useState } from 'react';

interface CalendarProps {
  locale: string;
  markerList: Map<string, MarkerData>
}

interface MarkerData {
    style: object
}

const Calendar = ({locale, markerList}: CalendarProps) => {
  const defaultMonth = getMonthAndYear(locale)
 
  //console.log(JSON.stringify(monthAndYear))
  const [currentMonth, setCurrentMonth] = useState(defaultMonth.monthNumber)
  const [dataList, setDataList] =  useState(getMonthDate(locale, currentMonth)) 
  const monthAndYear = getMonthAndYear(locale, currentMonth)
  console.log(JSON.stringify(monthAndYear))
  //console.log(currentMonth)
  //console.log(JSON.stringify(dataList))

  const updateMonthIncrease = () => {
      setCurrentMonth(currentMonth + 1)
      setDataList(getMonthDate(locale, currentMonth))
  }

  const updateMonthDecrease = () => {
    setCurrentMonth(currentMonth - 1)
    setDataList(getMonthDate(locale, currentMonth))
    console.log(JSON.stringify(dataList))
  }

  const getListItem = (item: CalanderData) => {
    const markerData : MarkerData = item ? markerList.has(item.fullDay) ? markerList.get(item.fullDay) : styles.default : null
    return <CalendarItem style={markerData} text={item?.day}/>
  }

  return (
    <View>
        <WeekDayView weekDayList={getWeekDays("de")}/>
<FlatList
      style={styles.listStyle}
      data={dataList}
      renderItem={({item}) => getListItem(item)}
      numColumns={7}
    />
    <BottomBar  
    onPressRight={updateMonthIncrease}
    onPressLeft={updateMonthDecrease}
    monthName={monthAndYear?.month}
   year={monthAndYear?.year}
   leftImage={LEFT_IMAGE_URL}
   rightImage={RIGT_IMAGE_URL} />
    </View>
    
  );
};

const styles = StyleSheet.create({
    listStyle: {
      flexGrow: 0
    },
    default: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: "#9796"
      }
});

export default Calendar;
