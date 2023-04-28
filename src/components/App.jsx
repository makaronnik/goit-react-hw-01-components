import Container from './Layout/Container/Container';
import Section from './Layout/Section/Section';
import Profile from './Profile/Profile';
import user from './../data/user.json';

export const App = () => {
  return (
    <Container>
      <Section>
        <Profile {...user} />
      </Section>
    </Container>
  );
};
