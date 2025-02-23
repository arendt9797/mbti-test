import { useState } from 'react';
import { questions } from '../data/questions';
import Button from '../ui/Button';

const TestForm = ({ onSubmit }) => {
  // 내가 고른 선택지들을 저장하는 상태 answer
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: '', answer: '' }),
  );

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 p-6 bg-white rounded-lg"
    >
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-subtitle mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === option ? 'bg-gray-100' : ''
                } hover:bg-gray-100 flex items-center`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 mr-2 border border-gray-300 rounded-full flex items-center justify-center ${
                    answers[index]?.answer === option &&
                    'bg-secondary border-white border-2 shadow-[0_0_0_1px_gray]'
                  }`}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <Button
        type="submit"
        className="w-full py-3 transition duration-300 "
      >
        제출하기
      </Button>
    </form>
  );
};

export default TestForm;
