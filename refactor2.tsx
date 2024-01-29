import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";

type InputProps = TextInputProps;

const Input: React.FC<InputProps> = (props) => {
  return <TextInput {...props} />;
};

const Screen: React.FC = ({ navigation }: any) => {
  const [name, setName] = useState("");

  const submitName = () => {
    navigation.navigate("AnotherScreen", { name });
  };

  return (
    <View style={styles.container}>
      <Input value={name} onChangeText={(text) => setName(text)} />
      <TouchableOpacity onPress={submitName}>
        <Text style={styles.title}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "red",
  },
});

export default Screen;
