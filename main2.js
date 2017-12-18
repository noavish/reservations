var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var claimReservation = function (name) {
  // write your code here!
  resultName = ifInRes(name);
  if (resultName) {
    name = resultName;
    if (reservations[name].claimed === false) {
      alert('Welcome ' + name);
      reservations[name].claimed = true;
    } else {
      alert('The reservation was already claimed');
    }
  } else {
      reservations[name] = { claimed: true };
      alert ('You have a new reservation');
      document.getElementById('printRes').innerHTML += name + ': claimed <br>';
  }
}

var ifInRes = function (name) {
  var resArr = Object.keys(reservations);
  for (var i=0; i<resArr.length; i++) {
    if (name.toUpperCase() === resArr[i].toUpperCase()) {
       return resArr[i];
    } 
  } 
  return null;
}


