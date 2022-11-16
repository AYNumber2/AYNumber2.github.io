let name = "";

function feedback() {
    let feedbackParagraph = document.getElementById("feedback");

    fname = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedbackText = document.getElementById("feedback");

    alert("Your feedback has been received. Thanks " + fname + "!")
}