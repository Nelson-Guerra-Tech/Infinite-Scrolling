// unsplash API
const count = 10;
const apiKey = "B8cfxd5gsC-MjcTLc8TzplNXHayXBvafa06W3DIDdv8";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from unsplash api
const getPhotos = async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // catch error here
  }
};

// onload
getPhotos();
