import { Button } from "@/components/button/Button";
import {
  Container,
  LearnLink,
  LinkDiv,
  LinkPrimary,
  Wellcome,
  WHeading,
} from "./Home.styled";

export const Home = () => {
  return (
    <Wellcome>
      <Container>
        <WHeading>This is Heritage Keepers</WHeading>
        {/* <img src="https://via.placeholder.com/960x240" alt="" /> */}
        <LinkDiv>
          <Button />
          <LinkPrimary>sign up</LinkPrimary>
          {/* <LearnLink>Learn more</LearnLink> */}
        </LinkDiv>
      </Container>
    </Wellcome>
  );
};
