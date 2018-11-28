function execute() {
  var lines = document.getElementById("text").value.split('\n');
  var newlines = "";
  console.log(lines.length)
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].trim().length) {
      newlines+=("\"" +lines[i].trim()+"\"")
        if ((i+1) !== lines.length) {
          newlines+=", ";
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
