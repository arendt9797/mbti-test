import { handleApiError } from '../utils/handleApiError';
import { resultApi } from './axiosInstances';

// 테스트 결과들 조회
export const getTestResults = async () => {
  try {
    const { data } = await resultApi.get('');
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// 새로운 테스트 결과 추가
export const createTestResult = async (resultData) => {
  try {
    const { data } = await resultApi.post('', resultData);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    const { data } = await resultApi.delete(`${id}`);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// 공개 / 비공개 전환
export const updateTestResultVisibility = async ({id, visibility}) => {
  try {
    const { data } = await resultApi.patch(`${id}`, {visibility});
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
