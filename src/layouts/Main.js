import { ScrollView } from 'react-native';
import { SafeAreaView, StatusBar } from 'components/themed';

const Main = ({children}) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ padding: 20 }} keyboardShouldPersistTaps='handled'>
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Main;
