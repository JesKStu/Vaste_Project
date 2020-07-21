// Main Page
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

searchBox.addEventListener("keyup", function(e) {
    filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};

// My Orders Page
function show_active() {
    document.getElementById("active_block").style.display = 'block';
    document.getElementById("completed_block").style.display = 'none';
    document.getElementById("active_btn").style.color = 'black';
    document.getElementById("completed_btn").style.color = 'gray';
    document.getElementById("active_btn").style.fontWeight = 'bold';
    document.getElementById("completed_btn").style.fontWeight = 'normal';
    document.getElementById("active_btn").style.borderBottom = '2px solid #31A13C';

}

function show_completed() {
    document.getElementById("active_block").style.display = 'none';
    document.getElementById("completed_block").style.display = 'block';
    document.getElementById("active_btn").style.color = 'gray';
    document.getElementById("completed_btn").style.color = 'black';
    document.getElementById("active_btn").style.fontWeight = 'normal';
    document.getElementById("completed_btn").style.fontWeight = 'bold';
    document.getElementById("active_btn").style.borderBottom = 'none';

}

// Log in Page
function eye() {
    var x = document.getElementById("myInput");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";

    }
}

function show_login() {
    document.getElementById("login_page").style.display = 'block';
    document.getElementById("create_an_account").style.display = 'none';
    document.getElementById("login_button").style.color = 'black';
    document.getElementById("create_button").style.color = 'gray';
    document.getElementById("login_button").style.fontWeight = 'bold';
    document.getElementById("create_button").style.fontWeight = 'normal';
}

function show_create() {
    document.getElementById("login_page").style.display = 'none';
    document.getElementById("create_an_account").style.display = 'block';
    document.getElementById("login_button").style.color = 'gray';
    document.getElementById("create_button").style.color = 'black';
    document.getElementById("login_button").style.fontWeight = 'normal';
    document.getElementById("create_button").style.fontWeight = 'bold';
}
 

function show_filters() {
  let x = document.getElementById("select-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
