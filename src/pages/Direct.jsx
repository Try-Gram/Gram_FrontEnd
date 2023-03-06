import styled from "styled-components";
import { SideBar } from "../components";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { User } from "../components"
import { IoPaperPlaneOutline } from "react-icons/io5";
const Direct = () => {
    return (
        <DirectArea>
            <SideBar/>
            <DirectBox>
                <DirectContents>
                    <UserBox>
                        <MyAccountBox>
                            <MyAccountName>_hyuuk_</MyAccountName>
                            <NewMessageIconBox>
                                <NewMessageIcon/>
                            </NewMessageIconBox>
                        </MyAccountBox>
                        <UsersBox>
                            <User/>
                            <User/>
                        </UsersBox>
                    </UserBox>
                    <MessageBox>
                        <MessageIconBox>
                            <MessageIcon/>
                        </MessageIconBox>
                        <MyMessage>내 메세지</MyMessage>
                        <Advise>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</Advise>
                        <MessageButton>메시지 보내기</MessageButton>
                    </MessageBox>
                </DirectContents>
            </DirectBox>
        </DirectArea>
    )
}

export default Direct;

const DirectArea = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const DirectBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
`;

const DirectContents = styled.div`
    width: 70%;
    height: 95%;
    border: 1px solid #ced4da;
    display: flex;
`;

const UserBox = styled.div`
    width: 40%;
    border-right: 1px solid #ced4da;
`;

const MyAccountBox = styled.div`
    width: 100%;
    height: 8%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ced4da;
    font-weight: 600;
`;

const MyAccountName = styled.div`
    width: 100%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
`;

const NewMessageIconBox = styled.button`
    cursor: pointer;
    border: none;
    background: none;
`;

const NewMessageIcon = styled(HiOutlinePencilSquare)`
    font-size: 1.8rem;
`;

const UsersBox = styled.div`
    height: 92%;
    padding: 0 1rem;
`;


const MessageBox = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const MessageIconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 50px;
`;

const MessageIcon = styled(IoPaperPlaneOutline)`
    font-size: 6rem;
    padding: 1rem 1.4rem 1rem 1rem;
`;

const MyMessage = styled.div`
    font-size: 1.4rem;
    margin: 0.9rem 0;
`;

const Advise = styled.div`
    font-size: 0.9rem;
    color: #868e96;
`;

const MessageButton = styled.button`
    width: 18%;
    height: 30px;
    background-color: #339af0;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
    margin-top: 1.3rem;
    :hover{
        background-color: #1c7ed6;
    }
`;

