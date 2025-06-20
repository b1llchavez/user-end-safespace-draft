document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    if (menuToggle && sidebarMenu) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            sidebarMenu.classList.toggle('active');
        });
        document.addEventListener('click', function(event) {
            if (!sidebarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebarMenu.classList.remove('active');
            }
        });
    }

    // File upload button
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.getElementById('supporting-file');
    const fileNameSpan = document.getElementById('fileName');
    if (uploadBtn && fileInput && fileNameSpan) {
        uploadBtn.addEventListener('click', function() {
            fileInput.click();
        });
        fileInput.addEventListener('change', function() {
            if (fileInput.files && fileInput.files.length > 0) {
                fileNameSpan.textContent = fileInput.files[0].name;
            } else {
                fileNameSpan.textContent = '';
            }
        });
    }

    // Show "Others" input field for violation type
    const typeButtons = document.querySelectorAll('#violationTypeGroup .type-button');
    const otherInput = document.getElementById('other-violation');
    if (typeButtons && otherInput) {
        typeButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                typeButtons.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');
                if (btn.dataset.type === 'Others') {
                    otherInput.classList.remove('hidden');
                } else {
                    otherInput.classList.add('hidden');
                }
            });
        });
    }
});

        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const sidebarMenu = document.getElementById('sidebarMenu');
            const timeSlots = document.querySelectorAll('.time-slot-button');

            menuToggle.addEventListener('click', function(event) {
                event.stopPropagation();
                sidebarMenu.classList.toggle('active');
            });

            document.addEventListener('click', function(event) {
                if (!sidebarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                    sidebarMenu.classList.remove('active');
                }
            });

            // Time slot selection with redirect
            timeSlots.forEach(slot => {
                slot.addEventListener('click', function() {
                    timeSlots.forEach(s => s.classList.remove('selected'));
                    this.classList.add('selected');
                    // Add small delay before redirect to show the selection
                    setTimeout(() => {
                        window.location.href = 'book-step3.html';
                    }, 200);
                });
            });
        });
