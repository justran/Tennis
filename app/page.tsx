export default function Home() {
  const liveMatches = [
    { player1: "Carlos Alcaraz", player2: "Novak Djokovic", score: "6-4, 3-2" },
    { player1: "Jannik Sinner", player2: "Daniil Medvedev", score: "2-1" },
  ];

  const todaysMatches = [
    { player1: "Rafael Nadal", player2: "Alexander Zverev", time: "1:00 PM" },
    { player1: "Stefanos Tsitsipas", player2: "Andrey Rublev", time: "3:00 PM" },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🎾 Tennis Tracker</h1>

      {/* Tournament Selector */}
      <div className="mb-6">
        <select className="p-2 rounded border">
          <option>Wimbledon</option>
          <option>US Open</option>
          <option>Australian Open</option>
        </select>
      </div>

      {/* Live Matches */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">🔥 Live Matches</h2>
        <div className="space-y-3">
          {liveMatches.map((match, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between">
              <span>{match.player1} vs {match.player2}</span>
              <span className="font-bold">{match.score}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Today's Matches */}
      <section>
        <h2 className="text-xl font-semibold mb-3">📅 Today's Matches</h2>
        <div className="space-y-3">
          {todaysMatches.map((match, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between">
              <span>{match.player1} vs {match.player2}</span>
              <span>{match.time}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
