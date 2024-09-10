import { Containerimport { capitalizeFirstLetter } from "./strings";
 } from "./components/Container";
import { Textimport { capitalizeFirstLetter } from "./strings";
 } from "./components/Text";

export function NewsPage() {
  return (
      <Container background="#fff" padding="29">
        <Text text="news" fontSize="20"></Text>
      </Container>
  );
}