import './style.css'
import c1Image1 from './assets/component-01/Image-01@2x.jpg';
import c1Image2 from './assets/component-01/Image-02@2x.jpg';
import c1Image3 from './assets/component-01/Image-03@2x.jpg';
import c2Image1 from './assets/component-02/Image-01@2x.jpg';
import c2Image2 from './assets/component-02/Image-02@2x.jpg';
import c2Image3 from './assets/component-02/Image-03@2x.jpg';

const component1Imgs = [c1Image1, c1Image2, c1Image3];
const component2Imgs = [c2Image1, c2Image2, c2Image3];


const anchorTags = document.querySelectorAll('a');
const modalNode = document.querySelector('.modal');
const component1Images = document.querySelectorAll("section:first-child img");
const component2Images = document.querySelectorAll("section:last-child img");
const modaButtonClose = document.querySelector(".modal button");
const modalBody = document.querySelector(".modal-body");
const spinner = document.querySelector(".loading-spinner")


anchorTags.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target);
    });
});

component1Images.forEach((img, key) => {
    img.addEventListener("click", () => {
        modalNode.classList.remove("hidden");
        spinner.classList.remove("hidden");
        const imageElement = document.createElement("img");
        imageElement.src = component1Imgs[key];
        modalBody.replaceChildren(imageElement);
        imageElement.addEventListener('load', () => {
            spinner.classList.add("hidden");
        })
    })
})
component2Images.forEach((img, key) => {
    img.addEventListener("click", () => {
        modalNode.classList.remove("hidden");
        spinner.classList.remove("hidden");
        const imageElement = document.createElement("img");
        imageElement.src = component2Imgs[key];
        modalBody.replaceChildren(imageElement);
        imageElement.addEventListener('load', () => {
            spinner.classList.add("hidden");
        })
    })
})

modaButtonClose.addEventListener('click', (event) => {
    event.preventDefault();
    modalNode.classList.add("hidden");
})