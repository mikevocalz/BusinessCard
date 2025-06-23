import Entypo from "@expo/vector-icons/Entypo";
import { Image, ImageBackground } from "expo-image";
import { Stack } from "expo-router";
import { FlatList, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { data } from "../data.js";

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
      contentContainerClassName="flex bg-red-500"
      className="w-full max-w-7xl "
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
          <View className="flex flex-col items-center gap-2">
            <Text className="text-2xl font-bold">{data.name}</Text>
            <Text className="text-lg font-semibold">{data.jobTitle}</Text>

            <View className="flex flex-row items-center gap-9 p-3">
            {data.socials.map((social, i) => (
              <Pressable key={i} onPress={() => Linking.openURL(social.url)}>
              <Entypo  name={social.icon} size={24} color="black" />
              </Pressable>
            ))}
            </View>
          </View>


            <View className=" absolute bottom-[200px]">
  
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName=" gap-4 px-4"
            data={data.works}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable 
                className="mb-4 mr-4 rounded-xl overflow-hidden bg-white shadow-md"
                style={{
                  width: 200,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                  overflow: 'hidden',
                }}
                onPress={() => Linking.openURL(item.url)}
              >
                <Image 
                  alt={item.name} 
                  source={{ uri: item.image }} 
                  style={{
                    width: '100%', 
                    height: 150,
                  }}
                  className="rounded-t-xl"
                />
                <View className="p-3 bg-slate-100 overflow-hidden rounded-b-xl">
                  <Text className="text-base font-semibold text-center">{item.name}</Text>
                </View>
              </Pressable>
            )}
          />
          </View>

        </View>
        </ScrollView>
     
    </>
  );
}
