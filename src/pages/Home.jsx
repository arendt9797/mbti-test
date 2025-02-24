import { useNavigate } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL.js';
import HomeCardForm from '../components/HomeCardForm.jsx';
import Button from '../ui/Button.jsx';
import useAuthStore from '../store/authStore.js';

const Home = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const navigate = useNavigate();

  const cardContents = [
    {
      title: '성격 유형 검사',
      description:
        '자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.',
    },
    {
      title: '성격 유형 이해',
      description:
        '다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.',
    },
    {
      title: '팀 평가',
      description:
        '팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.',
    },
  ];

  const handleNavigate = () => {
    if (isAuthenticated) {
      navigate(ROUTER_URL.TEST);
    } else {
      alert('테스트를 위해서는 로그인이 필요합니다.');
      navigate(ROUTER_URL.SIGNIN);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-6xl my-10">무료 성격 테스트</h1>
      <p className="text-subTitle my-10">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="flex flex-col items-center gap-5 lg:flex-row flex-wrap lg:justify-evenly">
        {cardContents.map((content, i) => (
          <HomeCardForm key={i} {...content} />
        ))}
      </div>
      <Button className="mt-10 mb-10 lg:mt-20" onClick={handleNavigate}>
        내 성격 알아보러 가기
      </Button>
    </div>
  );
};

export default Home;
