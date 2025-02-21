import { Link, useOutletContext } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';
import Button from '../ui/Button';
import Input from '../ui/Input';

function UserForm() {
  const {
    currentPage,
    FORM_TYPE: { SIGNIN_TEXT, SIGNUP_TEXT, PROFILE_TEXT },
  } = useOutletContext();

  const PROFILE_UPDATE_TEXT = `${PROFILE_TEXT} 업데이트`;
  const isSignIn = currentPage === ROUTER_URL.SIGNIN;
  const isSignUp = currentPage === ROUTER_URL.SIGNUP;
  const isProfile = currentPage === ROUTER_URL.PROFILE;

  return (
    <>
      <form className="m-auto w-64 flex flex-col gap-10">
        {/* 이메일, 비밀번호 (회원가입 & 로그인에서만 표시) */}
        {(isSignIn || isSignUp) && (
          <Input type="email" placeholder="이메일" required />
        )}
        {(isSignIn || isSignUp) && (
          <Input type="password" placeholder="비밀번호" required />
        )}
        {/* 닉네임 (회원가입 & 프로필에서만 표시) */}
        {(isSignUp || isProfile) && (
          <Input type="text" placeholder="닉네임" required />
        )}

        <Button type="submit">
          {isSignIn
            ? SIGNIN_TEXT
            : isSignUp
            ? SIGNUP_TEXT
            : PROFILE_UPDATE_TEXT}
        </Button>
      </form>

      {!isProfile &&
        (isSignIn ? (
          <div className='mt-8'>
            <span className="mr-2">계정이 없으신가요?</span>
            <Link to={ROUTER_URL.SIGNUP}>{SIGNUP_TEXT}</Link>
          </div>
        ) : (
          <div className='mt-8'>
            <span className="mr-2">이미 계정이 있으신가요?</span>
            <Link to={ROUTER_URL.SIGNIN}>{SIGNIN_TEXT}</Link>
          </div>
        ))}
    </>
  );
}

export default UserForm;
