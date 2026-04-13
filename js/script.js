function contactClick() {
  gtag('event', 'contact_click');
  window.location.href = "contact.html";
}

function whatsappClick() {
  gtag('event', 'whatsapp_click');
  window.open("https://wa.me/919994593003", "_blank"); // change number later
}

function submitForm(event) {
  event.preventDefault();
  gtag('event', 'form_submit');
  alert("Message Sent Successfully!");
}
