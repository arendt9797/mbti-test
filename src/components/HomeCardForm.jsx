import Card from '../ui/Card'; // 🔹 공통 UI Card 가져오기

function HomeCard({ title, description }) {
  return (
    <Card className="text-left w-96 lg:w-1/4 lg:h-40">
      <h3 className="text-subTitle text-white font-bold mb-2">{title}</h3>
      <p className="text-secondary">{description}</p>
    </Card>
  );
}

export default HomeCard;
