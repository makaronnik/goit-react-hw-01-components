import Container from './Layout/Container/Container';
import Section from './Layout/Section/Section';
import Profile from './Profile/Profile';
import user from './../data/user.json';

export const App = () => {
  return (
    <Container>
      <Section grey bordered>
        <h1>{'<Profile>'}</h1>
        <Profile {...user} />
      </Section>
    </Container>
  );
};
