document.addEventListener('DOMContentLoaded', () => {
    const seatNumberInput = document.getElementById('seat-number');
    const showResultBtn = document.getElementById('show-result-btn');
    const errorMessage = document.getElementById('error-message');
    const resultSection = document.getElementById('result-section');
    const searchSection = document.getElementById('search-section');

    // تم حذف البيانات الوهمية للطلاب لأنها لن تُستخدم في هذه الحالة
    
    showResultBtn.addEventListener('click', () => {
        const seatNumber = seatNumberInput.value.trim();
        
        // إخفاء الأقسام الأخرى وعرض رسالة الخطأ
        resultSection.classList.add('hidden');
        searchSection.classList.remove('hidden');

        if (seatNumber === '') {
            errorMessage.textContent = 'الرجاء إدخال رقم الجلوس.';
            errorMessage.classList.remove('hidden');
            return;
        }

        // عرض رسالة "محظور IP" لأي رقم جلوس يتم إدخاله
        errorMessage.textContent = 'محظور IP';
        errorMessage.classList.remove('hidden');
    });
});