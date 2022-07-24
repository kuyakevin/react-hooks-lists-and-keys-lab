import React from "react"; 

function ProjectItem({name, about, technologies}) {
  const technologiesList = technologies.map((technologies) => (
    <span key={technologies}>{technologies}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesList}
      </div>
    </div>
  );
}

export default ProjectItem;
