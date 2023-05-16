import { View, StyleSheet, Image } from 'react-native';
import { useThemeColors } from 'hooks/useThemeColors';
import { ViewContrast, Text, TextBold } from 'components/themed';
import NotFound from 'components/svgr/NotFound';
import Twitter from 'components/svgr/Twitter';
import Company from 'components/svgr/Company';
import Location from 'components/svgr/Location';
import Website from 'components/svgr/Website';

const UserCard = ({ user, error, loading }) => {
  const { colors } = useThemeColors();

  if (loading)
    return (
      <ViewContrast
        style={{
          ...styles.card,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Searching ...</Text>
      </ViewContrast>
    );

  if (error)
    return (
      <ViewContrast
        style={{
          ...styles.card,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NotFound />
        <Text>There's no such a profile</Text>
        <Text>Or something else is wrong</Text>
      </ViewContrast>
    );

  if (user === null) return null;

  return (
    <ViewContrast style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <View style={styles.generalInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.login}</Text>
          <Text style={styles.date}>{user.created_at}</Text>
        </View>
      </View>
      <View style={styles.bioRow}>
        <Text>{user.bio !== null ? user.bio : 'This profile has no bio'}</Text>
      </View>
      <View style={[styles.statusRow, { backgroundColor: colors.background }]}>
        <View style={styles.statusLables}>
          <View>
            <Text>Repos</Text>
            <TextBold style={styles.statusData}>{user.public_repos}</TextBold>
          </View>
          <View>
            <Text>Followers</Text>
            <TextBold style={styles.statusData}>{user.followers}</TextBold>
          </View>
          <View>
            <Text>Following</Text>
            <TextBold style={styles.statusData}>{user.following}</TextBold>
          </View>
        </View>
      </View>
      <View style={styles.social}>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Location color={user.location ? colors.text : colors.textLowContrast} />
          </View>
          <Text style={styles.socialText}>
            {user.location ? user.location : 'Not available'}
          </Text>
        </View>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Twitter color={user.twitter_username ? colors.text : colors.textLowContrast} />
          </View>
          <Text style={styles.socialText}>
            {user.twitter_username ? user.twitter_username : 'Not available'}
          </Text>
        </View>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Website color={user.blog ? colors.text : colors.textLowContrast} />
          </View>
          <Text style={styles.socialText}>
            {user.blog ? user.blog : 'Not available'}
          </Text>
        </View>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Company color={user.company ? colors.text : colors.textLowContrast} />
          </View>
          <Text style={styles.socialText}>
            {user.company ? user.company : 'Not available'}
          </Text>
        </View>
      </View>
    </ViewContrast>
  );
};

const styles = StyleSheet.create({
  card: {
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
    color: '#0079ff',
  },
  bioRow: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  statusRow: {
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
