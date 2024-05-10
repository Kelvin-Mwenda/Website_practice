
// script.js

document.addEventListener('DOMContentLoaded', function() {
  const gridItems = document.querySelectorAll('.grid-item');

  function addShakeEffect() {
    this.classList.add('shake');
  }

  function removeShakeEffect() {
    this.classList.remove('shake');
  }

  gridItems.forEach(function(item) {
    item.addEventListener('mouseover', addShakeEffect);
    item.addEventListener('mouseout', removeShakeEffect);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const profileContainer = document.querySelector('.profile-container');
  const profilePhoto = document.querySelector('.profile-photo');

  profileContainer.addEventListener('mouseover', function() {
    profileContainer.classList.add('pop', 'vibrate');
  });

  profileContainer.addEventListener('mouseout', function() {
    profileContainer.classList.remove('pop', 'vibrate');
  });
});

