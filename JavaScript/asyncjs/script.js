const BASE_URL = 'https://api.thecatapi.com/v1/images/search'
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async() =>{
    try {
        const data = await fetch (BASE_URL);
        const json = await data.json();

        return json();
    } catch (error) {
      console.log(error.message);  
    }
};

const loadImg = async() =>{
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();