// src/components/Navigation.jsx
import React from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const Navigation = ({
  currentIndex,
  showResult,
  isLastQuestion,
  score,
  onPrevQuestion,
  onNextQuestion,
  onResetQuiz
}) => {
  return (
    <div className="flex justify-between items-center">
      {/* Bouton Précédent */}
      <button
        onClick={onPrevQuestion}
        disabled={currentIndex === 0}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
          currentIndex === 0 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg transform hover:scale-105'
        }`}
      >
        <ChevronLeft size={20} />
        Précédent
      </button>

      {/* Boutons de droite */}
      {showResult && (
        <>
          {!isLastQuestion ? (
            <button
              onClick={onNextQuestion}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg transform hover:scale-105"
            >
              Suivant
              <ChevronRight size={20} />
            </button>
          ) : (
            <div className="flex gap-4">
              <div className="bg-white px-6 py-3 rounded-xl text-gray-800 font-bold shadow-lg flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="text-sm text-gray-600">Score final</div>
                  <div className="text-lg">{score.correct}/{score.total}</div>
                </div>
              </div>
              <button
                onClick={onResetQuiz}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg transform hover:scale-105"
              >
                <RotateCcw size={20} />
                Recommencer
              </button>
            </div>
          )}
        </>
      )}
      
      {/* Si pas de résultat affiché, afficher un placeholder invisible */}
      {!showResult && (
        <div className="w-32"></div>
      )}
    </div>
  );
};

export default Navigation;