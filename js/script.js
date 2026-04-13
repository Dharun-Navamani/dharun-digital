// ===============================
// SAFE ANALYTICS TRACKING
// ===============================
function trackEvent(name) {
  if (typeof gtag === "function") {
    gtag('event', name, {
      event_category: 'engagement',
      event_label: name
    });
  }
}

// ===============================
// NAVIGATION BUTTONS
// ===============================
function contactClick() {
  trackEvent('contact_click');
  window.location.href = "contact.html";
}

function whatsappClick() {
  trackEvent('whatsapp_click');
  window.open("https://wa.me/919994593003", "_blank");
}

// ===============================
// FORM SUBMIT (CONTACT PAGE)
// ===============================
function submitForm(event) {
  event.preventDefault();

  trackEvent('form_submit');

  const form = event.target;

  // Remove old message if exists
  const oldMsg = form.querySelector(".success-msg");
  if (oldMsg) oldMsg.remove();

  // Create success message
  const msg = document.createElement("p");
  msg.innerText = "✅ Message sent successfully!";
  msg.className = "success-msg";
  msg.style.color = "green";
  msg.style.marginTop = "10px";

  form.appendChild(msg);

  // Reset form
  form.reset();

  // Remove message after 3 seconds
  setTimeout(() => {
    msg.remove();
  }, 3000);
}

// ===============================
// BLOG DATA
// ===============================
const blogData = [
  {
    title: "What is SEO in 2026?",
    content: "SEO helps websites rank on Google and get organic traffic."
  },
  {
    title: "Top 5 Digital Marketing Strategies",
    content: "Use SEO, social media, ads, content marketing and email marketing."
  },
  {
    title: "How to Grow Your Business Online",
    content: "Build a website, optimize SEO, run ads and engage customers."
  }
];

// ===============================
// LOAD BLOGS (INDEX + BLOG PAGE)
// ===============================
function loadBlogs(limit = null) {
  const el = document.getElementById("blogList");
  if (!el) return;

  el.innerHTML = "";

  const blogsToShow = limit ? blogData.slice(0, limit) : blogData;

  blogsToShow.forEach(blog => {
    el.innerHTML += `
      <div class="card">
        <h3>${blog.title}</h3>
        <p>${blog.content}</p>
      </div>
    `;
  });
}

// ===============================
// AUTO INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // On homepage → show only 2 blogs
  if (document.body.id === "home") {
    loadBlogs(2);
  } else {
    loadBlogs();
  }
});
