function showProjectDetails(id) {
    document.getElementById("projectDetails").classList.add("active");
    let project = [...projectsDetails].find((project) => {
        return project.id == id;
    });
    let projectLanguages = project.languages
        .map((lang) => `<li class="${lang.toLowerCase()}">${lang}</li>`)
        .join("");
    let popUpContent = document.querySelector("#projectDetails .pop-up-box");
    popUpContent.innerHTML = `

            <div class="close" onclick="hideProjectDetails()">
                <img src="img/alphabet.png"  class="btnExit">
            </div>
            <div class="title">
                <h2 class="font1 mb-0">${project.name}</h2>
            </div>
            <div class="description">
                <h4 class="font1 mb-0">${project.description}</h4>
            </div>
            <div class="languages">
                <ul>
                    ${projectLanguages}
                </ul>
            </div>
            <div class="info">
                <div class="type">
                    <h5>Category</h5>
                    <h4>${project.cat}</h4>
                </div>
                <div class="status">
                    <h5>Status</h5>
                    <h4>Live ✦</h4>
                </div>
                <div class="year">
                    <h5>Year</h5>
                    <h4>${project.year}</h4>
                </div>
                <div class="type">
                    <h5>Type</h5>
                    <h4>${project.type}</h4>
                </div>
            </div>
            <div class="links  d-flex justify-content-center align-items-center">
                <div class="url">
                <a href="${project.url}" target="_blank">
                    <button class="font2 btnDecorated">
                        <img src="img/hyperlink.png" alt="hyperlink" loading="lazy">
                    View Live Demo
                    </button>
                </a>
            </div>
            <div class="urlGitHub">
                <a href="${project.urlGitHub}" target="_blank">
                    <button class="font2 btnDecorated">
                        <img src="img/github-logo.png" alt="GitHub" loading="lazy">
                     GitHub
                    </button>
                </a>
            </div>
            </div>

    `;
};







function hideProjectDetails() {
    document.getElementById("projectDetails").classList.remove("active");
}
