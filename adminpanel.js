document.getElementById('addQnAForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const subject = document.getElementById('subject').value;
    const className = document.getElementById('class').value;
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    
    const qnaData = JSON.parse(localStorage.getItem('qnaData')) || [];
    
    const newQnA = {
        id: qnaData.length + 1,
        subject: subject,
        class: className,
        question: question,
        answer: answer
    };
    
    qnaData.push(newQnA);
    localStorage.setItem('qnaData', JSON.stringify(qnaData));
    
    // Add QnA to table
    const table = document.getElementById('qnaTable').getElementsByTagName('tbody')[0];
    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);
    
    row.insertCell(0).textContent = rowCount + 1;
    row.insertCell(1).textContent = question;
    row.insertCell(2).textContent = answer;
    
    this.reset();
});
