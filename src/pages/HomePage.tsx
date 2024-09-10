import { Container } from "./../components/Container";
import { Text } from "./../components/Text";
import { Card, CardTop, CardBottom } from "./../components/Card";
import { Button } from "./../components/Button";

export function HomePage() {
  return (
      <Container background="#fff" padding="29">
        <Text text="New Route Project" fontSize="20"></Text>
        <Container background="#fae0e0" padding="41">
          <Card background="#fbf5f5" padding="16">
            <CardTop>
              <Text text="Title" fontSize="20"></Text>
              <Text text="Subtitle" fontSize="15"></Text>
            </CardTop>
            <CardBottom>
              <Button size="small" variant="contained" color="primary" onClickScript="">Learn more</Button>
            </CardBottom>
          </Card>
        </Container>
        <Button size="small" variant="outlined" color="secondary" onClickScript="alert('koko')">Click me</Button>
      </Container>
  );
}