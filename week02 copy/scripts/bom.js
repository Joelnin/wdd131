const input = document.querySelector('#favchap');
const buttonAdd = document.querySelector('button'); // This way is for calling a tag (the first one of the type) altogether.
const list = document.querySelector('#list'); // Searching by ID means using '#'.

// buttonAdd.addEventListener('click', function() {
//     AddFavChapter(input.value.trim());
// });

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // AddFavChapter(input.value.trim());
        event.preventDefault();
        buttonAdd.click();
    }
});

// function AddFavChapter(value) {

//     if (value !== '') {
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');
//         li.textContent = input.value;
//         deleteButton.textContent = '❌';
//         li.append(deleteButton);
//         list.append(li);
//         input.value = '';
//         input.focus();

//         deleteButton.addEventListener('click', function() {

//             list.removeChild(li)
//             input.focus();
//         });
//     }
// };

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

buttonAdd.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
});


function displayList(item) {
    let li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMChapList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}



