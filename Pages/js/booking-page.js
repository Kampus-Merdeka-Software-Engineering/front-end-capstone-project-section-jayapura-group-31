const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

const urlParams = new URLSearchParams(window.location.search);
const selectedOption = urlParams.get("selectedOption");

if (selectedOption) {
  const selectElement = document.getElementById("paket-konseling");
  selectElement.value = selectedOption;
  }

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 
    alert(
      "Data telah berhasil terkirim untuk lebih lanjut anda akan dihubungi melalui Email. Terima kasih telah mendaftar!"
    );
  });

const form = document.getElementById('bookingForm');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
      window.location.href = '/summary.html'
      });

document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch(event.target.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
        } else {
          alert("Error submitting the form. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
        alert("Network error occurred. Please check your internet connection.");
      });
  });