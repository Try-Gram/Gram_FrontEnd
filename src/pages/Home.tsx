import styled from "@emotion/styled";
import { PostItem, SideBar } from "../components";

const Home = () => {
  return (
    <HomeArea>
      <SideBar />
      <HomeBox>
        <ContentsBox>
          <PostItem />
          <PostItem />
          <PostItem />
        </ContentsBox>
      </HomeBox>
    </HomeArea>
  );
};

export default Home;

const HomeArea = styled.div`
  width: 100%;
  display: flex;
`;

const HomeBox = styled.div`
  width: 85%;
  margin: 1rem 0;
`;

const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  gap: 2rem;
`;
