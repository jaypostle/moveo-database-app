// My original scroll snap
// export const carouselSlideRight = () => {
//     // console.log('carousel slide right was clicked');
//     document.querySelector('.carousel-popular').scrollLeft += 800;

// }

// export const carouselSlideLeft = () => {
//     // console.log('carousel slide left was clicked');
//     document.querySelector('.carousel-popular').scrollLeft -= 800;

// }

// Mike's adjusted scrollby code - allows for smooth transition
export const carouselSlideRight = () => {
    // console.log('carousel slide right was clicked');
    document.querySelector('.carousel-popular').scrollBy({
        left: 1200,
        behavior: 'smooth'
    })
}

export const carouselSlideLeft = () => {
    // console.log('carousel slide left was clicked');
    document.querySelector('.carousel-popular').scrollBy({
        left: -1200,
        behavior: 'smooth'
    })
}
