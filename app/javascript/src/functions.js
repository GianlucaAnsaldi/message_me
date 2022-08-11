scroll_bottom = function () {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
};

submit_message = function () {
  $('#message_body').on('keydown', function (e) {
    if (e.which == 13) {
      $('button').click();
      e.target.value = '';
    }
  });
};
