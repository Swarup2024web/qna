// Example static data
const qnaData = [
    {
        id: 1,
        subject: 'Math',
        class: '1',
        question: 'What is 2 + 2?',
        answer: '2 + 2 is 4.'
    },
    {
        id: 2,
        subject: 'Science',
        class: '2',
        question: 'What is the chemical symbol for water?',
        answer: 'The chemical symbol for water is H2O.'
    }
    // Add more data as needed
];

// Function to render QnA items
function renderQnA() {
    const qnaList = document.querySelector('.qna-list');
    qnaList.innerHTML = '';

    qnaData.forEach(qna => {
        const qnaItem = document.createElement('div');
        qnaItem.className = 'qna-item';

        qnaItem.innerHTML = `
            <h3>Question ${qna.id}: ${qna.question}</h3>
            <p><strong>Answer:</strong> ${qna.answer}</p>
        `;

        qnaList.appendChild(qnaItem);
    });
}

// Initial call to render QnA items
renderQnA();
