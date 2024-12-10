const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".box");

function scaleCenterBox() {
  const viewportCenterY = window.innerHeight / 2;

  let closestBox = null;
  let smallestDistance = Infinity;

  // Loop through all the boxes to find the closest one to the center
  boxes.forEach((box) => {
    const boxRect = box.getBoundingClientRect();
    const boxCenterY = boxRect.top + boxRect.height / 2;

    const distanceFromCenter = Math.abs(boxCenterY - viewportCenterY);

    if (distanceFromCenter < smallestDistance) {
      smallestDistance = distanceFromCenter;
      closestBox = box;
    }
  });

  boxes.forEach((box) => {
    if (box === closestBox) {
      box.classList.add("middle"); // Add the 'middle' class for scaling
    } else {
      box.classList.remove("middle"); // Remove 'middle' class from others
    }
  });
}

// Event listener for scrolling and resizing
window.addEventListener("scroll", scaleCenterBox);
window.addEventListener("resize", scaleCenterBox);

// Initial scaling on page load
scaleCenterBox();
