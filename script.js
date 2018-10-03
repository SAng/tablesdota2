function execute() {
  let lines = document.getElementById("text").value.split('\n');
  let newlines = "";
  for (var i = 0; i < lines.length; i++) {
    lines[i]=lines[i].trim();
  }
    newline = "";
    for (var j = 0; j < lines.length; j++) {
    if (lines[j]){
        newline += ('"' + lines[j])
      

    newlines += (newline)
      if ((j+1) !== lines.length) {
        newline+='" OR\n';
    }
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
