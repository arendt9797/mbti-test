// 공통 에러 핸들링 함수
export const handleApiError = (error) => {
  if (error.response) {
    // 서버에서 응답한 에러 (4xx, 5xx)
    return new Error(error.response.data.message || "서버 오류가 발생했습니다.");
  } else if (error.request) {
    // 요청을 보냈지만 응답이 없는 경우
    return new Error("서버에서 응답이 없습니다. 네트워크 상태를 확인하세요.");
  } else {
    // 요청을 보내기 전에 에러가 발생한 경우
    return new Error("요청 중 문제가 발생했습니다.");
  }
};