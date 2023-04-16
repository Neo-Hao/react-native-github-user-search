import { View, StyleSheet, Image } from 'react-native';
import { MyText, MyTextBold } from '../../components/MyText';
import NotFound from '../../components/NotFound';
import Twitter from '../../components/Twitter';
import Company from '../../components/Company';
import Location from '../../components/Location';
import Website from '../../components/Website';

const UserCard = ({ user, error, loading }) => {
  if (loading)
    return (
      <View
        style={{
          ...styles.card,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MyText>Searching ...</MyText>
      </View>
    );

  if (error)
    return (
      <View
        style={{
          ...styles.card,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NotFound />
        <MyText>There's no such a profile</MyText>
        <MyText>Or something else is wrong</MyText>
      </View>
    );

  if (user === null) return null;

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <View style={styles.generalInfo}>
          <MyText style={styles.name}>{user.name}</MyText>
          <MyText style={styles.username}>@{user.login}</MyText>
          <MyText style={styles.date}>{user.created_at}</MyText>
        </View>
      </View>
      <View style={styles.bioRow}>
        <MyText>
          {user.bio !== null ? user.bio : 'This profile has no bio'}
        </MyText>
      </View>
      <View style={styles.statusRow}>
        <View style={styles.statusLables}>
          <View>
            <MyText>Repos</MyText>
            <MyTextBold style={styles.statusData}>
              {user.public_repos}
            </MyTextBold>
          </View>
          <View>
            <MyText>Followers</MyText>
            <MyTextBold style={styles.statusData}>{user.followers}</MyTextBold>
          </View>
          <View>
            <MyText>Following</MyText>
            <MyTextBold style={styles.statusData}>{user.following}</MyTextBold>
          </View>
        </View>
      </View>
      <View style={styles.social}>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Location color={user.location ? 'white' : null} />
          </View>
          <MyText style={styles.socialText}>
            {user.location ? user.location : 'Not available'}
          </MyText>
        </View>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Twitter color={user.twitter_username ? 'white' : null} />
          </View>
          <MyText style={styles.socialText}>
            {user.twitter_username ? user.twitter_username : 'Not available'}
          </MyText>
        </View>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Website color={user.blog ? 'white' : null} />
          </View>
          <MyText style={styles.socialText}>
            {user.blog ? user.blog : 'Not available'}
          </MyText>
        </View>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Company color={user.company ? 'white' : null} />
          </View>
          <MyText style={styles.socialText}>
            {user.company ? user.company : 'Not available'}
          </MyText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e2a47',
    borderColor: '#1e2a47',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  cardHeader: {
    flexDirection: 'row',
  },
  generalInfo: {
    marginLeft: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    maxWidth: 80,
    maxHeight: 80,
  },
  name: {
    fontSize: 24,
  },
  username: {
    fontSize: 16,
    color: '#0079ff',
  },
  bioRow: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  statusRow: {
    backgroundColor: '#141d2f',
    borderRadius: 10,
    padding: 30,
  },
  statusLables: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusData: {
    fontSize: 20,
  },
  social: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  socialAccount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    width: 15,
    height: 15,
    marginRight: 20,
  },
  socialText: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default UserCard;
