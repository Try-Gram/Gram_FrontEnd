import styled from "@emotion/styled";
import { AiFillHome, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import instagram_logo from "../assets/image/instagram_logo.png";

const ITEMS = [
  { id: 1, icon: <AiFillHome />, content: "홈" },
  { id: 3, icon: <AiOutlineHeart />, content: "알림" },
  { id: 4, icon: <FiPlusSquare />, content: "만들기" },
  { id: 5, icon: <FaUserCircle />, content: "프로필" },
];

const SideBar = () => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    if (id === 1) {
      navigate("/");
    } else if (id === 2) {
      navigate("/direct");
    }
  };
  return (
    <SideBarArea>
      <TopBottomBox>
        <SideBarImg src={instagram_logo} alt="SideBar-Logo" />
      </TopBottomBox>
      <ItemArea>
        {ITEMS.map(item => (
          <ItemBox
            key={item.id}
            onClick={() => {
              handleClick(item.id);
            }}>
            <ItemIconBox>{item.icon}</ItemIconBox>
            <ItemContent>{item.content}</ItemContent>
          </ItemBox>
        ))}
      </ItemArea>
      <TopBottomBox>
        <ItemBox>
          <ItemIconBox>
            <AiOutlineMenu />
          </ItemIconBox>
          <ItemContent>더보기</ItemContent>
        </ItemBox>
      </TopBottomBox>
    </SideBarArea>
  );
};

export default SideBar;

const SideBarArea = styled.div`
  width: 15%;
  height: 100%;
  border-right: 1px solid #ced4da;
  padding: 2rem 1rem 2rem 1.5rem;
`;

const TopBottomBox = styled.div`
  width: 60%;
  padding: 1rem 0;
  :last-child {
    width: 100%;
    padding: 0.2rem 0;
    :hover {
      border-radius: 20px;
      background-color: #f8f9fa;
    }
  }
`;

const SideBarImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ItemArea = styled.div`
  height: 85%;
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  height: 8%;
  font-size: 1.3rem;
  padding: 0.3rem;
  cursor: pointer;
  :hover {
    border-radius: 20px;
    background-color: #f8f9fa;
  }
`;

const ItemIconBox = styled.div`
  font-size: 1.6rem;
  :hover {
    transform: scale(1.1);
  }
  margin-right: 1.2rem;
`;

const ItemContent = styled.div`
  padding-bottom: 0.3rem;
`;
