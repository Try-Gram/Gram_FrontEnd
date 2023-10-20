import styled from "@emotion/styled";
import { FiMoreHorizontal } from "react-icons/fi";
import eojoonhyuk from "../assets/image/eojoonhyuk.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegComment, FaUserCircle } from "react-icons/fa";
import { SetStateAction, useState } from "react";

const BOTTOM_ICONS = [
  { id: 1, icon: <AiOutlineHeart /> },
  { id: 2, icon: <FaRegComment /> },
  { id: 3, icon: <IoPaperPlaneOutline /> },
];

const PostItem = () => {
  const [comment, setComment] = useState("");
  const handleOnChange = (e: { target: { value: SetStateAction<string> } }) => {
    setComment(e.target.value);
  };
  return (
    <PostItemArea>
      <PostHeader>
        <HeaderContents>
          <PostInfo>
            <PostUserImgBox>
              <UserImg />
            </PostUserImgBox>
            <UserName>_hyuuk_</UserName>
            <TimePoint>•</TimePoint>
            <Time>6일</Time>
          </PostInfo>
          <PostHeaderButton>
            <HeaderButtonIcon />
          </PostHeaderButton>
        </HeaderContents>
      </PostHeader>
      <PostContentBox>
        <PostContent src={eojoonhyuk} alt="eo" />
      </PostContentBox>
      <PostBottom>
        <BottomIconBox>
          {BOTTOM_ICONS.map(item => (
            <BottomIcon key={item.id}>{item.icon}</BottomIcon>
          ))}
        </BottomIconBox>
        <HeartCountBox>{`좋아요 ${210}개`}</HeartCountBox>
        <UserName>_hyuuk_</UserName>
        <CommentsView>{`댓글 ${29}개 모두 보기`}</CommentsView>
        <CommentInputBox>
          <CommentInput onChange={handleOnChange} placeholder="댓글 달기..." />
          {comment.length === 0 ? (
            ""
          ) : (
            <Commentbutton type="button">게시</Commentbutton>
          )}
        </CommentInputBox>
      </PostBottom>
    </PostItemArea>
  );
};

export default PostItem;

const PostItemArea = styled.div`
  width: 60%;
  height: 750px;
`;

const PostHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`;

const HeaderContents = styled.div`
  width: 100%;
  height: 60px;
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
  :first-child:hover {
    color: #adb5bd;
  }
`;

const TimePoint = styled.span`
  color: #adb5bd;
  margin-left: 0.5rem;
  margin-right: 0.2rem;
`;

const Time = styled.span`
  color: #adb5bd;
`;

const PostHeaderButton = styled.button`
  border: none;
  background: none;
`;

const HeaderButtonIcon = styled(FiMoreHorizontal)`
  font-size: 1.3rem;
  :hover {
    color: #adb5bd;
  }
`;

const PostContentBox = styled.div`
  width: 100%;
  height: 450px;
`;

const PostContent = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const PostBottom = styled.div`
  height: 170px;
  border-bottom: 1px solid #adb5bd;
`;

const BottomIconBox = styled.div`
  margin: 1rem 0;
  display: flex;
  height: 30px;
`;

const BottomIcon = styled.div`
  font-size: 1.6rem;
  cursor: pointer;
  :nth-child(1) {
    font-size: 1.8rem;
  }
  :nth-child(2) {
    font-size: 1.5rem;
    padding-top: 2px;
    margin: 0 1rem;
  }
  :nth-child(3) {
    padding-top: 2px;
  }
`;

const HeartCountBox = styled.div`
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const CommentsView = styled.div`
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #adb5bd;
`;

const CommentInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

const CommentInput = styled.input`
  border: none;
  font-size: 1rem;
  width: 90%;
  height: 100%;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #adb5bd;
  }
`;

const Commentbutton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: #4dabf7;
  background: none;
  border: none;
  cursor: pointer;
`;
