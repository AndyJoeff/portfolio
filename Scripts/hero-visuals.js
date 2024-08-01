const imageSets = {
    image1: [
        'images/ttbw-90-aerial-forest-16x9-2-no-logo_0.jpg',
        'images/27_Joby_Aviation_Aircraft.jpg',
        'images/images.jpg'
    ],
    image2: [
        'images/1b839d_33e82dfe540b4df4a48a3d022ef46b52~mv2.jpg',
        'images/greenaviation.jpg',
        'images/eco-friendly-living.jpg'
    ],
    image3: [
        'images/agk42_environmentally_friendly_cloud_computing_c445230a-6d90-4702-a54d-d85725229995.png',
        'images/images5.png',
        'images/disposable-paper-coffee-cup.jpg'
    ]
};

let flipIndices = { image1: 0, image2: 0, image3: 0 };

function preloadImages() {
    for (let key in imageSets) {
        imageSets[key].forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }
}

function flipImage(imageId, flipId) {
    flipIndices[imageId] = (flipIndices[imageId] + 1) % imageSets[imageId].length;
    const frontImg = document.getElementById(`${imageId}-front`);
    const backImg = document.getElementById(`${imageId}-back`);
    
    // Trigger flip animation
    const flipContainer = document.getElementById(flipId);
    flipContainer.classList.toggle('flip');
    
    // Update images after the flip transition is complete
    setTimeout(() => {
        if (flipContainer.classList.contains('flip')) {
            backImg.src = imageSets[imageId][flipIndices[imageId]];
        } else {
            frontImg.src = imageSets[imageId][flipIndices[imageId]];
        }
    }, 300); // Adjust timing to match CSS transition duration
}

preloadImages();

// Start the flipping intervals
setInterval(() => flipImage('image1', 'flip1'), 5000); // Change every 5 seconds
setInterval(() => flipImage('image2', 'flip2'), 7000); // Change every 7 seconds
setInterval(() => flipImage('image3', 'flip3'), 9000); // Change every 9 seconds
