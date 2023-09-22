import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { CalanderData, getMonthDate } from "../../Utils/dates";

interface MarkerProps {
   style: object
}

const Marker = ({ style } : MarkerProps) => {
    return <View style={style || styles.default}>

    </View>
  };
  

  const styles = StyleSheet.create({
    default: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 10
      }
  })
  
export default Marker;