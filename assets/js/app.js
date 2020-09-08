

function validate(){
    var name = document.getElementById("name").value;   
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    // var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Введите имя";
      error_message.innerHTML = text;
      return false;
    }   
    if(phone.length != 15){
      text = "Введите правильный номер телефона";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 1){
      text = "Введите возраст ребёнка";
      error_message.innerHTML = text;
      return false;
    }
 
    // if(email.indexOf("@") == -1 || email.length < 6){
    //   text = "Please Enter valid Email";
    //   error_message.innerHTML = text;
    //   return false;
    // }
    if(message.length >= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    
   
    let url = `https://wa.me/79284428532?text=` + `Запись на занятие FUNNY SWIM: Имя: ` + name + `.  Тел. ` + phone + `.  Возраст ребёнка: ` + subject + `.  Комментарий: ` + message;
 

    function fixedEncodeURIComponent (url) {
        return encodeURIComponent(url).replace(/[!'()*]/g, function(c) {
          return '%' + c.charCodeAt(0).toString(16);
        });
      }


  window.open(url); 
//   window.close();
//   alert("Мы свяжемся с Вами в ближайшее время");
  return true;
}















// вешаем маску на телефон
$('.phone-field').inputmask("+7(999)999-9999");
    
// добавляем правило для валидации телефона
jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
});

// получаем нашу форму по class
var form = $('.form-request');

// включаем валидацию в форме
form.validate();

// вешаем валидацию на поле с телефоном по классу
$.validator.addClassRules({
    'phone-field': {
        checkMaskPhone: true,
    }
});

// Проверка на валидность формы при отправке, если нужно
// form.submit(function(e){
//     e.preventDefault();
//     if (form.valid()) {
//         alert('Форма отправлена');
//     }
//     return;
// });


let isInit = false;
function openModal(){
  let elModal  = document.querySelector('#Modal');
  if(isInit==false) {
   isInit = true;
   document.querySelector('.prefix-close').addEventListener('click',
        function(event) {
           event.preventDefault();
           elModal.classList.toggle('active');
        }
    );
  }
  elModal.classList.toggle('active');
}