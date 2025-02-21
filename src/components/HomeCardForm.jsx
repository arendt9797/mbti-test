import Card from '../ui/Card'; // 🔹 공통 UI Card 가져오기

function HomeCard({ title, description }) {
  return (
    <Card className="border border-gray-200 text-left">
      <h3 className="text-subTitle text-white font-bold mb-2">{title}</h3>
      <p className="text-secondary">{description}</p>
    </Card>
  );
}

export default HomeCard;
