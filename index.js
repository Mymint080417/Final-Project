import './style.css';

document.body.style.backgroundImage = "url('background.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPositio
// ลงสีพื้นหลังแบบสุ่ม
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }