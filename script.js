const students = [
    // Replace with your student data, including image URLs
    { id: 1, name: "Adel, Marlo H.", image: "marlo.png", address:"Hillside Drive UEP Zone 3 Catarman Northern Samar", birthday:"September 04, 2003", status:"Single kay Study First", qoute:"Dri ko lat ngani aram kay nanu buhi paak tapus naaro ka motivational quote kay nanu buhi pa ak🤦" },
    { id: 2, name: "Barcial, Cyril John G.", image: "cyril.png", address:"Brgy. Looc Allen Northern Samar", birthday:"October 07, 2001", status:"Taken", qoute:"Code - Eat - Sleep - Repeat"},
    { id: 3, name: "Bilaran, Jan Kevin Nemesis A.", image: "jan.png", address:"Baybay Catarman Northern Samar", birthday:"March 11, 2002", status:"Taken", qoute:"In the process of living, we will face struggles, many of which will cause us to suffer and to experience pain."},
    { id: 4, name: "Cajandab, Alian E.", image: "alian.png", address:"Brgy. Jubasan Allen Northern Samar", birthday:"July 30, 2003", status:"Single kay waray naruyag", qoute:"You can be young without money, but you can’t be old without it." },
    { id: 5, name: "Castillo, Shaena Rose B.", image: "shaena.png", address:"Brgy. Imelda Mondragon Northern Samar", birthday:"April 17, 2002", status:"Taken", qoute:"An nag aantos nakaka tangpos." },
    { id: 6, name: "Cerbito, Christelyn E.", image: "christelyn.png", address:"Brgy. Daganas Catarman Northern Samar ", birthday:"July 07, 2002", status:"Taken", qoute:"Kay may pangarap" },
    { id: 7, name: "Cerbito, Dianacel N.", image: "diana.png", address:"Brgy. Galutan Catarman Northern Samar ", birthday:"September 16, 2002", status:"Taken" , qoute:"Siguro may purpose si God para saak na maupay kaya buhi paak."},
    { id: 8, name: "Cramen, Ma. Ella Mae G.", image: "no.png", address:"", birthday:"", status:"" , qoute:""},
    { id: 9, name: "Domdom, Shumae B.",image: "shumae.png", address:"Zone 2, Poblacion Lope de Vega Northern Samar", birthday:"October 13, 2003", status:"Single kay waray naruyag.", qoute:"Dire kopa nakikita ak mga asawa." },
    { id: 10, name: "Fernandez, Abegail C.", image: "no.png", address:"", birthday:"", status:"", qoute:"" },
    { id: 11, name: "Floralde, Shiela I.", image: "floralde.png", address:"San Isidro Northern Samar", birthday:"January 25, 2000", status:"Taken", qoute:"Trust the process 😅" },
    { id: 12, name: "Larisma, Mark Angel N.", image: "angel.png", address:"Brgy. Talisay Catarman Northern Samar", birthday:"May 30, 2003", status:"Taken" , qoute:"Mag pa mekus mekus araw araw."},
    { id: 13, name: "Macaldo, Jhon D.", image: "jhon.png", address:"Brgy. Bangkerohan Catarman Northern Samar", birthday:"January 01, 2001", status:"Single kay Study First" , qoute:"Padayon bisan kapoy na."},
    { id: 14, name: "Magdaraog, Marife S.", image: "marife.png", address:"Rizal St. Brgy 3 Capul Northern Samar", birthday:"December 09, 2002", status:"Single kay Study First" , qoute:"May pangarap pa sa buhay."},
    { id: 15, name: "Montaño, Edizza T.", image: "ediza.png", address:"Brgy. Bugko Mondragon Northern Samar ", birthday:"July 15, 2003", status:"Single kay Study First", qoute:"Never give up. (jejemon)" },
    { id: 16, name: "Navera, Kenneth John C.", image: "ken.png", address:"Sitio Bagacay, BRGY 5. Capul Northern Samar", birthday:"January 13, 2001", status:"Single kay Study First", qoute:"Laban lang para sa family " },
    { id: 17, name: "Perito, Kirk Chayagnne F.", image: "no.png", address:"", birthday:"", status:"" , qoute:""},
    { id: 18, name: "Quitorio, Adielyn P.", image: "no.png", address:"", birthday:"", status:"" , qoute:""},
    { id: 19, name: "Rubenecia, Jana Amor O.", image: "jana.png", address:"Brgy. San Jose, Catubig Northern Samar", birthday:"January 06, 2003", status:"Single kay waray naruyag" , qoute:"God is with us."},
    { id: 20, name: "Salazar, Ma. Claire C.", image: "rube.png", address:"Erenas Victoria Northern Samar ", birthday:"April 14, 2001", status:"Single kay waray naruyag" , qoute:"“Whatever you are, be a good one.” ―Abraham Lincoln"},
    { id: 21, name: "Serrona, Arthur John B.", image: "no.png", address:"", birthday:"", status:"" , qoute:""},
    { id: 22, name: "Tan, Sierva V.", image: "sierva.png", address:"Brgy. Jubasan Allen Northern Samar ", birthday:"July 25, 2003", status:"Taken" , qoute:"Mas natatakot pakong hindi maging successful kisa mamatay"},
    { id: 23, name: "Tapang, Caesar June M.", image: "caesar.png", address:"Brgy. San Juan Bobon Northern Samar", birthday:"June 09, 2002", status:"Single kay Study First" , qoute:"Kase gusto ko maexperience yung mga bagay na di ko pa naeexperience"},
    { id: 24, name: "Tiu, Alfred Thelo N.", image: "alfred.png", address:"Brgy. Salvacion Bobon Northern Samar", birthday:"December 20, 20021", status:"Single kay waray naruyag." , qoute:"Karasa ko."},
    { id: 25, name: "Ultra, Johnsen C.", image: "johnsen.png", address:"H. Jole Jole Pob. Las Navas Northern Samar", birthday:"May 17, 2002", status:"" , qoute:"Throghout Heaven and Earth, I alone am the Honored One."},
    { id: 26, name: "Ventuso, Razel Ann", image: "razel.png", address:"Brgy. Macarthur Lavezares Northern Samar", birthday:"January 22, 2002", status:"Taken" , qoute:"Masamang damo ak kaya maiha ak kinabuhi."},
    { id: 27, name: "Ymata, Franky D.", image: "franky.png", address:"Brgy. Maravilla, Lavezares Northern Samar", birthday:"September 07, 2003", status:"Single kay Study First" , qoute:"Kay humihinga pa naman."},
    { id: 28, name: "Zabala, Jerald E.", image: "jerald.png", address:"Brgy. Magsaysay Las Navas Northern Samar", birthday:"August 10, 2001", status:"Single at humihinga" , qoute:"Thinking like a semi-colon to someone's code."},
    // Add more students
];

const studentList = document.getElementById("student-list");
const studentInfo = document.getElementById("student-info");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Display student profiles
function displayStudents() {
    studentList.innerHTML = "";
    students.forEach((student) => {
        const listItem = document.createElement("li");
        listItem.textContent = student.name;
        listItem.addEventListener("click", () => displayStudentInfo(student));
        studentList.appendChild(listItem);
    });
}

// Display student information
function displayStudentInfo(student) {
    studentInfo.innerHTML = `
        <h2>${student.name}</h2>
        <img src="${student.image}" alt="${student.name}'s image" />
        <p><b>Address:</b><br> ${student.address}</p>
        <p><b>Birthday:</b><br> ${student.birthday}</p>
        <p><b>Status:</b><br> ${student.status}</p>
        <p><b>Motivational Qoute why you're still Alive:</b><br> <i>${student.qoute}</i></p>
    `;
}

// Search for a student
function searchStudent() {
    const query = searchInput.value.toLowerCase();
    const result = students.find((student) => student.name.toLowerCase().includes(query));
    if (result) {
        displayStudentInfo(result);
    } else {
        studentInfo.innerHTML = "Student not found.";
    }
}

searchButton.addEventListener("click", searchStudent);

// Initial display of student profiles
displayStudents();
