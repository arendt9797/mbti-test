import Button from '../ui/Button';
import Input from '../ui/Input';

function AuthForm() {
  
  return (
    <form className="m-auto w-64 flex flex-col gap-10">
      <Input name="nickname" type="text" placeholder="닉네임" required />
      <Button type="submit">프로필 업데이트</Button>
    </form>
  );
}

export default AuthForm;
