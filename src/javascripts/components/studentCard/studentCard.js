import './studentCard.scss';

const createStudentCard = (student, house) => {
  let domString = `<li class="student-${house.name.toLowerCase()}">`;
  domString += '<div class="img-holder">';
  domString += `  <img src="${student.picture}" alt=""/>`;
  domString += '</div>';
  domString += `<h2>${student.name}`;
  domString += '</li>';
  return domString;
};

export default { createStudentCard };
