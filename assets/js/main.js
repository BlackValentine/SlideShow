const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const imgList = $$('.img__item')
const textList = $$('.text')
const numberList = $$('.main__number')
const mainImageList = $$('.main__img')
const nextBtn = $('.move__next')
const prevBtn = $('.move__prev')

let currentImg = 0;

imgList.forEach((img, index) => {
    const text = textList[index]
    const number = numberList[index]
    const mainImage = mainImageList[index]

    img.onclick = () => {
        $('.img__item.active-opacity').classList.remove('active-opacity')
        imgList[index].classList.add('active-opacity')

        $('.main__number.active').classList.remove('active')
        number.classList.add('active')

        $('.text.active').classList.remove('active')
        text.classList.add('active')

        $('.main__img.active').classList.remove('active')
        mainImage.classList.add('active')
    }
});

nextBtn.onclick = function () {
    nextImg()
    active()
}

prevBtn.onclick = function () {
    prevImg()
    active()
}

const nextImg = function () {
    currentImg++;
    if (currentImg >= mainImageList.length) {
        currentImg = 0
    }
}

const prevImg = function () {
    currentImg--;
    if (currentImg < 0) {
        currentImg = mainImageList.length - 1
    }
}

const active = function () {
    $('.main__img.active').classList.remove('active')
    mainImageList[currentImg].classList.add('active')

    $('.img__item.active-opacity').classList.remove('active-opacity')
    imgList[currentImg].classList.add('active-opacity')

    $('.main__number.active').classList.remove('active')
    numberList[currentImg].classList.add('active')

    $('.text.active').classList.remove('active')
    textList[currentImg].classList.add('active')
}

