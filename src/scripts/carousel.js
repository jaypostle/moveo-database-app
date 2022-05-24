// My original scroll snap
// export const carouselSlideRight = () => {
//     // console.log('carousel slide right was clicked');
//     document.querySelector('.carousel-popular').scrollLeft += 800;

// }

// export const carouselSlideLeft = () => {
//     // console.log('carousel slide left was clicked');
//     document.querySelector('.carousel-popular').scrollLeft -= 800;

// }

let slideRight;
let slideLeft;

var x = window.matchMedia("(min-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
    if (x.matches) { // If media query matches
      slideRight = 1200;
      slideLeft = -1200;
    } else {
        slideRight = 400;
        slideLeft = -800;
    }
  }
  


// Mike's adjusted scrollby code - allows for smooth transition
export const carouselSlideRight = () => {
    // console.log('carousel slide right was clicked');
    document.querySelector('.carousel-popular').scrollBy({
        left: slideRight,
        behavior: 'smooth'
    })
}

export const carouselSlideLeft = () => {
    // console.log('carousel slide left was clicked');
    document.querySelector('.carousel-popular').scrollBy({
        left: slideLeft,
        behavior: 'smooth'
    })
}
