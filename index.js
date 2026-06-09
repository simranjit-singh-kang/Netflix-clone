let questions=document.querySelectorAll(".question");
let descriptions=document.querySelectorAll(".description");
questions.forEach(question => {
    question.addEventListener('click',()=>{
        descriptions.forEach(description => {
            if (description !== question.nextElementSibling) {
                description.classList.remove("active");
            }
        });
        question.nextElementSibling.classList.toggle("active");
    })
    
});