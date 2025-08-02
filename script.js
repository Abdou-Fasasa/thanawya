document.addEventListener('DOMContentLoaded', () => {
    const seatNumberInput = document.getElementById('seat-number');
    const systemSelect = document.getElementById('system-select');
    const showResultBtn = document.getElementById('show-result-btn');
    const searchSection = document.getElementById('search-section');
    const resultSection = document.getElementById('result-section');
    const errorMessage = document.getElementById('error-message');

    const displaySeatNumber = document.getElementById('display-seat-number');
    const displayStudentName = document.getElementById('display-student-name');
    
    // عناصر عرض الدرجات للمواد العلمية
    const gradeArabic = document.getElementById('grade-arabic');
    const gradeForeign1 = document.getElementById('grade-foreign1');
    const gradeChemistry = document.getElementById('grade-chemistry');
    const gradeBiology = document.getElementById('grade-biology');
    const gradePhysics = document.getElementById('grade-physics');
    
    // عناصر عرض الدرجات للمواد التي لا تضاف للمجموع
    const gradeReligious = document.getElementById('grade-religious');
    const gradeNational = document.getElementById('grade-national');
    const gradeForeign2 = document.getElementById('grade-foreign2');
    
    const gradeTotal = document.getElementById('grade-total');

    // Dummy data for students
    const studentsData = {
        '1093742': {
            name: 'تقوى عبدالعظيم عبدالفتاح عبداللطيف',
            system: 'modern',
            grades: {
                // المواد التي تضاف للمجموع الكلي
                arabic: 72,
                foreign1: 55,
                chemistry: 45,
                biology: 42,
                physics: 42,

                // المواد التي لا تضاف للمجموع الكلي
                religious: 21,
                national: 14,
                foreign2: 13
            }
        },
    };

    showResultBtn.addEventListener('click', () => {
        const seatNumber = seatNumberInput.value.trim();
        const selectedSystem = systemSelect.value;
        
        // إخفاء رسالة الخطأ قبل البحث الجديد
        errorMessage.classList.add('hidden');

        if (seatNumber === '') {
            errorMessage.textContent = 'الرجاء إدخال رقم الجلوس.';
            errorMessage.classList.remove('hidden');
            return;
        }

        const student = studentsData[seatNumber];

        if (student && student.system === selectedSystem) {
            // حساب المجموع الكلي للمواد الرئيسية فقط
            const mainSubjectsTotal = student.grades.arabic + student.grades.foreign1 +
                                     student.grades.chemistry + student.grades.biology +
                                     student.grades.physics;

            displaySeatNumber.textContent = seatNumber;
            displayStudentName.textContent = student.name;
            
            // عرض درجات المواد العلمية
            gradeArabic.textContent = student.grades.arabic;
            gradeForeign1.textContent = student.grades.foreign1; 
            gradeChemistry.textContent = student.grades.chemistry;
            gradeBiology.textContent = student.grades.biology;
            gradePhysics.textContent = student.grades.physics;
            
            gradeTotal.textContent = mainSubjectsTotal; // عرض المجموع الكلي

            // عرض درجات المواد التي لا تضاف للمجموع
            gradeReligious.textContent = student.grades.religious;
            gradeNational.textContent = student.grades.national;
            gradeForeign2.textContent = student.grades.foreign2;

            searchSection.classList.add('hidden');
            resultSection.classList.remove('hidden');
        } else {
            errorMessage.textContent = 'رقم الجلوس او اسم الطالب غير صحيح.';
            errorMessage.classList.remove('hidden');
            resultSection.classList.add('hidden');
            searchSection.classList.remove('hidden');
        }
    });
});