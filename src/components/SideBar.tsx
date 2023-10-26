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
    console.log(id);
  };
  return (
    <SideBarArea>
      <SideBarImg src={instagram_logo} alt="SideBar-Logo" />
      <MenuBox>
        <TopBottomBox>
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
        </TopBottomBox>
        <TopBottomBox>
          <ItemBox>
            <ItemIconBox>
              <AiOutlineMenu />
            </ItemIconBox>
            <ItemContent>더보기</ItemContent>
          </ItemBox>
        </TopBottomBox>
      </MenuBox>
    </SideBarArea>
  );
};

export default SideBar;

const SideBarArea = styled.div`
  width: 15%;
  height: 100vh;
  border-right: 1px solid #ced4da;
  padding: 2rem 1rem 2rem 1.5rem;
`;

const TopBottomBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SideBarImg = styled.img`
  width: 8rem;
  cursor: pointer;
`;

const ItemBox = styled.li`
  display: flex;
  align-items: center;
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

const MenuBox = styled.nav`
  display: flex;
  height: 95%;
  flex-direction: column;
  justify-content: space-between;
`;
