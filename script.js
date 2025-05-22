const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  statusMessage.textContent = 'กำลังส่งข้อความ... กรุณารอสักครู่';
  statusMessage.style.color = 'black';

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      statusMessage.textContent = 'ส่งข้อความเรียบร้อยแล้ว ขอบคุณมาก!';
      statusMessage.style.color = 'green';
      form.reset();
    } else {
      statusMessage.textContent = 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง';
      statusMessage.style.color = 'red';
    }
  } catch (error) {
    statusMessage.textContent = 'เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง';
    statusMessage.style.color = 'red';
  }
});
