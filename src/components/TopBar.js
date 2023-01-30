import { useNavigation } from "@react-navigation/native";
import { View,Button,Icon, Title,Text } from "react-native";

export const TopBar = ({ title, leftComponent, rightComponent, noBack }) => {
    const navigation = useNavigation();
  
    return (
        
      <View>
        {leftComponent ||
          (noBack ? (
            <Text>Back</Text>
          ) : (
            <Button
              onPress={() => navigation.goBack()}
              accessible
              accessibilityRole="button"
              accessibilityLabel="Back">
              {/* <Icon
                size={30}
                name={Platform.OS === 'android' ? 'arrow-left' : 'chevron-left'}
              /> */}
            </Button>
          ))}
        <Title bold accessibilityRole="header" acessible acessibilityText={title}>
          {title}
        </Title>
        {rightComponent || <Text>Right</Text>}
      </View>
    );
  };