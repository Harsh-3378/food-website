// let images_dt = [
//     {
//         title: "THE CHICKEN BURGER",
//         price: "$12.99",
//         MRP: "$24",
//         calorie: 7845,
//         fat: 98,
//         protein: 112
//     },
//     {
//         title: "THE PINK <br> BURGER",
//         price: "$18.90",
//         MRP: "$38",
//         calorie: 4512,
//         fat: 65,
//         protein: 78
//     },
//     {
//         title: "THE BLACK <br> BURGER",
//         price: "$10.90",
//         MRP: "$25",
//         calorie: 3521,
//         fat: 50,
//         protein: 85
//     },
//     {
//         title: "THE CLASSIC <br> BURGER",
//         price: "$20.90",
//         MRP: "$45",
//         calorie: 4578,
//         fat: 70,
//         protein: 62
//     },
//     {
//         title: "THE RED <br> BURGER",
//         price: "$11.90",
//         MRP: "$28",
//         calorie: 9845,
//         fat: 68,
//         protein: 86
//     },
//     {
//         title: "THE GREEN <br> BURGER",
//         price: "$13.90",
//         MRP: "$36",
//         calorie: 1256,
//         fat: 45,
//         protein: 123
//     },
//     {
//         title: "THE COMBO <br> BURGER",
//         price: "$9.90",
//         MRP: "$17",
//         calorie: 3245,
//         fat: 49,
//         protein: 78
//     }
// ];

// let images_off = () => {
//     Array.from(document.getElementsByClassName('main_imags')).forEach((el) => {
//         el.style = "35%";
//         el.style.filter = "blur(1.5px)";
//     })
// }

// let icon_off = () => {
//     Array.from(document.getElementsByClassName('pagi_img')).forEach((el) => {
//         el.style.transform = "unset";
//         el.style.opacity = ".3";
//     })
// }

// let index = 0;
// // let len = Array.from(document.getElementsByClassName('main_imags')).length * 310;
// document.getElementsByClassName('bi-chevron-right')[0].addEventListener('click', () => {
//     index += 310;

//     if (index > (len) - 310) {
//         index = (len) - 310;
//     }
//     document.getElementsByClassName('images')[0].scrollLeft = index;
//     images_off();
//     console.log(index);
//     document.getElementsByClassName('main_imags')[index / 310].style.width = "50%";
//     document.getElementsByClassName('main_imags')[index / 310].style.filter = "blur(0)";

//     document.getElementsByClassName('title')[0].innerHTML = images_dt[(index / 310)].title;
//     document.getElementsByClassName('price')[0].innerHTML = `${images_dt[index / 310].price}<sup><del>${images_dt[(index / 310)].MRP}</del></sup>`;
//     document.getElementById('calorie').innerText = images_dt[(index / 310)].calorie;
//     document.getElementById('fat').innerText = images_dt[(index / 310)].fat;
//     document.getElementById('protein').innerText = images_dt[(index / 310)].protein;

//     icon_off();
//     document.getElementsByClassName('pagi_img')[(index / 310)].style.transform = "scale(1.1)";
//     document.getElementsByClassName('pagi_img')[(index / 310)].style.opacity = "1";



// })



// document.getElementsByClassName('bi-chevron-left')[0].addEventListener('click', () => {
//     index -= 310;

//     if (index < 0) {
//         index = 0;
//     }
//     document.getElementsByClassName('images')[0].scrollLeft = index;
//     images_off();
//     console.log(index);
//     document.getElementsByClassName('main_imags')[index / 310].style.width = "55%";
//     document.getElementsByClassName('main_imags')[index / 310].style.filter = "blur(0)";

//     document.getElementsByClassName('title')[0].innerHTML = images_dt[(index / 310)].title;
//     document.getElementsByClassName('price')[0].innerHTML = `${images_dt[index / 310].price}<sup><del>${images_dt[(index / 310)].MRP}</del></sup>`;
//     document.getElementById('calorie').innerText = images_dt[(index / 310)].calorie;
//     document.getElementById('fat').innerText = images_dt[(index / 310)].fat;
//     document.getElementById('protein').innerText = images_dt[(index / 310)].protein;

//     icon_off();
//     document.getElementsByClassName('pagi_img')[(index / 310)].style.transform = "scale(1.1)";
//     document.getElementsByClassName('pagi_img')[(index / 310)].style.opacity = "1";
// })









