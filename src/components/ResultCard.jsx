// src/components/ResultCard.jsx
import React from 'react';

const ResultCard = ({ answeredQuestions, score, getScorePercentage }) => {
  if (answeredQuestions.length === 0) return null;

  const getScoreMessage = (percentage) => {
    if (percentage >= 80) return { emoji: "🏆", message: "Expert en économie martiniquaise !", color: "text-yellow-600" };
    if (percentage >= 60) return { emoji: "👍", message: "Bonne connaissance du tissu économique", color: "text-green-600" };
    if (percentage >= 40) return { emoji: "📚", message: "À approfondir, mais c'est un début", color: "text-blue-600" };
    return { emoji: "🎯", message: "Découverte en cours...", color: "text-gray-600" };
  };

  const scoreInfo = getScoreMessage(getScorePercentage());

  return (
    <div className="mt-8 bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">{scoreInfo.emoji}</div>
        <h3 className="text-xl font-bold text-white mb-2">{scoreInfo.message}</h3>
        <p className={`text-lg ${scoreInfo.color} bg-white px-4 py-2 rounded-full inline-block font-semibold`}>
          {score.correct}/{score.total} ({getScorePercentage()}%)
        </p>
      </div>

      {/* Détail des réponses */}
      <div className="space-y-3 max-h-60 overflow-y-auto">
        {answeredQuestions.map((question, index) => (
          <div
            key={question.id}
            className={`flex items-center justify-between p-3 rounded-lg ${
              question.isCorrect 
                ? 'bg-green-100 bg-opacity-20 border border-green-400' 
                : 'bg-red-100 bg-opacity-20 border border-red-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`text-xl ${question.isCorrect ? '✅' : '❌'}`}>
                {question.isCorrect ? '✅' : '❌'}
              </span>
              <div className="text-left">
                <div className="text-white font-medium text-sm">
                  {question.nom}
                </div>
                <div className="text-blue-200 text-xs">
                  {question.secteur}
                </div>
              </div>
            </div>
            <div className="text-xs text-white text-right">
              <div>Votre réponse: {question.userAnswer ? 'Béké' : 'Non-Béké'}</div>
              <div className="text-blue-200">Correct: {question.isBeke ? 'Béké' : 'Non-Béké'}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistiques */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div className="bg-white bg-opacity-10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white">
            {answeredQuestions.filter(q => q.isBeke).length}
          </div>
          <div className="text-blue-200 text-sm">Entreprises békés</div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white">
            {answeredQuestions.filter(q => !q.isBeke).length}
          </div>
          <div className="text-blue-200 text-sm">Entreprises non-békés</div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;