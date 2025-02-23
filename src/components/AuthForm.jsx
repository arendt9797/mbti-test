import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useState } from 'react';
import { login, register } from '../apis/authApi';
import useAuthStore from '../store/authStore';

function AuthForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  
  const {
    pageName,
    AUTH_TEXT: { SIGNIN_TEXT, SIGNUP_TEXT },
  } = useOutletContext();

  const navigate = useNavigate()

  const isSignIn = pageName === ROUTER_URL.SIGNIN;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        const loginData = await login({ id, password });
        if (loginData.success) {
          alert('로그인 성공!')
          setAccessToken(loginData.accessToken);
          navigate(ROUTER_URL.HOME);
        }
      } else {
        const registerData = await register({ id, password, nickname });
        if (registerData.success) {
          alert('회원가입 성공! 로그인을 해주세요')
          navigate(ROUTER_URL.SIGNIN)
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <form
        className="m-auto w-64 h-80 flex flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isSignIn ? (
          <div className="h-10"></div>
        ) : (
          <Input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        )}

        <Button type="submit">{isSignIn ? SIGNIN_TEXT : SIGNUP_TEXT}</Button>
      </form>

      <div className="mt-8">
        <span className="mr-2">
          {isSignIn ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}
        </span>
        <Link
          to={isSignIn ? ROUTER_URL.SIGNUP : ROUTER_URL.SIGNIN}
          className="font-bold text-secondary italic underline"
        >
          {isSignIn ? SIGNUP_TEXT : SIGNIN_TEXT}
        </Link>
      </div>
    </>
  );
}

export default AuthForm;
