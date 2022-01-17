import Question from './components/Question';
import useApp from './hooks/useApp';

function App() {
  const { questions, activeQsId, nextQs, prevQs } = useApp();
  return (
    <div>
      <Question qs={questions[activeQsId]} />
      <button onClick={prevQs}>Prev</button>
      <button onClick={nextQs}>Next</button>
    </div>
  );
}

export default App;
