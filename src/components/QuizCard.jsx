// src/components/QuizCard.jsx
import React from 'react';

const QuizCard = ({ entreprise, onAnswer, showResult, userAnswer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-6">
      <div className="p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {entreprise.nom}
          </h2>
          
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {entreprise.secteur}
          </div>
          
          <p className="text-gray-600 text-lg mb-8">
            {entreprise.description}
          </p>

          {/* Informations supplémentaires */}
          {entreprise.chiffreAffaires && (
            <div className="flex justify-center gap-6 mb-6 text-sm text-gray-500">
              <div>
                <span className="font-semibold">CA:</span> {entreprise.chiffreAffaires}
              </div>
              <div>
                <span className="font-semibold">Employés:</span> {entreprise.employes}
              </div>
            </div>
          )}

          {!showResult ? (
            <div className="space-y-4">
              <p className="text-xl font-semibold text-gray-700 mb-6">
                Cette entreprise est-elle liée à une famille béké ?
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => onAnswer(true)}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  ✊ Béké
                </button>
                <button
                  onClick={() => onAnswer(false)}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  🤝 Non-Béké
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Résultat */}
              <div className={`p-6 rounded-xl ${
                userAnswer === entreprise.isBeke 
                  ? 'bg-green-100 border-2 border-green-500' 
                  : 'bg-red-100 border-2 border-red-500'
              }`}>
                <div className="text-2xl font-bold mb-2">
                  {userAnswer === entreprise.isBeke ? '✅ Correct !' : '❌ Incorrect'}
                </div>
                <div className="text-lg mb-2">
                  Réponse: {entreprise.isBeke ? 'Béké' : 'Non-Béké'}
                </div>
              </div>

              {/* Explication */}
              <div className="bg-blue-50 p-6 rounded-xl text-left">
                <h3 className="font-bold text-lg mb-3 text-blue-900">💡 Explication</h3>
                <p className="text-gray-700 mb-4">{entreprise.explication}</p>
                <a 
                  href={entreprise.lienSociete}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Voir sur Société.com
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;