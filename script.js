/* Gears & Gloss Interactive Features */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Screenshot Tab Switcher
  const tabBtns = document.querySelectorAll('.tab-btn');
  const appScreens = document.querySelectorAll('.app-screen-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update active button
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update visible app screen mockup
      appScreens.forEach(screen => {
        screen.classList.remove('active');
        if (screen.id === targetTab) {
          screen.classList.add('active');
        }
      });
    });
  });

  // Delete Account Form Handling
  const deleteForm = document.getElementById('deleteAccountForm');
  const successCard = document.getElementById('deleteSuccessCard');
  const reqRefEl = document.getElementById('reqReference');

  if (deleteForm && successCard) {
    deleteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('accountEmail').value.trim();
      const phone = document.getElementById('accountPhone').value.trim();
      const confirmCheck = document.getElementById('confirmDeletion').checked;

      if (!name || !email || !confirmCheck) {
        alert('Please fill in all required fields and check the confirmation box.');
        return;
      }

      // Generate random reference code
      const refCode = 'GG-DEL-' + Math.floor(100000 + Math.random() * 900000);
      if (reqRefEl) {
        reqRefEl.textContent = refCode;
      }

      // Hide form and show success state
      deleteForm.style.display = 'none';
      successCard.style.display = 'block';

      // Scroll smoothly to success state
      successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});
