$(function(){

  function textField(message){
    if(message.content){
      var html =
      `<div class="message firstshow">
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-meesage">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    }else if(message.image){
      var html =
      `<div class="message firstshow">
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-meesage">
          <img src="${message.image}">
        </div>
      </div>`
    return html;
    }
  };

  $('#form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      type: "POST",
      url: href,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = textField(data);
      $(".messages").append(html)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.form__message').val(' ');
      $("#form").prop("disabled", false);
      $(".form__submit").prop("disabled", false);
    })
    .fail(function(){
      alert("エラー");
    })
  })
});