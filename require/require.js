$("head").load("require/head.html");


$(document).ready(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    let name = $(this).data('include');
    let file;
    if(name.indexOf(".") != -1)
      file = 'require/' + name;
    else
      file = 'require/' + name + '.html';
    $(this).load(file);
  });
});


//loading page timeout
//onwindows.load doesn't work correctly so I setted an hadedvalue, not the greatest thing but it works
function newW()
{
  $("#cover").fadeOut(1000);
}
setTimeout(newW, 1000);