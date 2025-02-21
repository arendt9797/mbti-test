import Card from '../ui/Card'; // 🔹 공통 UI Card 가져오기

function HomeCard({ title, description }) {
  return (
    <Card className="border border-gray-200 text-left">
      {/* 기본 Card에 추가 스타일 적용 가능 */}
      <h3 className="text-subTitle font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

export default HomeCard;