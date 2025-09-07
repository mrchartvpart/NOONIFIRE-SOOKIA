const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  console.log('1 nafar jadid');

  socket.on('message', msg => {
  const message = msg.toString(); // تبدیل Buffer به رشته
  console.log('ok:', message);

    // ارسال پیام به همه‌ی کلاینت‌ها به جز فرستنده
    server.clients.forEach(client => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});