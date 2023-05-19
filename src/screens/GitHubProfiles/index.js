import { ScrollView } from 'react-native';
import Header from './Header';
import UserList from './UserList';
import Layout from 'layouts/Main';

const GitHubProfiles = () => {
  return (
    <Layout>
      <Header style={{ padding: 20 }} />
      <ScrollView style={{ padding: 20 }} keyboardShouldPersistTaps='handled'>
        <UserList />
      </ScrollView>
    </Layout>
  );
};

export default GitHubProfiles;
