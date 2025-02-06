
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
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('a[href="#products"]').addEventListener("click", function(event) {
        event.preventDefault(); // منع التمرير الافتراضي
        let target = document.querySelector("#products");
        let offset = 70; // تغيير المسافة حسب الحاجة
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
    });
});



  
 