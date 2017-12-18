var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  for (var currName in reservations) {
    if (currName !== currName.toLowerCase()) {
      reservations[currName.toLowerCase()] = reservations[currName];
      delete reservations[currName];
    }
  }

  name = name.toLowerCase();

  if (name in reservations) {
    if (reservations[name].claimed === false) {
      alert('Welcome ' + name);
      reservations[name].claimed = true;
    } else {
      alert('The reservation was already claimed');
    }
  } else {
      reservations[name] = { claimed: true };
      alert ('You have a new reservation');
  }
}

claimReservation();