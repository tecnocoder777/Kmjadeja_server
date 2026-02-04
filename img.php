<?php
header('Content-Type: application/json');

// List of some high-quality random image sources
$random_images = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://source.unsplash.com/random/800x600",
    "https://loremflickr.com/800/600"
];

// Pick one randomly
$selected_image = $random_images[array_rand($random_images)];

// Return as JSON for Sketchware
echo json_encode([
    "status" => "success",
    "image_url" => $selected_image,
    "timestamp" => time()
]);
?>
