import styled from "@emotion/styled";
import { SiKakaotalk } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import instagram_logo from "../assets/image/instagram_logo.png";

const Login = () => {
  return (
    <LoginArea>
      <LoginContents>
        <LoginBox>
          <Logo src={instagram_logo} alt="instagram-logo" />
          <LoginForm>
            <InputBox>
              <IdPasswordInput
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </InputBox>
            <InputBox>
              <IdPasswordInput type="password" placeholder="비밀번호" />
            </InputBox>
            <LoginButton type="button">로그인</LoginButton>
            <LineBox>
              <Line />
              <LineContent>또는</LineContent>
              <Line />
            </LineBox>
            <GoogleKaKaoButton>
              <KaKaoIcon />
              <ButtonContent>Kakao로 로그인</ButtonContent>
            </GoogleKaKaoButton>
            <GoogleKaKaoButton>
              <GoogleIcon />
              <ButtonContent>Google로 로그인</ButtonContent>
            </GoogleKaKaoButton>
            <PasswordSearch>
              <SearchContent>비밀번호를 잊으셨나요?</SearchContent>
            </PasswordSearch>
          </LoginForm>
        </LoginBox>
      </LoginContents>
      <JoinBox>
        <JoinContent>계정이 없으신가요?</JoinContent>
        <JoinContent>가입하기</JoinContent>
      </JoinBox>
    </LoginArea>
  );
};

export default Login;

const LoginArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginBox = styled.div`
  width: 350px;
  height: 100%;
  border: 1px solid #ced4da;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginContents = styled.div`
  height: 430px;
`;

const Logo = styled.img`
  width: 100%;
  height: 30%;
  padding: 1rem 5rem;
  cursor: pointer;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputBox = styled.div`
  width: 80%;
  height: 40px;
  margin-bottom: 1rem;
`;

const IdPasswordInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 0.4rem;
  border: 1px solid #ced4da;
`;

const LoginButton = styled.button`
  width: 80%;
  height: 35px;
  background-color: #339af0;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  color: white;
`;

const LineBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.6rem 0 1rem 0;
`;

const LineContent = styled.div`
  width: 20%;
  font-weight: 600;
  color: #868e96;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 40%;
  height: 0;
  border: 1px solid #ced4da;
`;

const GoogleKaKaoButton = styled.button`
  width: 70%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  margin-bottom: 0.8rem;
`;

const ButtonContent = styled.span`
  margin-left: 0.6rem;
  color: #385185;
  font-weight: 600;
`;

const KaKaoIcon = styled(SiKakaotalk)`
  font-size: 1.4rem;
  color: yellow;
  background-color: #8f784b;
  border-radius: 5px;
`;

const GoogleIcon = styled(FcGoogle)`
  font-size: 1.4rem;
`;

const PasswordSearch = styled.div``;

const SearchContent = styled.a`
  cursor: pointer;
  font-size: 0.8rem;
`;

const JoinBox = styled.div`
  width: 350px;
  height: 50px;
  border: 1px solid #ced4da;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinContent = styled.span`
  :last-child {
    margin-left: 0.6rem;
    color: #4dabf7;
    font-weight: 600;
    cursor: pointer;
  }
`;
