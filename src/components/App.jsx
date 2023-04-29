import Container from './Layout/Container/Container';
import Section from './Layout/Section/Section';
import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from './../data/user.json';
import data from './../data/data.json';
import friends from './../data/friends.json';

export const App = () => {
  return (
    <Container>
      <Section grey bordered>
        <h1>{'<Profile>'}</h1>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section grey>
        <h1>{'<Statistics>'}</h1>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <h1>{'<FriendList>'}</h1>
        <FriendList friends={friends} />
      </Section>
    </Container>
  );
};
