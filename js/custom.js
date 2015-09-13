$(document).on('ready',function(){
  setTimeout(function(){
    if(screen.width < 640){
      $('title').text('LF WEBDEV');
    }
  },500);
})
