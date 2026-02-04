1const http = require('http');

// API Logic
const server = http.createServer((req, res) => {
  // CORS Headers taaki Sketchware block na kare
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // Random Image List
  const images = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  ];

  // Pick a random image
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Success Response
  const responseData = JSON.stringify({
    status: "success",
    image_url: randomImage,
    provider: "Gemini Random Provider"
  });

  res.end(responseData);
});

// Port setting
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
