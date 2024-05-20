
import { useEffect, useState } from 'react';
import Description from '../Description';
import Feedback from '../Feedback';
import Notification from '../Notification';
import Options from '../Options';

const INITIAL_FEEDBACK = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('saved-feedback'));

    return savedFeedback ? savedFeedback : INITIAL_FEEDBACK;
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleResetFeedback = () => {
    setFeedback(INITIAL_FEEDBACK);
  };

  useEffect(() => {
    localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options
        options={['good', 'neutral', 'bad']}
        onOptionClick={updateFeedback}
        isResetButtonVisible={totalFeedback > 0}
        handleResetFeedback={handleResetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message={'No feedback yet'} />
      )}
    </div>
  );
};
export default App;