const input = document.querySelector('#favchap');
const buttonAdd = document.querySelector('button'); // This way is for calling a tag (the first one of the type) altogether.
const list = document.querySelector('#list'); // Searching by ID means using '#'.

buttonAdd.addEventListener('click', function() {

    AddFavChapter(input.value.trim());
});

document.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        AddFavChapter(input.value.trim());
        event.preventDefault();
        buttonAdd.click();
    }
});

function AddFavChapter(value) {

    if (value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function() {

            list.removeChild(li)
            input.focus();
        });
    }
};
