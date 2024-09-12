import React, { useState, useEffect } from "react";

// Komponen animasi yang dapat digunakan kembali
function ProgressScore({ targetScore, duration, label }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min((progress / duration) * targetScore, targetScore);
      setScore(Math.floor(increment));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetScore, duration]);

  return <p>{score}</p>;
}

// Menggunakan komponen yang telah disederhanakan
export function ProgressScore1() {
  return <ProgressScore targetScore={30000} duration={3000} />;
}

export function ProgressScore2() {
  return <ProgressScore targetScore={2000} duration={3000} />;
}

export function ProgressScore3() {
  return <ProgressScore targetScore={95} duration={3000} />;
}

export function ProgressScore4() {
  return <ProgressScore targetScore={130} duration={3000} />;
}
