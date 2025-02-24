import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { getUserProfile, updateProfile } from '../apis/authApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { queryKeys } from '../constants/queryKeys';

function AuthForm() {
  const queryClient = useQueryClient();
  const {
    data: user,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: [queryKeys.USER_PROFILE],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5,
  });

  const { mutate, isPending: isUpdating } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.USER_PROFILE]);
      alert('닉네임을 변경했습니다!');
    },
  });

  const [newNickname, setNewNickname] = useState('');

  // input에 현재 닉네임 표시
  useEffect(() => {
    if (user?.nickname) {
      setNewNickname(user.nickname);
    }
  }, [user]);

  if (isPending) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생! {error.message}</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ avatar: null, nickname: newNickname });
  };

  return (
    <form className="m-auto w-64 flex flex-col gap-10" onSubmit={handleSubmit}>
      <Input
        name="nickname"
        type="text"
        value={newNickname}
        onChange={(e) => setNewNickname(e.target.value)}
        required
      />
      <Button type="submit">
        {isUpdating ? '업데이트 중...' : '프로필 업데이트'}
      </Button>
    </form>
  );
}

export default AuthForm;
