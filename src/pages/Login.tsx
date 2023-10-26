import styled from "@emotion/styled";
import { SiKakaotalk } from "react-icons/si";
import instagram_logo from "../assets/image/instagram_logo.png";
import KakaoLogin from "react-kakao-login";

const SocialKakaoLogin = () => {
  const kakaoClientId = "44eba3f1a1639a31f0e9f47e432bb4e1";
  const kakaoOnSuccess = async (data: any) => {
    console.log(data);
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
  };
  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
};

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
              <SocialKakaoLogin />
            </GoogleKaKaoButton>
            <SearchContent>비밀번호를 잊으셨나요?</SearchContent>
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
  width: 22rem;
  height: 100%;
  border: 1px solid #ced4da;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const LoginContents = styled.div``;

const Logo = styled.img`
  width: 100%;
  cursor: pointer;
  padding: 1rem 4rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

const InputBox = styled.div`
  width: 80%;
  height: 2.5rem;
`;

const IdPasswordInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 0.4rem;
  border: 1px solid #ced4da;
`;

const LoginButton = styled.button`
  width: 80%;
  height: 2.2rem;
  background-color: #339af0;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

const LineBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineContent = styled.div`
  width: 20%;
  font-weight: 600;
  color: #868e96;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 40%;
  height: 0;
  border: 1px solid #ced4da;
`;

const GoogleKaKaoButton = styled.div`
  width: 70%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
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

const SearchContent = styled.a`
  cursor: pointer;
  font-size: 0.8rem;
`;

const JoinBox = styled.div`
  width: 22rem;
  height: 3.125rem;
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
