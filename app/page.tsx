{/* Live Matches */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-3">🔥 Live Matches</h2>
  <div className="space-y-4">
    {liveMatches.map((match, i) => (
      <div
        key={i}
        className="bg-red-50 p-4 rounded-xl shadow-md flex justify-between items-center transform transition-transform hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="flex flex-col">
          <span className="font-semibold">{match.player1} vs {match.player2}</span>
          <span className="text-sm text-gray-600">Live Now</span>
        </div>
        <span className="font-bold text-red-600">{match.score}</span>
      </div>
    ))}
  </div>
</section>

{/* Today's Matches */}
<section>
  <h2 className="text-xl font-semibold mb-3">📅 Today's Matches</h2>
  <div className="space-y-4">
    {todaysMatches.map((match, i) => (
      <div
        key={i}
        className="bg-blue-50 p-4 rounded-xl shadow-md flex justify-between items-center transform transition-transform hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="flex flex-col">
          <span className="font-semibold">{match.player1} vs {match.player2}</span>
          <span className="text-sm text-gray-600">{match.time}</span>
        </div>
        <span className="font-bold text-blue-600">Upcoming</span>
      </div>
    ))}
  </div>
</section>
