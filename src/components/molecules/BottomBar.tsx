import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { CalanderData, getMonthDate } from "../../Utils/dates";
import Arrow from "../atoms/Arrow";
import BottomBarHeading from "../atoms/BottomBarHeading";

interface BottomBarProps {
   monthName: string,
   year: number,
   leftImage: string,
   rightImage: string,
   onPressLeft: () => void,
   onPressRight: () => void
}

const BottomBar = ({ monthName, year, leftImage, rightImage, onPressRight, onPressLeft } : BottomBarProps) => {
    return <View style={styles.parent}>
        <Arrow onPress={onPressLeft} src={leftImage}/>
        <BottomBarHeading text={monthName +" "+year} />
        <Arrow src={rightImage} onPress={onPressRight}/>
    </View>
  };
  

  const styles = StyleSheet.create({
    parent: {
        flexDirection: "row"
    },
  })
  
export default BottomBar;