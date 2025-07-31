import React from 'react'

const Steps = () => {
  return (
    <div className='flex flex-col items-center w-full py-16 px-8'>
        <h1 className="text-6xl font-montserrat text-black font-bold mb-16 text-center">Review your games in <br className="hidden md:block" /> three easy steps</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Step 1 */}
          <div className="bg-gray-100 rounded-lg p-8 h-80 flex flex-col">
            <div className="text-4xl mb-auto">📱</div>
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Record Your Game</h3>
              <p className="text-gray-700">Simply mount your phone and hit record to capture every moment of your pickleball match.</p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-gray-100 rounded-lg p-8 h-80 flex flex-col">
            <div className="text-4xl mb-auto">⬆️</div>
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Upload & Analyze</h3>
              <p className="text-gray-700">Upload your video and let our AI analyze your gameplay, shots, and court positioning.</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-gray-100 rounded-lg p-8 h-80 flex flex-col">
            <div className="text-4xl mb-auto">📊</div>
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Get Insights</h3>
              <p className="text-gray-700">Receive detailed feedback and actionable insights to improve your pickleball performance.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Steps