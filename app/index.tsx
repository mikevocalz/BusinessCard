import { Image, ImageBackground } from "expo-image";
import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {data} from "../data.js";


export default function Index() {

  const insets = useSafeAreaInsets();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
  
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      scrollEventThrottle={16}
      nestedScrollEnabled={true}
      contentContainerStyle={{ flexGrow: 1 , paddingTop: -insets.top}}
      scrollEnabled
      contentContainerClassName="flex bg-red-500 items-center"
      className="h-full w-full max-w-7xl "
    >
        <ImageBackground
          contentFit="cover"
          source={{
            uri: "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg",
          }}
          style={{
            width: "100%",
            maxHeight: 400,
            aspectRatio: 16 / 9,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/v2/C4E03AQG7C1E5Npkbuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1566231507204?e=1755734400&v=beta&t=hApyrlapRIhLoQd1cZ5IZdG4Nvva5oFkF3cYVD5IBTY",
            }}
            style={{
              position: "absolute",
              width: 150,
              height: 150,
              borderRadius: 150,
              borderColor: "white",
              borderWidth: 5,
              bottom: -150/2,
              zIndex: 1,
            }}
          />
        </ImageBackground>
        <View 
        className="flex w-full h-full pt-[100px] bg-white items-center">
          <View className="flex flex-col items-center">
            <Text>{data.name}</Text>
            <Text>{data.jobTitle}</Text>
          </View>


        </View>
        </ScrollView>
     
    </>
  );
}
