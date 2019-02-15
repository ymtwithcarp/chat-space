$(function(){
  function appendMessagesToIndex(message){
     var html =
        `<div class="message firstshow" data-id="${message.id}">
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-meesage">
            <img src="${message.image ? message.image : ""}">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
  return html;
  }

  if (window.location.href.match(/\/groups\/\d+\/messages/)) {

    function update(){
      var message_id = $(".message").last().data("id");

        $.ajax({
          url: location.href,
          type: "GET",
          data: {
            messages: { id: message_id }
          },
          dataType: "json"
        })

        .done(function(messages){
          if (messages.length !== 0) {
          messages.forEach(function(message){
            var html = appendMessagesToIndex(message);
            $(".messages").append(html)
          });
          }
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        })
        .fail(function(){
          alert("自動更新に失敗しました");
        })
      }
    setInterval(update, 5000);
  }
});
