function execute() {
  var data = [["- ah fu -","Royal Never Give Up","Support"," 45","15.12","0.75","1.01","0.09","0.52","0.20","0.00","1.97","7.22","0.69","0.85","0.53","1.28"],["33","Ninjas in Pyjamas","Core"," 23","11.41","1.37","1.75","0.51","0.82","0.74","0.09","1.96","0.07","0.76","0.97","0.52","1.86"],["9pasha","Virtus.pro","Core"," 40","10.07","1.13","1.86","0.58","0.85","0.62","0.12","2.05","0.06","0.20","1.18","0.20","1.21"],["Abed","Fnatic","Mid"," 25","15.08","2.05","2.06","1.00","1.23","1.24","0.48","1.87","0.18","1.04","1.75","0.48","1.68"],["Ace","Ninjas in Pyjamas","Core"," 23","13.64","1.70","1.72","1.02","1.15","2.61","0.65","1.81","0.07","0.87","1.23","0.17","0.64"],["Ameame","PSG.LGD","Core"," 24","14.68","2.04","2.20","1.11","1.28","2.33","0.21","1.89","0.00","0.79","1.51","0.00","1.32"],["ana","OG","Core"," 25","15.71","3.14","1.63","0.97","1.24","3.32","0.64","1.85","0.02","0.32","1.09","0.48","1.01"],["ARMEL","TNC Predator","Mid"," 22","16.55","2.52","1.81","1.28","1.31","2.36","0.50","2.21","0.14","0.64","1.49","0.55","1.74"],["Blizzy","Natus Vincere","Core"," 39","10.39","1.02","1.65","0.53","0.78","0.51","0.00","1.95","0.13","0.95","1.25","0.21","1.42"],["Boxi","Alliance","Core"," 31","11.42","1.45","0.99","0.59","0.82","0.52","0.06","1.83","0.13","0.65","1.44","0.52","2.42"],["CCnC","Newbee","Mid"," 30","14.07","1.93","2.19","0.85","1.16","1.33","0.30","2.02","0.13","0.60","1.67","0.13","1.75"],["Ceb","OG","Core"," 25","11.58","1.50","1.28","0.74","0.95","0.68","0.12","1.94","0.10","0.48","1.43","0.64","1.71"],["Chalice","PSG.LGD","Core"," 24","11.20","1.31","1.99","0.69","0.94","1.25","0.12","1.94","0.04","0.40","0.96","0.17","1.40"],["Chris Luck ","Infamous Gaming","Mid"," 23","15.28","2.60","1.84","0.89","1.17","1.00","0.22","2.05","0.54","0.63","2.41","0.35","1.59"],["Cr1t-","Evil Geniuses","Support"," 23","10.22","0.99","1.38","0.19","0.62","0.35","0.00","2.08","0.57","0.46","1.21","0.17","2.20"],["Crystallize","Natus Vincere","Core"," 39","14.49","2.18","2.33","1.05","1.22","2.00","0.67","2.00","0.03","0.33","0.92","0.41","1.35"],["Dark","KEEN GAMING","Support","  8","11.63","0.38","1.50","0.12","0.52","0.25","0.00","1.90","5.44","0.25","0.81","0.00","0.47"],["DJ","Fnatic","Support"," 25","12.34","0.90","1.70","0.30","0.65","1.16","0.16","1.88","0.70","1.24","1.49","0.16","2.00"],["DuBu","Fnatic","Support","384","12.58","0.64","1.20","0.09","0.47","0.12","0.02","1.88","4.92","0.74","0.89","0.29","1.32"],["Dy","\tVici Gaming","Support"," 31","15.62","0.66","1.34","0.16","0.55","0.06","0.03","2.05","6.65","1.40","0.74","0.52","1.46"],["eyyou","TNC Predator","Support"," 22","16.93","0.89","1.25","0.17","0.60","0.09","0.05","2.07","5.84","2.20","1.24","1.27","1.26"],["Fade","\tVici Gaming","Support"," 31","12.04","1.08","1.62","0.27","0.65","0.29","0.03","2.18","1.69","0.79","0.77","0.65","2.02"],["Fata","Ninjas in Pyjamas","Mid"," 23","14.63","2.03","1.81","0.82","1.02","1.30","0.26","1.96","0.52","0.76","1.95","0.70","1.50"],["Fly","Evil Geniuses","Support"," 23","15.67","0.95","1.59","0.13","0.59","0.22","0.09","2.02","6.09","1.35","0.75","0.87","1.03"],["Flyby","Royal Never Give Up","Core"," 45","10.47","0.97","1.73","0.60","0.87","0.73","0.09","1.97","0.08","0.69","1.23","0.18","1.34"],["fy","PSG.LGD","Support"," 24","11.96","1.06","1.50","0.30","0.69","0.38","0.04","1.93","1.04","1.04","1.32","0.67","1.98"],["Gabbi","TNC Predator","Core"," 22","16.74","2.71","2.00","1.23","1.26","2.77","0.50","2.25","0.07","0.68","1.39","0.36","1.51"],["Gh","Team Liquid","Support"," 35","11.00","0.82","1.29","0.24","0.61","0.29","0.06","2.04","0.27","1.39","1.53","0.46","2.01"],["iceiceice","Fnatic","Core"," 25","11.18","1.07","1.76","0.67","0.90","0.72","0.16","1.86","0.04","0.36","0.97","0.80","1.86"],["iNSaNia","Alliance","Support"," 31","16.25","0.77","1.32","0.22","0.58","0.10","0.00","1.71","7.61","1.27","0.69","0.26","1.71"],["JAbz","Fnatic","Core"," 25","15.78","0.56","1.07","0.19","0.55","0.12","0.00","1.82","7.58","0.92","0.96","0.80","1.21"],["JerAx","OG","Support"," 25","11.83","1.01","0.91","0.21","0.62","0.20","0.00","2.09","2.52","0.68","0.93","0.00","2.66"],["K1 Hector","Infamous Gaming","Core"," 23","14.44","2.03","2.14","1.15","1.43","3.00","0.52","1.74","0.00","0.50","0.82","0.17","0.94"],["kaka","KEEN GAMING","Support","  8","10.15","0.79","0.68","0.22","0.59","0.38","0.12","1.90","1.19","0.81","0.94","0.50","2.03"],["KheZu","Chaos Esports Club","Core"," 19","10.01","0.82","1.97","0.59","0.84","0.79","0.05","1.75","0.18","0.82","1.03","0.21","0.95"],["kpii","Mineski","Core"," 25"," 9.90","0.71","1.90","0.54","0.83","1.28","0.08","1.81","0.04","0.24","0.96","0.32","1.19"],["Kuku^","TNC Predator","Core"," 22","13.07","1.32","1.31","0.76","0.90","0.50","0.18","2.07","0.20","1.05","2.33","0.18","2.27"],["KuroKy","Team Liquid","Support"," 35","15.86","0.93","1.21","0.16","0.57","0.37","0.03","1.97","7.93","0.40","0.91","0.23","1.15"],["LaNm","Royal Never Give Up","Support"," 45","11.68","0.98","1.25","0.25","0.61","0.80","0.16","2.07","0.77","0.39","1.24","0.62","2.54"],["MagicaL","Natus Vincere","Mid"," 39","16.09","2.23","2.27","0.94","1.19","2.36","0.26","2.07","0.35","1.31","1.49","0.41","1.22"],["MATUMBAMAN","Chaos Esports Club","Mid"," 33","13.09","1.99","1.95","0.78","1.08","2.09","0.30","2.02","0.09","0.58","1.06","0.36","0.78"],["miCKe","Alliance","Core"," 31","14.73","2.65","2.09","1.19","1.24","2.19","0.45","1.90","0.05","0.74","1.27","0.26","0.69"],["MidOne","Team Secret","Mid"," 16","15.19","2.12","1.65","1.03","1.10","1.56","0.56","1.87","0.09","0.69","1.84","0.50","2.18"],["MiLAN","Chaos Esports Club","Support"," 19","12.74","0.99","1.72","0.26","0.67","0.47","0.11","1.96","0.68","0.87","1.03","0.42","3.55"],["MinD_ContRoL","Team Liquid","Core"," 35","10.47","1.06","1.31","0.61","0.88","0.91","0.17","1.76","0.04","0.56","1.50","0.11","1.54"],["Miracle-","Team Liquid","Core"," 35","15.89","2.54","1.95","1.08","1.24","1.94","0.49","2.06","0.00","0.54","1.47","1.03","1.55"],["misery","Chaos Esports Club","Support"," 19","14.94","0.60","1.15","0.14","0.55","0.16","0.00","1.85","6.95","0.79","1.24","0.21","1.30"],["Monet","Royal Never Give Up","Core"," 45","14.74","2.03","2.11","1.11","1.25","2.22","0.36","1.89","0.07","0.54","1.31","0.53","1.31"],["Moonn","Mineski","Mid"," 25","13.86","1.88","1.80","0.86","1.11","1.60","0.36","1.87","0.34","0.68","1.66","0.00","1.69"],["MSS-","Newbee","Support"," 30","12.59","1.32","2.28","0.28","0.73","0.33","0.07","2.19","0.83","1.07","1.35","0.67","1.47"],["N0tail","OG","Support"," 15","13.21","0.76","0.44","0.17","0.57","0.20","0.00","1.65","5.80","1.30","1.10","0.53","0.68"],["Nikobaby竜の道","Mineski","Core"," 24","14.22","2.17","2.44","1.05","1.21","1.67","0.29","2.13","0.00","0.21","0.94","1.17","0.94"],["ninjaboogie","Mineski","Support"," 25","15.74","0.56","1.30","0.15","0.55","0.44","0.08","1.91","6.60","0.70","1.28","0.32","1.86"],["Nisha","Team Secret","Core"," 16","16.41","2.02","2.10","1.41","1.32","3.31","0.50","1.90","0.06","1.16","1.47","0.25","0.91"],["No[o]ne-","Virtus.pro","Mid"," 40","15.26","2.22","2.17","0.89","1.11","2.00","0.20","2.06","0.12","0.91","1.64","0.20","1.73"],["old chicken","KEEN GAMING","Core","  8","12.30","1.80","2.10","0.73","0.99","2.00","0.12","1.83","0.12","0.31","1.22","0.00","1.08"],["old eLeVeN","KEEN GAMING","Core","  8","10.54","1.12","1.39","0.54","0.85","0.38","0.12","1.99","0.25","0.81","1.12","1.00","0.96"],["Ori","\tVici Gaming","Mid"," 31","14.53","2.17","2.17","1.04","1.16","1.52","0.32","1.97","0.08","1.27","1.65","0.26","0.92"],["Paparazi灬","\tVici Gaming","Core"," 31","15.58","2.50","2.18","1.03","1.24","2.52","0.48","2.11","0.02","0.61","1.41","0.26","1.23"],["Peterpandam","Ninjas in Pyjamas","Support"," 23","13.49","0.59","0.97","0.20","0.58","0.26","0.04","1.70","6.46","0.46","1.12","0.35","0.78"],["pieliedie","Newbee","Support"," 30","15.29","0.60","1.83","0.14","0.56","0.27","0.00","2.02","6.22","1.55","0.70","0.40","1.01"],["Puppey","Team Secret","Support"," 16","19.37","0.88","1.11","0.40","0.66","0.56","0.06","2.12","7.62","0.56","1.61","0.50","3.27"],["qojqva","Alliance","Mid"," 31","14.11","1.95","1.89","0.96","1.06","1.52","0.16","1.95","0.11","0.76","1.96","0.39","1.40"],["ragingpotato","Mineski","Support"," 25","11.13","0.73","1.25","0.25","0.63","0.16","0.00","2.03","1.04","0.82","1.47","0.48","2.27"],["RAMZEs","Virtus.pro","Core"," 40","15.94","2.19","2.14","1.18","1.28","3.08","0.57","2.02","0.06","0.59","1.34","0.60","0.88"],["RodjER","Virtus.pro","Support"," 40","13.08","0.86","1.51","0.28","0.64","0.50","0.08","2.12","1.48","1.59","1.15","0.50","2.38"],["rtz","Evil Geniuses","Core"," 23","14.54","2.09","2.22","0.95","1.33","2.78","0.30","1.87","0.09","1.04","0.72","0.17","0.98"],["s4","Evil Geniuses","Core"," 23"," 9.46","1.15","1.54","0.43","0.82","0.78","0.00","1.94","0.11","0.63","0.78","0.17","1.10"],["Saksa","Ninjas in Pyjamas","Support"," 23","13.14","1.03","1.17","0.31","0.65","0.43","0.09","2.02","1.70","0.59","1.49","0.17","3.50"],["Scofield","Infamous Gaming","Support"," 28","11.03","0.69","1.19","0.14","0.58","0.04","0.07","2.06","1.04","0.46","1.30","0.43","3.03"],["Setsu","Royal Never Give Up","Mid"," 45","14.27","2.57","1.93","1.09","1.23","1.58","0.44","1.93","0.41","0.20","1.25","0.09","1.55"],["Sneyking","Newbee","Core"," 30","11.78","1.51","2.16","0.55","0.92","1.00","0.17","1.96","0.23","0.38","1.35","0.27","1.28"],["Solo","Virtus.pro","Support"," 40","14.95","0.80","1.20","0.14","0.54","0.15","0.08","1.98","6.96","0.50","0.69","0.60","1.31"],["SoNNeikO","Natus Vincere","Support"," 39","16.69","0.84","1.38","0.18","0.59","0.10","0.00","2.12","7.19","2.10","1.17","0.31","0.70"],["stinger","Infamous Gaming","Support"," 17","16.51","0.95","1.01","0.13","0.60","0.12","0.06","1.88","6.47","2.24","0.87","0.94","1.25"],["SumaiL","Evil Geniuses","Mid"," 23","15.04","2.66","2.02","0.88","1.24","1.48","0.17","1.94","0.13","0.83","2.03","0.17","1.48"],["Taiga","Alliance","Support"," 31","13.68","0.90","1.12","0.32","0.65","0.48","0.00","1.98","1.11","2.45","1.10","0.26","3.30"],["Tims","TNC Predator","Support"," 22","17.52","0.74","1.46","0.32","0.63","0.27","0.05","2.05","4.61","1.55","1.53","0.18","4.13"],["Topson","OG","Mid"," 25","14.56","2.36","1.28","0.71","1.01","1.04","0.24","1.98","0.22","0.56","1.55","0.80","2.81"],["vtFαded","Chaos Esports Club","Core"," 40","15.01","1.81","2.39","1.19","1.27","2.45","0.60","1.95","0.06","0.59","1.30","0.50","0.90"],["W_Zayac","Natus Vincere","Support"," 39","13.00","0.98","1.38","0.26","0.65","0.08","0.05","2.08","1.17","1.09","1.28","0.51","3.47"],["w33","Team Liquid","Mid"," 21","13.37","2.03","2.03","0.85","1.08","2.29","0.33","1.76","0.05","0.38","0.98","0.19","1.41"],["Wisper","Infamous Gaming","Core"," 22","11.83","1.77","1.69","0.56","0.92","1.09","0.14","2.11","0.00","0.50","1.44","0.73","0.88"],["xNova","PSG.LGD","Support"," 24","17.05","0.61","1.44","0.17","0.57","0.46","0.04","1.92","7.58","0.90","1.05","0.17","2.15"],["Yang","\tVici Gaming","Core"," 31","11.44","1.19","1.72","0.65","0.95","1.00","0.16","1.98","0.11","0.48","1.43","0.26","1.50"],["YapzOr","Team Secret","Support"," 16","12.98","1.48","1.71","0.41","0.77","0.44","0.00","2.15","1.28","0.25","1.44","0.25","2.80"],["YawaR","Newbee","Core"," 30","15.81","2.38","2.46","1.02","1.33","2.90","0.53","1.97","0.00","0.45","1.14","0.53","1.10"],["zai","Team Secret","Core"," 16","12.58","1.24","1.31","0.65","0.86","0.50","0.12","2.08","0.22","1.16","2.00","0.75","1.70"],["一","KEEN GAMING","Mid","  8","11.54","1.16","1.80","0.79","1.03","1.88","0.25","1.45","0.44","0.62","1.41","0.00","0.71"],["小可","PSG.LGD","Mid"," 24","16.31","2.67","2.14","1.04","1.26","1.88","0.21","2.08","0.10","0.75","2.00","0.17","2.02"]]
  var cards = JSON.parse(document.getElementById("text").value);
  var table = document.getElementById("myTable");
  
var tableRef = table.getElementsByTagName('tbody')[0];
  

  for (var k=1; k<table.rows.length; k++) {
      table.deleteRow(k);
      k--;
  }
  for (var i=0; i<cards.cards.length; i++) {
          var card = cards.cards[i];
      if (card.bonuses.length == 0) {
        break;
      }
      var row = tableRef.insertRow(i);

      var carddata;
      for (var j=0; j<data.length; j++) {
        if (data[j][0] == card.player_name) {
          carddata = data[j];
          j=100;
        }
      }
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = card.player_name;
      cell2.innerHTML = carddata[1];
      cell3.innerHTML = carddata[2];
      var sum =0;
      for (var k=0; k<12; k++) {
        var cell = row.insertCell(k+3);
        var points = parseFloat(carddata[k+5]);
        sum+=points;
        cell.innerHTML = points;
      }
      var bonuses = 0;
      var bonusString  = "";
      for (var l=0; l<card.bonuses.length; l++) {

        var bonus = card.bonuses[l];
        var cell = row.cells[bonus.bonus_stat+3];

        var points = carddata[bonus.bonus_stat+5]*(1 + bonus.bonus_value/100);
        cell.innerHTML = Number((points).toFixed(4));
        bonusString+= table.rows[0].cells[bonus.bonus_stat+3].innerHTML+ bonus.bonus_value + "\%; ";
        sum+=carddata[bonus.bonus_stat+5]*bonus.bonus_value/100;
        bonuses+=carddata[bonus.bonus_stat+5]*bonus.bonus_value/100;
      }
      var cell15 = row.insertCell(15);
      var cell16 = row.insertCell(16);
      var cell17 = row.insertCell(17);
      cell15.innerHTML = carddata[4];
      cell16.innerHTML = Number((sum).toFixed(4));
      cell17.innerHTML = bonusString;

       cell17.style.backgroundColor =  card.bonuses.length > 3 ? "gold": "silver";
    var c18 = row.insertCell(18);
    var c19 = row.insertCell(19);
    
    c18.innerHTML = Number(((sum-carddata[4])/carddata[4]*100).toFixed(4));
    c19.innerHTML = Number((sum-carddata[4]).toFixed(4));

  }
  $('#myTable').DataTable();
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  

  for (var k=1; k<table.rows.length; k++) {
    if (table.rows[k].style.display == "none") {
      table.deleteRow(k);
      k--;
    };
  }
  
  
  
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML)< Number(y.innerHTML)) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function myFunction(searchColumn) {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput" + searchColumn);
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[searchColumn];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
