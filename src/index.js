const userData = [
  {
    designerName: "Linda Wilson",
    primary: "#CECDCE",
    accent: "#D9C68E",
    textColor: "#FFFFFF",
    avatar: "/assets/avatar/avatar-1.jpg",
    image: "assets/images/furniture-1.jpg",
    imageDescription: "",
  },
  {
    designerName: "Michael Jones",
    primary: "#FFFFFF",
    accent: "#FFB664",
    textColor: "#010001",
    avatar: "/assets/avatar/avatar-2.jpg",
    image: "assets/images/furniture-2.jpg",
    imageDescription: "",
  },
  {
    designerName: "Thomas Davis",
    primary: "#CFCECF",
    accent: "#BBD49B",
    textColor: "#FFFFFF",
    avatar: "/assets/avatar/avatar-3.jpg",
    image: "assets/images/furniture-3.jpg",
    imageDescription: "",
  },
  {
    designerName: "Patricia Jones",
    primary: "#B5B8C3",
    accent: "#E0E5E7",
    textColor: "#FFFFFF",
    avatar: "/assets/avatar/avatar-4.jpg",
    image: "assets/images/furniture-4.jpg",
    imageDescription: "",
  },
];

window.onload = (e) => {
  changeCarouselItem();
};

let index = 0;
const accentDiv = document.getElementById("accent-div");
const container = document.getElementById("container");
const nameHeader = document.querySelector(".designer-name");
const carouselCounter = document.querySelector(".carousel-counter");
const avatarContainer = document.querySelector('.avatar-container');
const pictureContainer = document.querySelector('.picture-container');

const changeCarouselItem = () => {
  const data = userData[index];
  setBackground(data?.primary, data?.accent);
  setDesignerName(data?.designerName, data?.textColor);
  setCarouselIndex(index, userData.length, data?.textColor);
  if (index === userData.length - 1) {
    index = 0;
  } else {
    index++;
  }
};

const setBackground = (primary, accent) => {
  container.style.backgroundColor = primary;
  accentDiv.style.backgroundColor = accent;
};

const setDesignerName = (name, color) => {
  name = name.replace(' ', '<br>');
  nameHeader.innerHTML = name;
  nameHeader.style.color = color;
};

const setCarouselIndex = (index, total, color) => {
  const currentItem = carouselCounter.querySelector('.current-item');
  const totalItems = carouselCounter.querySelector('.total-items');
  const line = carouselCounter.querySelector('.hr');
  currentItem.textContent = `0${index + 1}`;
  totalItems.textContent = `0${total}`;
  currentItem.style.color = color;
  totalItems.style.color = color;
  line.style.backgroundColor = color;
}

const setImage = (avatar, image) => {
  const avatarImage = avatarContainer.querySelector('img');
}
setInterval(changeCarouselItem, 2000);
