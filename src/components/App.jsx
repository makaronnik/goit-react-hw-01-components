import Container from './Layout/Container/Container';
import Section from './Layout/Section/Section';
import Profile from './Profile/Profile';
import user from './../data/user.json';

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
    </Container>
  );
};