// Array.from(document.getElementsByClassName('pagi_img')).forEach((el, i) => {
//     el.addEventListener('click', () => {

//         index = 310 * i;
//         document.getElementsByClassName('images')[0].scrollLeft = index;
//         images_off();
//         console.log(index);
//         document.getElementsByClassName('main_imags')[index / 310].style.width = "55%";
//         document.getElementsByClassName('main_imags')[index / 310].style.filter = "blur(0)";

//         document.getElementsByClassName('title')[0].innerHTML = images_dt[(index / 310)].title;
//         document.getElementsByClassName('price')[0].innerHTML = `${images_dt[index / 310].price}<sup><del>${images_dt[(index / 310)].MRP}</del></sup>`;
//         document.getElementById('calorie').innerText = images_dt[(index / 310)].calorie;
//         document.getElementById('fat').innerText = images_dt[(index / 310)].fat;
//         document.getElementById('protein').innerText = images_dt[(index / 310)].protein;

//         icon_off();
//         document.getElementsByClassName('pagi_img')[(index / 310)].style.transform = "scale(1.1)";
//         document.getElementsByClassName('pagi_img')[(index / 310)].style.opacity = "1";

//     })
// })
let images_dt = [
    {
        title: "THE CHICKEN BURGER",
        price: "₹299",
        MRP: "₹399",
        calorie: 784,
        fat: 98,
        protein: 112
    },
    {
        title: "THE PINK BURGER",
        price: "₹199",
        MRP: "₹249",
        calorie: 451,
        fat: 65,
        protein: 78
    },
    {
        title: "THE BLACK BURGER",
        price: "₹149",
        MRP: "₹299",
        calorie: 352,
        fat: 50,
        protein: 85
    },
    {
        title: "THE RED BURGER",
        price: "₹99",
        MRP: "₹199",
        calorie: 984,
        fat: 68,
        protein: 86
    },
    {
        title: "THE CLASSIC BURGER",
        price: "₹199",
        MRP: "₹269",
        calorie: 457,
        fat: 70,
        protein: 62
    },
    
    {
        title: "THE GREEN BURGER",
        price: "₹249",
        MRP: "₹449",
        calorie: 125,
        fat: 45,
        protein: 123
    },
    {
        title: "THE COMBO BURGER",
        price: "₹449",
        MRP: "₹599",
        calorie: 324,
        fat: 49,
        protein: 78
    }
];


let images_off = () => {
    Array.from(document.getElementsByClassName('main_imags')).forEach((el) => {
        el.style.width = "35%";
        el.style.filter = "blur(1.5px)";
    })
}

let icon_off = () => {
    Array.from(document.getElementsByClassName('pagi_img')).forEach((el) => {
        el.style.transform = "unset";
        el.style.opacity = ".3";
    })
}

// let index = 0;
// let len = document.getElementsByClassName('main_imags').length * 310;

// document.getElementsByClassName('bi-chevron-right')[0].addEventListener('click', () => {
//     index += 310;
//     if (index >= len) {
//         index = len - 310;
//     }
//     document.getElementsByClassName('images')[0].scrollLeft = index;
//     images_off();
//     document.getElementsByClassName('main_imags')[index / 310].style.width = "60%";
//     document.getElementsByClassName('main_imags')[index / 310].style.filter = "blur(0)";

//     document.getElementsByClassName('title')[0].innerHTML = images_dt[index / 310].title;
//     document.getElementsByClassName('price')[0].innerHTML = `${images_dt[index / 310].price}<sup><del>${images_dt[index / 310].MRP}</del></sup>`;
//     document.getElementById('calorie').innerText = images_dt[index / 310].calorie;
//     document.getElementById('fat').innerText = images_dt[index / 310].fat;
//     document.getElementById('protein').innerText = images_dt[index / 310].protein;

//     icon_off();
//     document.getElementsByClassName('pagi_img')[index / 310].style.transform = "scale(1.1)";
//     document.getElementsByClassName('pagi_img')[index / 310].style.opacity = "1";
// });

