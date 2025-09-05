// src/hooks/useQuiz.js
import { useState, useCallback } from 'react';
import { entreprises } from '../data/entreprises';

export const useQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const currentEntreprise = entreprises[currentIndex];
  const isLastQuestion = currentIndex === entreprises.length - 1;

  const handleAnswer = useCallback((answer) => {
    setUserAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === currentEntreprise.isBeke;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    // Sauvegarder la réponse
    setAnsweredQuestions(prev => [
      ...prev,
      {
        ...currentEntreprise,
        userAnswer: answer,
        isCorrect
      }
    ]);
  }, [currentEntreprise]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < entreprises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer(null);
      setShowResult(false);
    }
  }, [currentIndex]);

  const prevQuestion = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setUserAnswer(null);
      setShowResult(false);
    }
  }, [currentIndex]);

  const resetQuiz = useCallback(() => {
    setCurrentIndex(0);
    setUserAnswer(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setAnsweredQuestions([]);
  }, []);

  const getProgress = useCallback(() => {
    return ((currentIndex + 1) / entreprises.length) * 100;
  }, [currentIndex]);

  const getScorePercentage = useCallback(() => {
    if (score.total === 0) return 0;
    return Math.round((score.correct / score.total) * 100);
  }, [score]);

  return {
    // État
    currentIndex,
    currentEntreprise,
    userAnswer,
    showResult,
    score,
    answeredQuestions,
    isLastQuestion,
    
    // Actions
    handleAnswer,
    nextQuestion,
    prevQuestion,
    resetQuiz,
    
    // Utilitaires
    getProgress,
    getScorePercentage,
    totalQuestions: entreprises.length
  };
};