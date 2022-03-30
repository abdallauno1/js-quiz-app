const quizData = [{
        question: 'How old is Younes?',
        a: '4',
        b: '5',
        c: '6',
        d: '7',
        correctAnswer: 'b'
    },
    {
        question: 'How old is Lara?',
        a: '4',
        b: '5',
        c: '3',
        d: '6',
        correctAnswer: 'a'

    },
    {
        question: 'what is the best programming language?',
        a: 'C#',
        b: 'Java',
        c: 'Python',
        d: 'JavaScript',
        correctAnswer: 'd'

    },
    {
        question: 'What is default port for Jenkins?',
        a: '8085',
        b: '8808',
        c: '8088',
        d: '8080',
        correctAnswer: 'd'

    }

]

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");

const quiz = document.getElementById("quiz");

const submiBtn = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;
let answerEl = undefined;

loadQuiz();


function loadQuiz() {
    deselectAnswers();
    questionEl.innerHTML = quizData[currentQuestion].question;

    a_text.innerHTML = quizData[currentQuestion].a;
    b_text.innerHTML = quizData[currentQuestion].b;
    c_text.innerHTML = quizData[currentQuestion].c;
    d_text.innerHTML = quizData[currentQuestion].d;
}

function getSelected() {


    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
        // console.log(answer.checked);
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}


submiBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correctAnswer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            // TODO show result
            quiz.innerHTML = `<h2>You answerd correctly at
            ${score}/${quizData.length} questions.</h2>
            <button  onclick="location.reload()">Reload</button>
            `;
        }

    }


});