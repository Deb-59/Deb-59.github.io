function sendEmail() {
 var name = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 var message = document.getElementById('message').value;
 var mailtoLink = 'mailto:tonemail@example.com?subject=Message de ' + name + '&body=' + encodeURIComponent(message) + '%0D%0A%0D%0ADe: ' + name + ' (' + email + ')';
  window.location.href = mailtoLink;
 }