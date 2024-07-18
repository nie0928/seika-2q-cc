import JustValidate from 'just-validate';

// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css/bundle';



const validator = new JustValidate('#basic_form');

// ここ
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });

  swiper.on('slideChange', function (){
    const currentsSliderIndex = swiper.realIndex;
    console.log(currentsSliderIndex)
    const text = 'スライド？を表示しています。'
    console.log(text)
  })







validator
    .addField('#basic_name', [
        {
            rule: 'required',
            errorMessage: "必修項目です"
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: "三文字以上入力してください"
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: "15文字以内で入力してください"
        },

    ])
    .addField('#basic_email', [
        {
            rule: 'required',
            errorMessage: "必修項目です"
        },
        {
            rule: 'email',
            errorMessage: "不正なメールアドレスです"
        },
    ])
    .addField('#basic_password', [
        {
            rule: 'required',
            errorMessage: "必修項目です"
        },
        {
            rule: 'password',
            errorMessage: "最低8文字、数字とアルファベットで構成してください"
        },
    ])
    .addField('#basic_age', [
        {
            rule: 'required',
            errorMessage: "必修項目です"
        },
        {
            rule: 'number',
            errorMessage: "数字以外入力できません"
        },
        {
            rule: 'minNumber',
            value: 18,
            errorMessage: "18以上の入力しかできません"
        },
        {
            rule: 'maxNumber',
            value: 150,
            errorMessage: "150以下の入力しかできません"
        },
    ])

    .addField('#basic_address',[
        {
            rule: 'required',
            errorMessage: "必須項目です"
        },
    ])

    .onSuccess((event) => {
        let formData = new FormData(event.target);
        console.log(formData.get("name"))
        console.log(formData.get("email"))
        console.log(formData.get("password"))
        console.log(formData.get("age"))
        console.log(formData.get("address"))
    });