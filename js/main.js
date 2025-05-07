document.addEventListener('DOMContentLoaded', () => {
  const typedOutput = document.getElementById('typed-output');
  const text = 'Cristian Giovanny Salazar';
  let index = 0;

  function typeOutput() {
    if (index < text.length) {
      typedOutput.textContent += text.charAt(index);
      index++;
      setTimeout(typeOutput, 60);
    }
  }

  typeOutput();

  setTimeout(() => {
    const canvas = document.getElementById('matrix-bg');
    if (canvas) {
      canvas.style.display = 'block';
      initMatrix();
    }
  }, 1200);
});

function initMatrix() {
  const canvas = document.getElementById('matrix-bg');
  const ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  const katakana = 'アカサタナハマヤラワ0123456789'.split('');
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array.from({ length: columns }).fill(1);
  function drawMatrix() {
    ctx.fillStyle = 'rgba(18, 24, 34, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ffe0';
    ctx.font = fontSize + 'px monospace';
    drops.forEach((y, i) => {
      const text = katakana[Math.floor(Math.random() * katakana.length)];
      const x = i * fontSize;
      if (Math.random() > 0.7) ctx.fillText(text, x, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.995) drops[i] = 0;
      drops[i]++;
    });
  }
  setInterval(drawMatrix, 60);
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
