var claimReservation = function () {
    name = name.toLowerCase();
    name[0].toUpperCase();
    
    var exists = name in reservations;    
    var reserved = reservations[name].claimed;

    if (exists && reserved === false) {
        alert('Welcome ' + name);
        reservations[name].claimed = true;
      } else if(exists && reserved === true) {
        alert('The reservation was already claimed');
      } else {
        reservations[name] = { claimed: true };
        alert ('You have a new reservation');
    }
}