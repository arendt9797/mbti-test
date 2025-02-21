import { Link } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL.js';
import HomeCard from '../components/HomeCard';

const Home = () => {
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

  return (
    <div className="text-center">
      <h1 className="text-6xl my-10">무료 성격 테스트</h1>
      <p className="text-subTitle my-10">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="flex justify-evenly">
        {cardContents.map((content, i) => (
          <HomeCard key={i} {...content} />
        ))}
      </div>
      <Link to={ROUTER_URL.TEST}>
        <div
          className="m-auto mt-20 p-2 px-6 w-64 rounded-full bg-primary text-secondary font-semibold hover:bg-primaryHover"
          onClick={() => {}}
        >
          내 성격 알아보러 가기
        </div>
      </Link>
    </div>
  );
};

export default Home;
