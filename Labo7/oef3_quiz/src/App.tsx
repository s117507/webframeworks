import { useState, useEffect, useMemo } from "react";
import { ColorRing } from 'react-loader-spinner'
import { decode } from 'html-entities';

export interface Questions {
    response_code: number;
    results:       Question[];
}

export interface Question {
    type:              "boolean" | "multiple";
    question:          string;
    correct_answer:    string;
    incorrect_answers: string[];
    user_answer?:      string;
}


interface TrueOrFalseQuestionProps {
    userAnswer: string | undefined,
    setUserAnswer: (answer: string) => void
}

// `question` is no longer destructured — this component doesn't need it.
// Removing the unused parameter clears the tsc warning.
const TrueOrFalseQuestion = ({userAnswer, setUserAnswer}: TrueOrFalseQuestionProps) => {
    return (
        <div>
            {/* `event` dropped from the onChange arrow — we don't use it, and leaving it
                triggered an unused-variable warning. */}
            <input type="radio" checked={userAnswer === "True"}  onChange={() => setUserAnswer("True")}  /> True
            <input type="radio" checked={userAnswer === "False"} onChange={() => setUserAnswer("False")} /> False
        </div>
    );
}

interface QuestionProps {
    question: Question,
    userAnswer: string | undefined,
    setUserAnswer: (answer: string) => void
}

const QuestionCard = ({question, setUserAnswer, userAnswer}: QuestionProps) => {
    // Derived style: the background depends on whether the answer is right.
    // Not stored as state — it's computed every render from userAnswer + correct_answer.
    let color = "white";
    if (userAnswer !== undefined) {
        color = userAnswer === question.correct_answer ? "lightgreen" : "red";
    }

    return (
        <div style={{backgroundColor: color, padding: "0.5rem", marginBottom: "0.5rem"}}>
            <div>{decode(question.question)}</div>
            {userAnswer === undefined ? (
                <div>
                    {question.type === "boolean" && (
                        <TrueOrFalseQuestion
                            userAnswer={userAnswer}
                            setUserAnswer={setUserAnswer}
                        />
                    )}
                    {question.type === "multiple" && (
                        <MultipleChoiceQuestion
                            question={question}
                            userAnswer={userAnswer}
                            setUserAnswer={setUserAnswer}
                        />
                    )}
                </div>
            ) : (
                <div style={{fontWeight: "bold"}}>
                    {userAnswer !== question.correct_answer
                        ? <p>You answered {userAnswer} and the correct answer was {question.correct_answer}</p>
                        : <p>You answered {userAnswer} which is the correct answer</p>}
                </div>
            )}
        </div>
    )
}

interface MultipleChoiceQuestionProps {
    question: Question,
    userAnswer: string | undefined,
    setUserAnswer: (answer: string) => void
}

const MultipleChoiceQuestion = ({question, setUserAnswer}: MultipleChoiceQuestionProps) => {
    // useMemo: shuffle the answers ONCE per question. Without this, every render
    // re-shuffles and the options jump around whenever the user interacts.
    // The dependency array ties the shuffle to the correct_answer, so a new
    // question gets a new shuffle but the same question stays stable.
    const allAnswers = useMemo(() => {
        const list = [question.correct_answer, ...question.incorrect_answers];
        return [...list].sort(() => Math.random() - 0.5);
    }, [question.correct_answer]);

    return (
        <select onChange={(e) => setUserAnswer(e.target.value)}>
            <option value="">Select an answer</option>
            {allAnswers.map((answer, index) => (
                <option key={index} value={answer}>{decode(answer)}</option>
            ))}
        </select>
    );
}

const LoadingIndicator = () => {
    return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    )
}

const QuizApp = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);

    // Functional updater (prev => ...) avoids the stale-closure bug where
    // two quick clicks on "Load More" would both see the old `questions`.
    const loadQuestions = async () => {
        setLoading(true);
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        const data: Questions = await response.json();
        setQuestions(prev => [...prev, ...data.results]);
        setLoading(false);
    }

    useEffect(() => {
        loadQuestions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {questions.map((question, index) => (
                // key is required on the outermost element of a .map().
                // Index is fine here because the list only grows at the end.
                <QuestionCard
                    key={index}
                    question={question}
                    userAnswer={question.user_answer}
                    setUserAnswer={(answer) => {
                        // Immutable update: new outer array AND a new question object
                        // for the one we're changing. React compares by reference.
                        setQuestions(prev =>
                            prev.map((q, i) => i === index ? {...q, user_answer: answer} : q)
                        );
                    }}
                />
            ))}
            <button onClick={loadQuestions}>Load More</button>
            {loading && <div><LoadingIndicator /></div>}
        </>
    )
}

const App = () => {
    return (
        <>
            <QuizApp />
        </>
    )
}

export default App;
