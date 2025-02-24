import { useMutation, useQueryClient } from '@tanstack/react-query';
import Card from '../ui/Card';
import { mbtiDescriptions } from '../utils/mbtiCalculator';
import { deleteTestResult, updateTestResultVisibility } from '../apis/testResultsApi';
import { queryKeys } from '../constants/queryKeys';

function ResultForm({ isOwner, testResult }) {
  const queryClient = useQueryClient();
  const {mutate: deleteMutation} = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.TEST_RESULT])
      alert('삭제되었습니다!')
    }
  })

  const {mutate: visibleMutation} = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.TEST_RESULT])
      alert('변경되었습니다!')
    }
  })

  const handleVisibilityResult = () => {
    visibleMutation({id: testResult.id, visibility: !testResult.visibility})
  }

  const handleDeleteResult = () => {
    deleteMutation(testResult.id)
  }

  return (
    <Card className="md:w-full md:max-w-xl lg:w-full lg:max-w-2xl">
      <header>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h1 className="text-white text-title inline">
            {testResult.nickname}
          </h1>
          <span className="text-neutral">{testResult.date}</span>
        </div>
        <hr className="border-neutral" />
      </header>
      <main>
        <h1 className="text-secondary text-title font-semibold mt-2 mb-2">
          {testResult.result}
        </h1>
        <p className="text-white">{mbtiDescriptions[testResult.result]}</p>
      </main>
      {isOwner && (
        <footer className='flex space-x-2 mt-4 justify-end'>
          <button className='bg-secondary text-primary font-semibold rounded-md px-3 py-2' onClick={handleVisibilityResult}>{testResult.visibility ? '비공개로 전환' : '공개로 전환'}</button>
          <button className='bg-red-500 text-white font-semibold rounded-md px-3 py-2' onClick={handleDeleteResult}>삭제</button>
        </footer>
      )}
    </Card>
  );
}

export default ResultForm;
