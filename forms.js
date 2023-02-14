// Создай форму и отработай все события и методы из этого урока
// добавь к текстовым полям формы валидацию заполнения полей и счётчик символов
// запретить вставку текста в обьект textarea этой формы

const mainForm = document.forms.main;
console.log(mainForm.elements);

const mainFormInput = mainForm.nameInput;
console.log(mainFormInput);
console.log(mainFormInput.form);

const mainFormTwo = document.forms.mainTwo;
const mainFormRadio = mainFormTwo.radioButtonsOne;
console.log(mainFormRadio);

const mainFormTextarea = mainForm.nameTextarea;
console.log(mainFormTextarea.value);
console.log(mainFormInput.value);

mainFormTextarea.value = "";
mainFormInput.value = "";

const mainFormRadioButton = mainFormTwo.radioButtonsOne;
const mainFormCheckBox = mainFormTwo.nameCheck;
const mainFormFile = mainFormTwo.nameFile;

console.log(mainFormRadioButton[0].value);
console.log(mainFormRadioButton[1].value);
console.log(mainFormRadioButton[0].checked);
console.log(mainFormRadioButton[1].checked);

console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);

console.log(mainFormFile.value);

mainFormRadioButton[1].checked = "true";

mainFormCheckBox.value = "save";
mainFormCheckBox.checked = "true";

mainFormFile.value = ""; // Очищаем выбранный файл

const mainFormSelect = mainFormTwo.nameSelect;
console.log(mainFormSelect.options);
mainFormSelect.options[1].selected = true; // Выбрать конкретный options
// mainFormSelect.selectedIndex = 2;
// mainFormSelect.value = 3;

const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);

const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);

const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);

let newOptions = new Option("Four", "4", true, true);  // текст, № value, выбран/не выбран
mainFormSelect.append(newOptions);

// Событие focus и blur

const mainFormInputPlaceholder = mainFormInput.placeholder;

mainFormInput.addEventListener("focus", function (e) {
    mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
    mainFormInput.placeholder = mainFormInputPlaceholder;
});

mainFormInput.focus();
setTimeout(() => {
    mainFormInput.blur();
}, 3000);

mainFormInput.addEventListener("copy", function (e) {
    console.log("Копируем");
});
mainFormInput.addEventListener("paste", function (e) {
    console.log("Вставляем");
});
mainFormInput.addEventListener("cut", function (e) {
    console.log("Вырезаем");
});
// Остановка действия
// mainFormInput.addEventListener("paste", function (e) {
//     console.log("Нельзя вставить");
//     e.preventDefault(); // <----------
// });

// Отправление формы
mainForm.addEventListener("submit", function (e) {
    console.log("Форма отправляется...");
    if (!mainFormInput.value) {
        console.log("Поле nameInput не заполнено");
        e.preventDefault();
    }
});
// Проверка на корректность данных
mainForm.addEventListener("submit", function (e) {
    if (emailTest(mainFormInput)) {
        mainFormInput.insertAdjacentHTML(
            "afterend",
            `<div class="main-form_error" id="mainFormError">
                Введите email
            </div>`,
        );
        e.preventDefault();
    };
});

// const mainFormInputError = document.getElementsByClassName("main-form_error");

mainFormInput.addEventListener("focus", function (e) {
    // if(mainFormInputError) {
    //     mainFormInputError.remove();
    // };
    if(document.getElementById("mainFormError")) {
        document.getElementById("mainFormError").remove();
    };
});

// Функция теста email
function emailTest(input) {
    return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(input.value);
};

// Выводим картинку после выбора 
mainFormFile.addEventListener("change", function (e) {
    let selectedFile = mainFormFile.files[0];
    let fileUrl = URL.createObjectURL(selectedFile);
    mainFormFile.parentElement.insertAdjacentHTML(
        "beforeend",
        `<div clas="main-form_image">
            <img alt="" title="${selectedFile.name}" src="${fileUrl}">
        </div>`
    );
});
