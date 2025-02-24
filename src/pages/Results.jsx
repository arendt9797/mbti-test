import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';
import { getTestResults } from '../apis/testResultsApi';
import ResultForm from '../components/ResultForm';
import { getUserProfile } from '../apis/authApi';
import useAuthStore from '../store/authStore';
import { messages } from '../constants/messages';

function Results() {
  const queryClient = useQueryClient();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // 로그인된 경우에만 useQuery 실행
  const { data: user } = useQuery({
    queryKey: [queryKeys.USER_PROFILE],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
  });

  const {
    data: results,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: [queryKeys.TEST_RESULT],
    queryFn: getTestResults,
    staleTime: 1000 * 60 * 1,
  });

  if (isPending) return <p className="text-center">{messages.LOADING}</p>;
  if (isError)
    return (
      <p className="text-center">
        {messages.ERROR} {error.message}
      </p>
    );

  // 새로고침 시 캐시가 비워지므로 처음에는 user가 undefinied 될 수 있다.
  // 곧바로 캐시가 채워지고 다시 캐싱된 데이터를 불러오므로 옵셔널 체이닝을 써도 괜찮다.
  // 로그아웃 상태면 false로 설정하여 수정, 삭제 버튼이 안 보이도록 설정
  const checkIsMyResult = (resultUserId) => {
    return isAuthenticated ? resultUserId === user?.id : false;
  };

  // 새로고침하여 최신 목록 불러오기
  const handleRefresh = () => {
    queryClient.invalidateQueries([queryKeys.TEST_RESULT])
  }

  return (
    <div className="mb-4">
      <div className='flex justify-center items-center'>
        <h1 className="text-center text-title text-primary font-semibold m-4">
          모든 테스트 결과
        </h1>
        <button className='text-2xl' onClick={handleRefresh}>🔄️</button>
      </div>
      <ul className="grid place-items-center gap-4">
        {results
          .filter(
            (result) => result.visibility || checkIsMyResult(result.userId),
          )
          .map((result, index) => (
            <li key={index}>
              <ResultForm
                isOwner={checkIsMyResult(result.userId)}
                testResult={result}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Results;
