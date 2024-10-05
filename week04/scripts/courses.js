const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [ // Property 
        {
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        },
    ],

    // enrollStudent: function (sectionNum) { // Method
        
    //     // finding the right section. Using Array.findIndex is easy.

    //     const sectionIndex = this.sections.findIndex(
    //         (section) => section.sectionNum == sectionNum
    //     ); // El index será aquel dentro de las sections property en este objeto. Encontraremos el index de la sección cuando el numero de seccion que está almacenado como sectionNum (dentro de la misma) coincida con el número dado.
    
    //     if (sectionIndex >= 0) {
    //       this.sections[sectionIndex].enrolled++;
    //       renderSections(this.sections);
    //     } // Si el numero es mayor de 0, entonces busca la sección con la función constante anterior y sumale uno. Luego actualiza la sección en estas secciones.
    // },

    // dropStudent: function (sectionNum) {
    // // find the right section...Array.findIndex will work here
    // const sectionIndex = this.sections.findIndex(
    //     (section) => section.sectionNum == sectionNum
    // );
    // if (sectionIndex >= 0) {
    //     this.sections[sectionIndex].enrolled--;
    //     renderSections(this.sections);
    // }
    // },

    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          if (add) {
            this.sections[sectionIndex].enrolled++;
          } else {
            this.sections[sectionIndex].enrolled--;
          }
          renderSections(this.sections);
        }
      }


};

// Function to set the name and number of the course in the HTML.

function setCourseInfo(course) { 
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

// Funtion to get section's info organized.

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
}

// Function that will output the sections into the table identified by #sections.

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, true);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);
