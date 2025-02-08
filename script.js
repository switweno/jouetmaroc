
function orderNow(productName, imageUrl) {
    const phoneNumber = "212762609147"; // رقم الهاتف
    if (!productName || !imageUrl) {
        alert("الرجاء إدخال اسم المنتج ورابط الصورة.");
        return;
    }

    const message = `مرحبًا، أريد الاستفسار عن ${productName}، هل يمكنكم إرسال التفاصيل؟`;

    // تضمين رابط الصورة في الرسالة
    const messageWithImage = `${message} يمكنك رؤية الصورة من خلال هذا الرابط: ${imageUrl}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageWithImage)}`;
    window.open(whatsappURL, '_blank');
}



    
 document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
                });
            });
        });
		
		
function changeImage(button, index) {
            // الحصول على العنصر الأبو الذي يحتوي على الصور
            const sliderIndex = button.getAttribute('data-slider');
            const slider = document.querySelectorAll('.image-slider')[sliderIndex];
            const images = slider.querySelectorAll('img');
            const buttons = slider.nextElementSibling.querySelectorAll('button');

            // إزالة الفئة "active" من جميع الصور والأزرار
            images.forEach(img => img.classList.remove('active'));
            buttons.forEach(btn => btn.classList.remove('active'));

            // إضافة الفئة "active" للصورة المختارة والزر المحدد
            images[index].classList.add('active');
            buttons[index].classList.add('active');
        }
		
		
       // تغيير المسافة حسب الحاجة	
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('a[href="#products"]').addEventListener("click", function(event) {
        event.preventDefault(); // منع التمرير الافتراضي
        let target = document.querySelector("#products");
        let offset = 100; // تغيير المسافة حسب الحاجة
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
    });
});
 // تغيير المسافة حسب الحاجة	
 
 
let slideIndex = 1;
let slides = document.querySelectorAll('.slides img');
let dots = document.getElementsByClassName('dot');
let isPlaying = true;

// عرض الشريحة الحالية
function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // إخفاء جميع الشرائح
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // إزالة النشاط من جميع النقاط
    Array.from(dots).forEach(dot => dot.classList.remove('active'));

    // عرض الشريحة الحالية وإضافة النشاط للنقطة المناسبة
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
}

// تغيير الشريحة
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// الانتقال إلى شريحة معينة
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// بدء/إيقاف العرض التلقائي
function toggleSlider() {
    const toggleBtn = document.getElementById('toggle-btn');
    if (isPlaying) {
        clearInterval(autoSlideInterval);
        toggleBtn.textContent = 'تشغيل';
    } else {
        autoSlideInterval = setInterval(() => changeSlide(1), 3000);
        toggleBtn.textContent = 'إيقاف';
    }
    isPlaying = !isPlaying;
}

// بدء العرض التلقائي عند تحميل الصفحة
let autoSlideInterval = setInterval(() => changeSlide(1), 3000);

// عرض أول شريحة عند تحميل الصفحة
window.onload = function () {
    showSlides(slideIndex);
};
  
 