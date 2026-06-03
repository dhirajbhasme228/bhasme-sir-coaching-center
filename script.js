(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  function closeMenu() {
    if (!links || !toggle) return;
    links.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.classList.toggle("active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // Enquiry form handling (works with Formspree once endpoint is set)
  var form = document.getElementById("enquiryForm");
  var note = document.getElementById("formNote");

  function setNote(message, type) {
    if (!note) return;
    note.textContent = message;
    note.className = "form-note " + (type || "");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      // If the Formspree endpoint hasn't been configured yet, fall back gracefully.
      var notConfigured = form.action.indexOf("your-form-id") !== -1;

      var name = (form.elements.name && form.elements.name.value || "").trim();
      var phone = (form.elements.phone && form.elements.phone.value || "").trim();

      if (!name || !phone) {
        e.preventDefault();
        setNote("Please enter your name and phone number.", "err");
        return;
      }

      if (notConfigured) {
        e.preventDefault();
        setNote(
          "Form endpoint not set up yet. Please call/WhatsApp us, or configure Formspree (see README).",
          "err"
        );
        return;
      }

      // Otherwise let it submit to Formspree normally.
      setNote("Sending your enquiry…", "ok");
    });
  }
})();
