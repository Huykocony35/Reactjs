import React, { useState, useEffect } from 'react';

function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('right');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (gameOver) return;

      const newSnake = [...snake];
      const head = newSnake[0];

      switch (direction) {
        case 'right':
          newSnake.unshift({ x: head.x + 1, y: head.y });
          break;
        case 'left':
          newSnake.unshift({ x: head.x - 1, y: head.y });
          break;
        case 'up':
          newSnake.unshift({ x: head.x, y: head.y - 1 });
          break;
        case 'down':
          newSnake.unshift({ x: head.x, y: head.y + 1 });
          break;
        default:
          break;
      }

      if (newSnake[0].x === food.x && newSnake[0].y === food.y) {
        setFood({ x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) });
        setScore(score + 1);
      } else {
        newSnake.pop();
      }

      if (newSnake[0].x < 0 || newSnake[0].x >= 10 || newSnake[0].y < 0 || newSnake[0].y >= 10) {
        setGameOver(true);
      }

      for (let i = 1; i < newSnake.length; i++) {
        if (newSnake[0].x === newSnake[i].x && newSnake[0].y === newSnake[i].y) {
          setGameOver(true);
        }
      }

      setSnake(newSnake);
    }, 100);

    return () => clearInterval(intervalId);
  }, [snake, food, direction, score, gameOver]);

  const handleKeyPress = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        setDirection('right');
        break;
      case 'ArrowLeft':
        setDirection('left');
        break;
      case 'ArrowUp':
        setDirection('up');
        break;
      case 'ArrowDown':
        setDirection('down');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div>
      <h2>Snake Game</h2>
      <div className="game-board">
        {gameOver ? (
          <p>Game Over! Your score is {score}.</p>
        ) : (
          <div>
            {Array(10)
              .fill(null)
              .map((_, y) => (
                <div key={y} className="row">
                  {Array(10)
                    .fill(null)
                    .map((_, x) => (
                      <div key={x} className="cell">
                        {snake.find((s) => s.x === x && s.y === y) ? (
                          <div className="snake" />
                        ) : food.x === x && food.y === y ? (
                          <div className="food" />
                        ) : null}
                      </div>
                    ))}
                </div>
              ))}
          </div>
        )}
      </div>
      <p>Score: {score}</p>
    </div>
  );
}

export default SnakeGame;