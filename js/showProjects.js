let content1 = document.querySelector("#pills-1 .row"),
    content2 = document.querySelector("#pills-2 .row"),
    content3 = document.querySelector("#pills-3 .row"),
    content4 = document.querySelector("#pills-4 .row"),
    content5 = document.querySelector("#pills-5 .row");

// Function to animate columns with staggered delay
function animateProjectColumns(container) {
  const columns = container.querySelectorAll(".columnProject");
  columns.forEach((col, index) => {
    col.style.animationDelay = index * 0.15 + "s";
    col.classList.add("animate");
  });
}

projects1.forEach((project) => {
  content1.innerHTML += `
    <div class="col-md-6 col-lg-4 columnProject">
        <div class="box" onclick="showProjectDetails(${project.id})">
            <img src="img/projects/${project.img}" loading="lazy" class="img-fluid" alt="${project.name}">
            <div class="layOut">
                <div class="title titleBox">
                    <h2 class="font1 text-uppercase"><img class="LogoPro" src="img/backend.gif">${project.name}</h2>
                </div>
                <img class="plusSign" src="img/wired-outline-49-plus-circle-hover-swirl.gif" alt="plus">
            </div>
        </div>
    </div>
    `;
});

// Animate projects1 columns on load
setTimeout(() => animateProjectColumns(content1), 50);

projects2.forEach((project) => {
  content2.innerHTML += `
    <div class="col-md-6 col-lg-4 columnProject">
        <div class="box" onclick="showProjectDetails(${project.id})">
            <img src="img/projects/${project.img}" loading="lazy" class="img-fluid" alt="${project.name}">
            <div class="layOut">
                <div class="title titleBox">
                    <h2 class="font1 text-uppercase"><img class="LogoPro" src="img/backend.gif">${project.name}</h2>
                </div>
                <img class="plusSign" src="img/wired-outline-49-plus-circle-hover-swirl.gif" alt="plus">
            </div>
        </div>
    </div>
    `;
});

// Animate projects2 columns on load
setTimeout(() => animateProjectColumns(content2), 50);

projects3.forEach((project) => {
  content3.innerHTML += `
    <div class="col-md-6 col-lg-4 columnProject">
        <div class="box" onclick="showProjectDetails(${project.id})">
            <img src="img/projects/${project.img}" loading="lazy" class="img-fluid" alt="${project.name}">
            <div class="layOut">
                <div class="title titleBox">
                    <h2 class="font1 text-uppercase"><img class="LogoPro" src="img/backend.gif">${project.name}</h2>
                </div>
                <img class="plusSign" src="img/wired-outline-49-plus-circle-hover-swirl.gif" alt="plus">
            </div>
        </div>
    </div>
    `;
});

// Animate projects3 columns on load
setTimeout(() => animateProjectColumns(content3), 50);

projects4.forEach((project) => {
  content4.innerHTML += `
    <div class="col-md-6 col-lg-4 columnProject">
        <div class="box" onclick="showProjectDetails(${project.id})">
            <img src="img/projects/${project.img}" loading="lazy" class="img-fluid" alt="${project.name}">
            <div class="layOut">
                <div class="title titleBox">
                    <h2 class="font1 text-uppercase"><img class="LogoPro" src="img/backend.gif">${project.name}</h2>
                </div>
                <img class="plusSign" src="img/wired-outline-49-plus-circle-hover-swirl.gif" alt="plus">
            </div>
        </div>
    </div>
    `;
});

// Animate projects4 columns on load
setTimeout(() => animateProjectColumns(content4), 50);


projects5.forEach((project) => {
  content5.innerHTML += `
    <div class="col-md-6 col-lg-4 columnProject">
        <div class="box" onclick="showProjectDetails(${project.id})">
            <img src="img/projects/${project.img}" loading="lazy" class="img-fluid" alt="${project.name}">
            <div class="layOut">
                <div class="title titleBox">
                    <h2 class="font1 text-uppercase"><img class="LogoPro" src="img/backend.gif">${project.name}</h2>
                </div>
                <img class="plusSign" src="img/wired-outline-49-plus-circle-hover-swirl.gif" alt="plus">
            </div>
        </div>
    </div>
    `;
});

// Animate projects5 columns on load
setTimeout(() => animateProjectColumns(content5), 50);
