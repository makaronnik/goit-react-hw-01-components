export default function getRandomColor() {
  const hue = getRandomValue(150, 300);
  const saturation = getRandomValue(50, 100);
  const lightness = getRandomValue(35, 50);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
