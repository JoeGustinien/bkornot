// src/components/ScoreBoard.jsx
import React from 'react';

const ScoreBoard = ({ 
  currentIndex, 
  totalQuestions, 
  score, 
  getProgress, 
  getScorePercentage 
}) => {
  return (
    <div className="text-center mb-8 pt-8">
      <h1 className="text-4xl font-bold text-white mb-2">
        BK or Not BK ?
      </h1>
      <p className="text-blue-200 mb-4">
        Connaissez-vous le tissu économique martiniquais ?
      </p>
      
      {/* Progress bar */}
      <div className="w-full max-w-md mx-auto mb-4">
        <div className="h-3 bg-white bg-opacity-20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 ease-out"
            style={{ width: `${getProgress()}%` }}
          />
        </div>
      </div>
      
      {/* Stats */}
      <div className="flex justify-center items-center gap-6 text-white">
        <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
          <div className="text-sm text-blue-200">Question</div>
          <div className="text-xl font-bold">
            {currentIndex + 1} / {totalQuestions}
          </div>
        </div>
        
        <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
          <div className="text-sm text-blue-200">Score</div>
          <div className="text-xl font-bold">
            {score.correct}/{score.total}
          </div>
        </div>
        
        {score.total > 0 && (
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <div className="text-sm text-blue-200">Réussite</div>
            <div className="text-xl font-bold">
              {getScorePercentage()}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoreBoard;