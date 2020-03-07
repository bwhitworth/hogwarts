import './studentList.scss';
import utils from '../../helpers/utils';
import houseData from '../../helpers/data/houseData';
import studentCard from '../studentCard/studentCard';

const createStudentList = (students) => {
  const houses = houseData.getHouses();
  let domString = '<ul class="student-list">';
  students.forEach((student) => {
    const studentHouse = houses.find((x) => x.id === student.houseId);
    domString += studentCard.createStudentCard(student, studentHouse);
  });
  domString += '</ul>';
  utils.printToDom('student-container', domString);
};

export default { createStudentList };
