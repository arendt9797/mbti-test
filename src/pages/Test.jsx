import { useState } from 'react';
import TestForm from '../components/TestForm';
import { calculateMBTI, mbtiDescriptions } from '../utils/mbtiCalculator';
import { createTestResult } from '../apis/testResultsApi';
import { useNavigate } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL.js';
import Button from '../ui/Button.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys.js';
import { getUserProfile } from '../apis/authApi.js';

const TestPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [result, setResult] = useState(null);
  const { data: user } = useQuery({
    queryKey: [queryKeys.USER_PROFILE],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5
  })

  const addTestResult = async (mbtiResult) => {
    const newResult = {
      nickname: user.nickname,
      result: mbtiResult,
      visibility: true,
      date: new Date().toLocaleString(),
      userId: user.id,
    }
    await createTestResult(newResult)
  }

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);
    addTestResult(mbtiResult)
    queryClient.invalidateQueries([queryKeys.TEST_RESULT])
  };

  const handleNavigateToResults = () => {
    navigate(ROUTER_URL.RESULTS);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <>
        {!result ? (
          <div className="bg-white rounded-lg p-8 max-w-lg overflow-y-auto shadow-md m-4">
            <h1 className="text-title text-center font-bold text-primary mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </div>
        ) : (
          <div className="bg-primary rounded-lg p-12 m-20 max-w-3xl">
            <h1 className="text-3xl font-bold text-secondary mb-6">
              당신의 성격은... {result} 입니다!
            </h1>
            <p className="text-lg text-neutral mb-6">
              {mbtiDescriptions[result] ||
                '해당 성격 유형에 대한 설명이 없습니다.'}
            </p>
            <div className='flex justify-center'>
              <Button onClick={handleNavigateToResults} className="w-96">
                결과 페이지로 이동하기
              </Button>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default TestPage;
