import React from "react";
import "./index.scss";

const questions = [
  {
    title: "React - este ... ?",
    variants: ["Biblioteca", "Framework", "Aplicatie"],
    correct: 0,
  },
  {
    title: "Component - este ... ",
    variants: [
      "Aplicatie",
      "Parte a unei aplicații sau a unei pagini",
      "Ceva ce nu stiu eu",
    ],
    correct: 1,
  },
  {
    title: "Ce este JSX?",
    variants: [
      "Un simplu HTML",
      "Este o functie",
      "Este același HTML, dar cu capacitatea de a executa cod JS",
    ],
    correct: 2,
  },
  {
    title: "Ce este props ?",
    variants: [
      "Props în React sunt folosite pentru a schimba culoarea paginii web.",
      "Props sunt o metodă pentru a stoca date permanent pe server",
      "Props în React sunt folosite pentru a transmite date de la un component părinte la un component copil",
    ],
    correct: 2,
  },
  {
    title: "Ce este state ?",
    variants: [
      "State este o bibliotecă pentru baze de date",
      "State reține datele care schimbă re-renderizarea componentei.",
      "State modifică CSS",
    ],
    correct: 1,
  },
  {
    title: "Ce este useEffect?",
    variants: [
      "Un hook folosit pentru a gestiona efecte secundare în componentele funcționale.",
      "Un mod de a adăuga stiluri CSS în componentele React.",
      "O metodă pentru a face componenta să re-rendereze.",
    ],
    correct: 0,
  },
  {
    title: "Ce face metoda setState?",
    variants: [
      "Șterge o componentă din DOM.",
      "Actualizează starea componentelor și declanșează o re-rendere.",
      "Adaugă un eveniment pe un element.",
    ],
    correct: 2,
  },
  {
    "title": "Cum poți transmite date între componente în React?",
    "variants": [
      "Prin URL.",
      "Prin utilizarea props.",
      "Prin crearea unei noi instanțe a componentei."
    ],
    "correct": 1
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Ați ghicit {correct} răpunsuri din {questions.length} întrebari
      </h2>
      <a href="/">
        <button>Incerca din Nou</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
