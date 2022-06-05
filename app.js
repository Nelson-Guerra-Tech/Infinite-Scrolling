const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// this is where the photos from unsplash, will get populated
let photosArray = [];

// unsplash API
const count = 10;
const apiKey = "J2DZ7qT2kIXIBWIyZWFKF6z2df3bZKbsQLe9ADmIB4s";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function to set attributes on DOM elements
const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

// create elements for links and photos, add to DOM
const displayPhotos = () => {
  // run function for each object in photosArray
  photosArray.forEach((photo) => {
    //   creating an anchor element to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    // setAttributes(item, {
    //   href: photo.links.html,
    //   target: "_blank",
    // });

    // create img for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    // setAttributes(img, {
    //   src: photo.urls.regular,
    //   alt: photo.alt_description,
    //   title: photo.alt_description,
    // });

    // put img inside the a element, then put both inside img container element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

// get photos from unsplash api
const getPhotos = async () => {
  try {
    const response = await fetch(apiURL);
    // grabbing photos array populating it by getting the json file
    photosArray = await response.json();
    console.log(photosArray);

    // call function
    displayPhotos();
  } catch (error) {
    // catch error here
    // alert("there has been an error");
  }
};

// check to see if scrolling near bottom of page, load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
  }
});

// onload
getPhotos();
