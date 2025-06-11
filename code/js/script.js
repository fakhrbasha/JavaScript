// function validate(){
//     var regex = /\.c\w*$/;;
//     var correct = document.getElementById('correct');
//     var notC = document.getElementById('notCorrect');

//     var input = document.getElementById('siteName');

//     if(regex.test(input.value) == true){
//         correct.innerHTML = `<i class="fa-solid fa-check position-absolute top-50 end-0 translate-middle-y me-3 text-success"></i>`;
//         notC.innerHTML = ``;
//     }else{
//         notC.innerHTML = `<i class="fa-solid fa-xmark position-absolute top-50 end-0 translate-middle-y me-3 text-danger"></i>`;
//         correct.innerHTML = ``;
//     }
// }

// // <i class="fa-solid fa-check position-absolute top-50 end-0 translate-middle-y me-3 text-success"></i>
// // <i class="fa-solid fa-xmark position-absolute top-50 end-0 translate-middle-y me-3 text-danger"></i>

function handleSubmit() {
    const name = document.getElementById("siteName").value.trim();
    const url = document.getElementById("siteURL").value.trim();

    const nameValid = /^[A-Z][a-z]{2,}$/.test(name); // يبدأ بحرف كابيتال وبعده 2 حروف على الأقل
    const urlValid = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}(\S*)?$/.test(url); // URL بسيط

    if (!nameValid || !urlValid) {
        document.getElementById("errorModal").classList.remove("d-none");
    } else {
        alert("✅ All inputs are valid!");
        // تابع حفظ البيانات هنا
    }
}

function closeModal() {
    document.getElementById("errorModal").classList.add("d-none");
}