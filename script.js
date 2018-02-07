let y =0;

function remove() {
let lines = $("#text").val().split('\n');
    let newlines="";
    for(var i = 0;i < lines.length;i++){
      newlinearr = lines[i].split(' ')
      newline ="";
      for(var o = 0;o < newlinearr.length;o++){
				if (o) {
          newline+=(newlinearr[o] +" ")
				} else {
           if ($(this).innerHTML = "Comment first word") {
              newline +=("/*"+newlinearr[o]+"*\/ ")
           }
        }
      }
      if (newline.length) {
      	newline = newline.slice(0, -1);
      }
      newlines+=(newline+"\n")
    }
      if (newlines.length) {
      	newlines = newlines.slice(0, -1);
      }
    $('#text').val(newlines);

 y++
}

$('#buttonremove').click(remove);
$('#buttoncomment').click(remove);




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
