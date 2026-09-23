// ===== ตรวจสอบว่าเจอปุ่มและเมนูจริงๆ =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

console.log('✅ ตรวจสอบ:', { menuToggle, navLinks });

// กดปุ่ม → เปิด-ปิด
menuToggle.addEventListener('click', function() {
    console.log('🔘 กดปุ่มเมนูแล้ว');
    navLinks.classList.toggle('show');
});

// กดเลือกเมนู → ปิดเอง
document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('show');
    });
});

// เลื่อนนุ่มๆ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});