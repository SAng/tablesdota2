function remove(comment) {
  let lines = document.getElementById("text").value.split('\n');
  let newlines = "";
  for (var i = 0; i < lines.length; i++) {
    newlinearr = lines[i].split(' ')
    newline = "";
    for (var j = 0; j < newlinearr.length; j++) {
      if (j) {
        newline += (newlinearr[j] + " ")
      } else {
        if (this.innerHTML == "Comment first word") {
          newline += ("/*" + newlinearr[j] + "*\/ ")
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

function comment() {
  let lines = document.getElementById("text").value.split('\n');
  let newlines = "";
  for (var i = 0; i < lines.length; i++) {
    newlinearr = lines[i].split(' ')
    newline = "";
    for (var j = 0; j < newlinearr.length; o++) {
      if (j) {
        newline += (newlinearr[j] + " ")
      } else {
          newline += ("/*" + newlinearr[j] + "*\/ ")

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
