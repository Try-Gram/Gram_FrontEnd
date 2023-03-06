import styled from "styled-components";
import { SideBar, PostItem, User } from "../components"

const Home = () => {
    return (        
        <HomeArea>
            <SideBar/>
            <HomeBox>
                <ContentsBox>
                    <PostItem/>
                </ContentsBox>
                <User/>
            </HomeBox>
        </HomeArea>
    )
};

export default Home;

const HomeArea = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const HomeBox = styled.div`
    width: calc(85% - 4rem);
    display: flex;
    margin: 1rem 2rem 0 2rem;
`;

const ContentsBox = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
`;
