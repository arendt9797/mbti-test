import { Link, useOutletContext } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';
import Button from '../ui/Button';
import Input from '../ui/Input';

function AuthForm() {
  const {
    pageName,
    AUTH_TEXT: { SIGNIN_TEXT, SIGNUP_TEXT },
  } = useOutletContext();

  const isSignIn = pageName === ROUTER_URL.SIGNIN;

  return (
    <>
      <form className="m-auto w-64 h-80 flex flex-col justify-between">
        <Input type="email" placeholder="이메일" required />
        <Input type="password" placeholder="비밀번호" required />
        {isSignIn ? (
          <div className="h-10"></div>
        ) : (
          <Input type="text" placeholder="닉네임" required />
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
