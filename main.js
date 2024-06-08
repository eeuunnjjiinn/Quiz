const quizQuestions = [
    { question: "문제 1", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
    { question: "문제 2", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
    { question: "문제 3", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
    { question: "문제 4", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
    { question: "문제 5", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
    { question: "문제 6", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
    { question: "문제 7", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
    { question: "문제 8", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
    { question: "문제 9", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
    { question: "문제 10", options: ["보기1", "보기2", "보기3", "보기4"], answer: 3 },
];

function getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function showQuestion(index) {
    const questionContainer = document.getElementById('quiz-container');
    questionContainer.innerHTML = '';

    if (index < selectedQuestions.length) {
        const question = selectedQuestions[index];
        const newQuiz = document.createElement('div');
        newQuiz.innerHTML = `
            <p>${question.question}</p>
            ${question.options.map((option, optionIndex) => `
                <input type="radio" id="q${index}o${optionIndex}" name="question${index}" value="${optionIndex}">
                <label for="q${index}o${optionIndex}">${option}</label><br>
            `).join('')}
            <br><br>
            <button id="next" onclick="submitAnswer()">Next</button>
        `;
        questionContainer.appendChild(newQuiz);
    } else {
        questionContainer.innerHTML = `
            <p>퀴즈 완료! 당신의 점수는 ${score}점 입니다.</p>
            <button onclick="restartQuiz()">퀴즈 다시풀기</button>
        `;
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === selectedQuestions[currentQuestionIndex].answer) {
            score += 20;
        }
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        alert('답을 선택하세요!');
    }
}

function startQuiz() {
    selectedQuestions = getRandomQuestions(quizQuestions, 5);
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionIndex);
}

function restartQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '<button id="start-quiz" onclick="startQuiz()">start</button>';
}

document.addEventListener('DOMContentLoaded', () => {
    restartQuiz();
});