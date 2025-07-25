document.addEventListener('DOMContentLoaded', () => {
    const seatNumberInput = document.getElementById('seat-number');
    const systemSelect = document.getElementById('system-select');
    const showResultBtn = document.getElementById('show-result-btn');
    const searchSection = document.getElementById('search-section');
    const resultSection = document.getElementById('result-section');

    const displaySeatNumber = document.getElementById('display-seat-number');
    const displayStudentName = document.getElementById('display-student-name');
    const gradeArabic = document.getElementById('grade-arabic');
    const gradeForeign1 = document.getElementById('grade-foreign1');
    const gradeHistory = document.getElementById('grade-history');
    const gradeGeography = document.getElementById('grade-geography');
    const gradeStatistics = document.getElementById('grade-statistics');
    const gradeTotal = document.getElementById('grade-total');
    const gradeReligious = document.getElementById('grade-religious');
    const gradeNational = document.getElementById('grade-national');
    const gradeForeign2 = document.getElementById('grade-foreign2');

    // Dummy data for students
    const studentsData = {
        '1327336': {
            name: 'منه الله زكريا فاروق محمود محمد',
            system: 'modern',
            grades: {
                // Adjusting main subject grades so their total equals 192 (60% of 320)
                // Arabic (out of 80), others (out of 60)
                arabic: 55,    // Example: 55/80
                foreign1: 35, // Example: 35/60
                history: 35,   // Example: 35/60
                geography: 35, // Example: 35/60
                statistics: 32, // Example: 32/60
                               // Sum: 55 + 35 + 35 + 35 + 32 = 192 (Exactly 60%)

                // Non-added subjects - kept as in the provided image (13, 13, 13)
                religious: 13,
                national: 13,
                foreign2: 13
            }
        },
    };

    showResultBtn.addEventListener('click', () => {
        const seatNumber = seatNumberInput.value.trim();
        const selectedSystem = systemSelect.value;

        if (seatNumber === '') {
            alert('الرجاء إدخال رقم الجلوس.');
            return;
        }

        const student = studentsData[seatNumber];

        if (student && student.system === selectedSystem) {
            // Calculate total grade for main subjects
            const mainSubjectsTotal = student.grades.arabic + student.grades.foreign1 +
                                      student.grades.history + student.grades.geography +
                                      student.grades.statistics;

            displaySeatNumber.textContent = seatNumber;
            displayStudentName.textContent = student.name;
            gradeArabic.textContent = student.grades.arabic;
            gradeForeign1.textContent = student.grades.foreign1;
            gradeHistory.textContent = student.grades.history;
            gradeGeography.textContent = student.grades.geography;
            gradeStatistics.textContent = student.grades.statistics;
            gradeTotal.textContent = mainSubjectsTotal; // Display calculated total

            gradeReligious.textContent = student.grades.religious;
            gradeNational.textContent = student.grades.national;
            gradeForeign2.textContent = student.grades.foreign2;

            searchSection.classList.add('hidden');
            resultSection.classList.remove('hidden');
        } else {
            alert('عذراً، لم يتم العثور على نتيجة لهذا الرقم أو النظام.');
            // Optionally, clear previous results if any
            resultSection.classList.add('hidden');
            searchSection.classList.remove('hidden');
        }
    });

    // Optional: Back button or link to return to search (not explicitly in your screenshots, but good UX)
    // You could add a button in result-section and handle its click event to show searchSection again.
});