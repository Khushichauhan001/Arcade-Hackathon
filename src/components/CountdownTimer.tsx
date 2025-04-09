import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-05-01T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-pixel mb-12 text-neon-green">COUNTDOWN TO HACK</h2>
      <div className="flex justify-center gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="game-card p-6 rounded-lg min-w-[120px]">
            <div className="text-3xl font-pixel text-neon-blue mb-2">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs uppercase text-gray-400">{unit}</div>
          </div>
        ))}
      </div>
    </section>
  );
}