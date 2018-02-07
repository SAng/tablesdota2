function remove(comment) {
  let lines = document.getElementById("text").value.split('\n');
  let newlines = "";
  for (var i = 0; i < lines.length; i++) {
    newlinearr = lines[i].split(' ')
    newline = "";
    for (var o = 0; o < newlinearr.length; o++) {
      if (o) {
        newline += (newlinearr[o] + " ")
      } else {
        if (comment) {
          newline += ("/*" + newlinearr[o] + "*\/ ")
        }
      }
    }
    if (newline.length) {
      newline = newline.slice(0, -1);
    }
    newlines += (newline + "\n")
  }
  if (newlines.length) {
    newlines = newlines.slice(0, -1);
  }
  document.getElementById("text").value = newlines

}



var buttonremove = document.querySelector('#buttonremove');

buttonremove.addEventListener('click', function(event) {
  remove(false)
});

var buttoncomment = document.querySelector('#buttoncomment');

buttoncomment.addEventListener('click', function(event) {
  remove(true)
});

var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('#text');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
