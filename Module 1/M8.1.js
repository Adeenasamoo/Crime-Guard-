document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var feedback = document.getElementById('feedbackInput').value;
    alert('Feedback submitted: ' + feedback);
    // Here you can add code to send the feedback to a server or process it further
});

