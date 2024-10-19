const countries = 
  [
    {
      name: "рОсосіЯ",
      capital: "https://gordonua.com/img/article/16630/80_main-v1683623216.jpg",
      language:
        "https://st2.depositphotos.com/1036149/12479/i/450/depositphotos_124793560-stock-photo-pig-holding-card.jpg",
      population:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA.jpg",
      flag: "https://patrioty.org.ua/images/2021/10/31184431_fd15238aeac3903fc1cb1bd6b5e911fa_large.jpg",
    },
    {
      name: "Україна",
      capital:
        "https://dance.knukim.edu.ua/wp-content/uploads/2022/12/A098B2F3-9598-4F1F-9E4E-4D88774D789F-1024x682.jpeg",
      language:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_spVJ9njsNFjr539gm4m8skRfLWIm6BaPPg&s",
      population:
        "https://day.kyiv.ua/sites/default/files/photogalleries/20102015/12fashion.jpg",
      flag: "https://radioukrajina.cz/content/wys_news/drag_n_drop/368692525_668165092011646_7412041784579518465_n-image(1200x916).jpg",
    },
    {
      name: "Великобританія",
      capital:
        "https://www.arttour.ru/promo/cruise/wp-content/uploads/2016/04/angli.jpg",
      language:
        "https://storage.dtkt.ua/files/%D0%94%D0%B5%D1%80%D0%B6%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F/english1.jpg",
      population:
        "https://www.shutterstock.com/shutterstock/photos/102471422/display_1500/stock-photo-arabic-middle-eastern-black-man-with-thumb-up-102471422.jpg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
    },
  ]
import countriesData from "../hbs/countries.hbs";

const toDisplay = document.querySelector(".toDisplay");
const render = countriesData(countries);
toDisplay.innerHTML = render; 