// JavaScript สำหรับการจัดการคลิกเพื่อเพิ่มหรือลบคลาส 'active'
document.querySelectorAll('.slider-img').forEach(item => {
   item.addEventListener('click', () => {
       document.querySelectorAll('.slider-img').forEach(img => img.classList.remove('active'));
       item.classList.add('active');
   });
});


// ปุ่มจากกล่องโช'
function scrollToBox1() {
   document.getElementById('box1').scrollIntoView({ behavior: 'smooth' });
}

function handleScroll() {
   const sliderImages = document.querySelectorAll('.slider-img');
   sliderImages.forEach(img => {
       const rect = img.getBoundingClientRect();
       if (rect.top < window.innerHeight && rect.bottom > 0) {
           img.classList.add('visible');
       } else {
           img.classList.remove('visible');
       }
   });
}

document.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // เรียก handleScroll เมื่อโหลดหน้า

