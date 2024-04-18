const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

window.addEventListener("DOMContentLoaded", () => {
  const dataProject = JSON.parse(sessionStorage.getItem("dataProject"));
  const selectedProject = dataProject.find((project) => project.id == id);

  const container = document.querySelector(".container-detail-project");

  container.innerHTML = `
   <h1>${selectedProject.projectName}</h1>
      <div class="detail-header">
        <div class="left-header">
          <img
            src="${selectedProject.imgSrc}"
            alt="${selectedProject.projectName}"
          />
        </div>

        <div class="right-header">
          <div class="duration">
            <h2>Duration</h2>
            <p>
              <i class="fa-solid fa-calendar-days"></i>
              ${selectedProject.startDateFormat} - ${selectedProject.endDateFormat}
            </p>
            <p><i class="fa-solid fa-clock"></i> ${selectedProject.duration}</p>
          </div>

          <div class="technology">
            <h2>Technologies</h2>

          </div>
        </div>
      </div>
      <div class="detail-body">

        <p>
          ${selectedProject.description}
        </p>
      </div>
  `;

  selectedProject.technologies.forEach((tech) => {
    const technology = document.querySelector(".technology");

    const p = document.createElement("p");
    const icon = document.createElement("i");
    icon.textContent = tech;
    icon.classList.add("fa-brands");
    icon.classList.add(`fa-${tech}`);
    p.appendChild(icon);

    technology.appendChild(p);
  });
});
