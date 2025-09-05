// src/App.js
import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import QuizCard from './components/QuizCard';
import ScoreBoard from './components/ScoreBoard';
import Navigation from './components/Navigation';
import ResultCard from './components/ResultCard';

function App() {
  const {
    currentIndex,
    currentEntreprise,
    userAnswer,
    showResult,
    score,
    answeredQuestions,
    isLastQuestion,
    handleAnswer,
    nextQuestion,
    prevQuestion,
    resetQuiz,
    getProgress,
    getScorePercentage,
    totalQuestions
  } = useQuiz();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 p-4">
      <div className="max-w-2xl mx-auto">
        <ScoreBoard
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          score={score}
          getProgress={getProgress}
          getScorePercentage={getScorePercentage}
        />

        <QuizCard
          entreprise={currentEntreprise}
          onAnswer={handleAnswer}
          showResult={showResult}
          userAnswer={userAnswer}
        />

        <Navigation
          currentIndex={currentIndex}
          showResult={showResult}
          isLastQuestion={isLastQuestion}
          score={score}
          onPrevQuestion={prevQuestion}
          onNextQuestion={nextQuestion}
          onResetQuiz={resetQuiz}
        />

        {isLastQuestion && showResult && (
          <ResultCard
            answeredQuestions={answeredQuestions}
            score={score}
            getScorePercentage={getScorePercentage}
          />
        )}

        <div className="text-center mt-8 text-blue-200 text-sm space-y-1">
          <p>Quiz éducatif sur l'économie martiniquaise</p>
          <p>Sources : Données publiques, Société.com, recherches documentées</p>
          <p className="text-xs">
            🏛️ Objectif : Mieux comprendre le tissu économique de la Martinique
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;