import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return <Redirect href={"/(tabs)"} />;
  // return (
  //   <View>
  //     <Text>Данные</Text>
  //   </View>
  // );
}
