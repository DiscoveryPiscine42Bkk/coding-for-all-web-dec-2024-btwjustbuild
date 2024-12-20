const balloon = document.getElementById('balloon');

	let size = 200; // Initial size of the balloon
	let colors = ['red', 'green', 'blue'];
	let colorIndex = 0;

	balloon.addEventListener('click', () => {
    	// Increase size by 10px
    	size += 10;

    	// Cycle through colors
    	colorIndex = (colorIndex + 1) % colors.length;
    	balloon.style.backgroundColor = colors[colorIndex];

    	// Apply new size
    	balloon.style.width = `${size}px`;
    	balloon.style.height = `${size}px`;

    	// Explode the balloon if size > 420px
    	if (size > 420) {
        	resetBalloon();
    	}
});

	balloon.addEventListener('mouseleave', () => {
    	// Shrink size by 5px but not below 200px
    	size = Math.max(size - 5, 200);

    	// Cycle colors in reverse
    	colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    	balloon.style.backgroundColor = colors[colorIndex];

    	// Apply new size
    	balloon.style.width = `${size}px`;
    	balloon.style.height = `${size}px`;
});

	function resetBalloon() {
    // Temporarily "pop" to size 420px with a pop effect
    balloon.classList.add('popped');
    
    // Reset balloon size and color after the pop animation
    setTimeout(() => {
        size = 200;
        colorIndex = 0;
        balloon.style.width = '200px';
        balloon.style.height = '200px';
        balloon.style.backgroundColor = 'red';
        balloon.classList.remove('popped');
    }, 500); // Matches the popEffect animation duration
}
