window.addEventListener("DOMContentLoaded", () => {
  listProject();
});
const dataProject = JSON.parse(sessionStorage.getItem("dataProject")) || [];

const addProject = (event) => {
  event.preventDefault();

  let projectName = document.getElementById("project-name").value;
  !projectName && alert("Please Enter Your Project Name");

  let startDate = document.getElementById("start_date").value;
  !startDate && alert("Please Enter Your Start Date");

  let endDate = document.getElementById("end_date").value;
  !endDate && alert("Please Enter Your End Date");

  let description = document.getElementById("description").value;
  !description && alert("Please Enter Your Description");

  let technology = document.querySelectorAll("[type=checkbox]");
  let technologies = [];
  for (const tech of technology) {
    if (tech.checked) {
      technologies.push(tech.value);
    }
  }
  technologies.length == 0 && alert("Please Select Your Technology");

  let image = document.getElementById("file").files[0];
  !image && alert("Please Upload Your Image");
  let imgSrc = URL.createObjectURL(image);

  const startDateFormat = new Date(startDate).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const endDateFormat = new Date(endDate).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (startDate > endDate) {
    return alert("Start Date cannot be greater than End Date");
  }

  const timeDiff = Date.parse(endDate) - Date.parse(startDate);
  const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  const diffMonths = Math.floor(diffDays / 30.4167);
  const diffYears = Math.floor(diffMonths / 12);

  let duration;

  if (diffYears > 0) {
    duration = `${diffYears} Years`;
  } else if (diffMonths > 0) {
    duration = `${diffMonths} Months`;
  } else {
    duration = `${diffDays} Days`;
  }

  dataProject.push({
    id: dataProject.length + 1,
    startDateFormat,
    endDateFormat,
    projectName,
    duration,
    description,
    technologies,
    imgSrc,
  });

  sessionStorage.setItem("dataProject", JSON.stringify(dataProject));

  listProject();
};

const listProject = () => {
  let projectList = document.querySelector(".card-project");
  projectList.innerHTML = "";

  if (dataProject.length === 0) {
    projectList.innerHTML = `<p style="font-style: italic; margin-bottom: 3rem">You don't have any project yet.</p>`;
  }

  dataProject.forEach((project) => {
    const anchor = document.createElement("a");
    anchor.href = `detail-project.html?id=${project.id}`;

    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    const img = document.createElement("img");
    img.src = project.imgSrc;
    cardHeader.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const h1 = document.createElement("h1");
    h1.textContent = project.projectName;

    const p = document.createElement("p");
    p.textContent = `Duration : ${project.duration}`;

    const p2 = document.createElement("p");
    p2.textContent = project.description;

    const iconList = document.createElement("div");
    iconList.classList.add("icon");

    project.technologies.forEach((tech) => {
      const icon = document.createElement("i");
      icon.classList.add("fa-brands");
      icon.classList.add(`fa-${tech}`);
      iconList.appendChild(icon);
    });
    cardBody.appendChild(h1);
    cardBody.appendChild(p);
    cardBody.appendChild(p2);
    cardBody.appendChild(iconList);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";

    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";

    cardFooter.appendChild(buttonEdit);
    cardFooter.appendChild(buttonDelete);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    projectList.appendChild(anchor);
    anchor.appendChild(card);
  });
};
