import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Discover = () => {
  const [greeting, setGreeting] = useState("Hello");

  const connect = () => {
    // const URL = "http://10.0.2.2:5000/test";
    const URL = "http://127.0.0.1:5000/test";
    fetch(URL)
      .then((response) => {
        if (response.status == 200) {
          return response.text();
        } else {
          throw new Error("Error");
        }
      })
      .then((responseText) => {
        setGreeting(responseText);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <View>
      <Text>Discover Component</Text>
      <Text>{greeting}</Text>
      <Button title="Click" onPress={connect}></Button>
    </View>
  );
};

export default Discover;
