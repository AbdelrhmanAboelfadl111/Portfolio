let ContainerContent1 = document.querySelector(
    ".skills .container .row .tab-content .tab-pane.frontEnd .row",
  ),
  ContainerContent2 = document.querySelector(
    ".skills .container .row .tab-content .tab-pane.programmingLanguages .row",
  ),
  ContainerContent3 = document.querySelector(
    ".skills .container .row .tab-content .tab-pane.softSkills .row",
  ),
  ContainerContent4 = document.querySelector(
    ".skills .container .row .tab-content .tab-pane.technologiesTools .row",
  );

// Function to animate columns with staggered delay
function animateColumns(container) {
  const columns = container.querySelectorAll(".column");
  columns.forEach((col, index) => {
    col.style.animationDelay = index * 0.15 + "s";
    col.classList.add("animate");
  });
}

frontEndSkills.forEach((skill, index) => {
  ContainerContent1.innerHTML += `
        <div class="col-md-6 col-lg-4 column " data-index="${index}">
                    <div class="item">
                        <div class="box">
                            <img src="img/${skill.img}" loading="lazy" alt="${skill.name}">
                            <div class="textCon">
                                <div class="name">
                                    <h2 class="font1"><span class="me-1">Skill</span> : </h2>
                                    <h3 class="font2"> ${skill.name}</h3>
                                </div>
                                <div class="dis">
                                    <h2 class="font1"><span class="me-1">Level</span> : </h2>
                                    <h3 class="font2"> ${skill.level}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `;
});

// Animate frontEnd columns on load
setTimeout(() => animateColumns(ContainerContent1), 50);

basicLang.forEach((skill, index) => {
  ContainerContent2.innerHTML += `
        <div class="col-md-6 col-lg-4 column " data-index="${index}">
                    <div class="item">
                        <div class="box">
                            <img src="img/${skill.img}" loading="lazy" alt="${skill.name}">
                            <div class="textCon">
                                <div class="name">
                                    <h2 class="font1"><span class="me-1">Skill</span> : </h2>
                                    <h3 class="font2"> ${skill.name}</h3>
                                </div>
                                <div class="dis">
                                    <h2 class="font1"><span class="me-1">Level</span> : </h2>
                                    <h3 class="font2"> ${skill.level}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `;
});

// Animate programming languages columns on load
setTimeout(() => animateColumns(ContainerContent2), 50);

softSkills.forEach((skill, index) => {
  ContainerContent3.innerHTML += `
        <div class="col-md-6 col-lg-4 column " data-index="${index}">
                    <div class="item">
                        <div class="box">
                            <img src="img/${skill.img}" loading="lazy" alt="${skill.name}">
                            <div class="textCon">
                                <div class="name">
                                    <h3 class="font2 mb-0"> ${skill.name}</h3>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
    `;
});

// Animate soft skills columns on load
setTimeout(() => animateColumns(ContainerContent3), 50);

tools.forEach((skill, index) => {
  ContainerContent4.innerHTML += `
        <div class="col-md-6 col-lg-4 column " data-index="${index}">
                    <div class="item">
                        <div class="box">
                            <img src="img/${skill.img}" loading="lazy" alt="${skill.name}">
                            <div class="textCon">
                                <div class="name">
                                <h2 class="font1"><span class="me-1">Skill</span> : </h2>
                                    <h3 class="font2 mb-0"> ${skill.name}</h3>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
    `;
});

// Animate tools columns on load
setTimeout(() => animateColumns(ContainerContent4), 50);

// Animation when switching tabs
document.querySelectorAll('[data-bs-toggle="pill"]').forEach((button) => {
  button.addEventListener("shown.bs.tab", (e) => {
    const tabPane = document.querySelector(
      button.getAttribute("data-bs-target"),
    );
    if (tabPane) {
      // Reset animation
      const columns = tabPane.querySelector(".row").querySelectorAll(".column");
      columns.forEach((col) => col.classList.remove("animate"));

      // Trigger animation
      setTimeout(() => animateColumns(tabPane.querySelector(".row")), 50);
    }
  });
});
