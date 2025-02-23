import { useState } from 'react';
import TestForm from '../components/TestForm';
import { calculateMBTI, mbtiDescriptions } from '../utils/mbtiCalculator';
import { createTestResult } from '../apis/testResultsApi';
import { useNavigate } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL.js';
import Button from '../ui/Button.jsx';

const TestPage = ({ user }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
    setResult(mbtiResult);
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
