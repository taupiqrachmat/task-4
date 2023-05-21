function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("project").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("upload").value;

  if (projectName === "") {
      return alert("Please input your project name or title");
  } else if (startDate === "") {
      return alert("When did you start this project?");
  } else if (endDate === "") {
      return alert("When did you finish this project?");
  } else if (description === "") {
      return alert("Please describe this project");
  } else if (image === "") {
      return alert("Please attach an image of your project");
  }

  const jsIcon = '<i class="fa-brands fa-square-js fa-xl fa-fw"></i>';
  const pythonIcon = '<i class="fa-brands fa-python fa-xl fa-fw"></i>';
  const phpIcon = '<i class="fa-brands fa-php fa-xl fa-fw"></i>';
  const javaIcon = '<i class="fa-brands fa-java fa-xl fa-fw"></i>';

  let jsIconDecide = document.getElementById("input-check-box-js").checked ? jsIcon : "";
  let pythonIconDecide = document.getElementById("input-check-box-py").checked ? pythonIcon : "";
  let phpIconDecide = document.getElementById("input-check-box-php").checked ? phpIcon : "";
  let javaIconDecide = document.getElementById("input-check-box-java").checked ? javaIcon : "";

  image = URL.createObjectURL(document.getElementById("upload").files[0]);
  console.log(image);

  let projectPreviewCard = {
      projectName,
      startDate,
      endDate,
      description,
      jsIconDecide,
      pythonIconDecide,
      phpIconDecide,
      javaIconDecide,
      image,
  };

  projectData.push(projectPreviewCard);
  console.log(projectData);

  renderProjectPreviewCards();
}

function renderProjectPreviewCards() {
  document.getElementById("wrap-up-the-cards").innerHTML = "";

  for (let index = 0; index < projectData.length; index++) {
      document.getElementById("wrap-up-the-cards").innerHTML += `
      <div class="project-preview-card">
          <img src="${projectData[index].image}" alt="Smartphone"/>
          <a href="#">
              <h4>${projectData[index].projectName}</h4>
          </a>
          <p class="duration">${projectData[index].startDate} - ${projectData[index].endDate}</p>
          <p class="description">${projectData[index].description}</p>
          <div class="tech-icons">
              ${projectData[index].jsIconDecide}
              ${projectData[index].pythonIconDecide}
              ${projectData[index].phpIconDecide}
              ${projectData[index].javaIconDecide}
          </div>
          <div class="card-buttons">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
          </div>
      </div>
      `;
  }
}