// document.getElementsByClassName('bi-chevron-left')[0].addEventListener('click', () => {
//     index -= 310;
//     if (index < 0) {
//         index = 0;
//     }
//     document.getElementsByClassName('images')[0].scrollLeft = index;
//     images_off();
//     document.getElementsByClassName('main_imags')[index / 310].style.width = "60%";
//     document.getElementsByClassName('main_imags')[index / 310].style.filter = "blur(0)";

//     document.getElementsByClassName('title')[0].innerHTML = images_dt[index / 310].title;
//     document.getElementsByClassName('price')[0].innerHTML = `${images_dt[index / 310].price}<sup><del>${images_dt[index / 310].MRP}</del></sup>`;
//     document.getElementById('calorie').innerText = images_dt[index / 310].calorie;
//     document.getElementById('fat').innerText = images_dt[index / 310].fat;
//     document.getElementById('protein').innerText = images_dt[index / 310].protein;

//     icon_off();
//     document.getElementsByClassName('pagi_img')[index / 310].style.transform = "scale(1.1)";
//     document.getElementsByClassName('pagi_img')[index / 310].style.opacity = "1";
// });

let index = 0;
const imageWidth = 310;  // Width of each image including margins
const defaultImageWidth = 60;  // Width of the default central image as a percentage
const defaultImageOffset = 0;  // The offset for the central image in pixels (adjust if needed)
const imagesContainer = document.querySelector('.images');
const images = document.querySelectorAll('.main_imags');
const totalImages = images.length;

const updateImageStyles = (currentIndex) => {
    Array.from(images).forEach((img, i) => {
        img.style.width = "35%";
        img.style.filter = "blur(1.5px)";
    });

    images[currentIndex].style.width = `${defaultImageWidth}%`;
    images[currentIndex].style.filter = "blur(0)";
}

const updateContent = (currentIndex) => {
    document.querySelector('.title').innerHTML = images_dt[currentIndex].title;
    document.querySelector('.price').innerHTML = `${images_dt[currentIndex].price}<sup><del>${images_dt[currentIndex].MRP}</del></sup>`;
    document.getElementById('calorie').innerText = images_dt[currentIndex].calorie;
    document.getElementById('fat').innerText = images_dt[currentIndex].fat;
    document.getElementById('protein').innerText = images_dt[currentIndex].protein;

    icon_off();
    document.querySelector('.pagi_img')[currentIndex].style.transform = "scale(1.1)";
    document.querySelector('.pagi_img')[currentIndex].style.opacity = "1";
}

document.querySelector('.bi-chevron-right').addEventListener('click', () => {
    if (index < totalImages - 1) {
        index++;
    }

    const scrollPosition = index * imageWidth - (imagesContainer.clientWidth / 2) + (defaultImageWidth / 2 * imagesContainer.clientWidth / 100);
    imagesContainer.scrollLeft = scrollPosition + defaultImageOffset;
    updateImageStyles(index);
    updateContent(index);
});

document.querySelector('.bi-chevron-left').addEventListener('click', () => {
    if (index > 0) {
        index--;
    }

    const scrollPosition = index * imageWidth - (imagesContainer.clientWidth / 2) + (defaultImageWidth / 2 * imagesContainer.clientWidth / 100);
    imagesContainer.scrollLeft = scrollPosition + defaultImageOffset;
    updateImageStyles(index);
    updateContent(index);
});


Array.from(document.getElementsByClassName('pagi_img')).forEach((el, i) => {
    el.addEventListener('click', () => {
        index = 310 * i;
        document.getElementsByClassName('images')[0].scrollLeft = index;
        images_off();
        document.getElementsByClassName('main_imags')[index / 310].style.width = "60%";
        document.getElementsByClassName('main_imags')[index / 310].style.filter = "blur(0)";

        document.getElementsByClassName('title')[0].innerHTML = images_dt[index / 310].title;
        document.getElementsByClassName('price')[0].innerHTML = `${images_dt[index / 310].price}<sup><del>${images_dt[index / 310].MRP}</del></sup>`;
        document.getElementById('calorie').innerText = images_dt[index / 310].calorie;
        document.getElementById('fat').innerText = images_dt[index / 310].fat;
        document.getElementById('protein').innerText = images_dt[index / 310].protein;

        icon_off();
        document.getElementsByClassName('pagi_img')[index / 310].style.transform = "scale(1.1)";
        document.getElementsByClassName('pagi_img')[index / 310].style.opacity = "1";
    })
});
