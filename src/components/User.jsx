import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

const User = () => {
    return (
        <UserArea>
            <UserBox>
                <PostInfo>
                    <PostUserImgBox>
                        <UserImg/>
                    </PostUserImgBox>
                    <UserName>_hyuuk_</UserName>
                </PostInfo>
                {/* <UserButton type="button">로그아웃</UserButton> */}
            </UserBox>
        </UserArea>
    )
};

export default User;

const UserArea = styled.div`
    width: 30%;
    margin-top: 1rem;
`;

const UserBox = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PostInfo = styled.div`
    display: flex;
    align-items: center;
`;

const PostUserImgBox = styled.div`
    margin-right: 1rem;
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const UserImg = styled(FaUserCircle)`
    border-radius: 30px;
    width: 100%;
    height: 80%;
    color: #adb5bd;
`;

const UserName = styled.span`
    font-weight: 600;
    cursor: pointer;
    :first-child:hover{
        color: #adb5bd;
    }
`;

const UserButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color: #4dabf7;
    font-size: 0.8rem;
`;