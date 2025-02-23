import { authApi } from './axiosInstances';
import {handleApiError} from '../utils/handleApiError'

// 회원가입
export const register = async (userData) => {
  try {
    const { data } = await authApi.post('/register', userData);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// 로그인
export const login = async (userData) => {
  try {
    const { data } = await authApi.post('/login', userData);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// 프로필 조회
export const getUserProfile = async () => {
  try {
    const { data } = await authApi.get('/user');
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// 프로필 변경
export const updateProfile = async (formData) => {
  try {
    const { data } = await authApi.patch('/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};