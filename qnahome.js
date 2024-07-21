// Function to render QnA items
function renderQnA() {
    // Retrieve QnA data from localStorage
    const qnaData = JSON.parse(localStorage.getItem('qnaData')) || [];
    const qnaList = document.querySelector('.qna-list');
    qnaList.innerHTML = ''; // Clear any existing content

    // Create and append each QnA item to the list
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
document.addEventListener('DOMContentLoaded', renderQnA);
