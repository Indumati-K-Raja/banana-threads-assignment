// Handle the Size Chart Popup
const sizeChartBtn = document.getElementById("sizeChartBtn"); // The "View Size Chart" button
const sizeChartPopup = document.getElementById("sizeChartPopup"); // The popup container
const closeBtn = document.getElementsByClassName("close")[0]; // Close button for the popup

// When the "View Size Chart" button is clicked, open the pop-up
sizeChartBtn.onclick = function() {
    sizeChartPopup.style.display = "flex"; // Display the pop-up with a flexbox layout
};

// When the close button (X) is clicked, close the pop-up
closeBtn.onclick = function() {
    sizeChartPopup.style.display = "none"; // Hide the pop-up
};

// Close the pop-up if the user clicks outside the popup area
window.onclick = function(event) {
    if (event.target === sizeChartPopup) {
        sizeChartPopup.style.display = "none"; // Hide the pop-up if the background is clicked
    }
};

// Optional: Add smooth scrolling for the related products section
const productScroll = document.querySelector('.product-scroll');
productScroll.addEventListener('wheel', function(e) {
    if (e.deltaY !== 0) {
        productScroll.scrollLeft += e.deltaY; // Scroll horizontally when mouse wheel is used
    }
});
