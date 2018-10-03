function execute() {
  let lines = document.getElementById("text").value.split('\n');
  let newlines = "";
  for (var i = 0; i < lines.length; i++) {
    lines[i]=lines[i].trim();
  }
    newline = "";
    for (var j = 0; j < newlinearr.length; j++) {
 
        newline += ('"' + newlinearr[j])
      

    newlines += (newline)
      if ((j+1) !== newlinearr.length) {
        newline+='" OR';
  }
    }

  document.getElementById("text").value = newlines

}
  

function copy() {
  var copyTextarea = document.querySelector('#text');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
};
