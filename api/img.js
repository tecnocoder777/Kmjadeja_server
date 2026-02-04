export default function handler(req, res) {
  const images = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2"
  ];
  const randomImg = images[Math.floor(Math.random() * images.length)];
  
  // Ye response Sketchware read karega
  res.status(200).json({ url: randomImg });
}
