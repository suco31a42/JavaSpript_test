$(function() {
  // .menu-triggerをクリックしたときに行われる
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    // フェードイン 
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});