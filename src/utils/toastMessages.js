import { toast } from "react-toastify";

export const loginToast = (nickname) => {
  toast.success(`어서오세요, ${nickname}님!`)
}

export const signupToast = () => {
  toast.success('회원가입 성공! 로그인을 해주세요.')
}

export const logoutToast = () => {
  toast.success('로그아웃되었습니다.')
}

export const deleteToast = () => {
  toast.success('삭제되었습니다.')
}

export const updateToast = () => {
  toast.success('변경되었습니다.')
}

export const errorToast = (error) => {
  toast.error(error)
}