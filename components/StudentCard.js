import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { StudentContext, TagContext } from "../contexts/StudentContext";
const StudentCard = ({
  firstName,
  lastName,
  company,
  city,
  pic,
  skill,
  id,
  grades,
  email,
  student,
  tags,
  filteredTags,
}) => {
  const [openGrades, setOpenGrades] = useState(false);
  const [tagName, setTagName] = useState("");
  const [listOfTags, setListOfTags] = useState([]);
  const average = grades.map(Number).reduce((a, b) => a + b) / grades.length;

  const { studentData, setStudentData } = useContext(StudentContext);

  const handleOpenGrades = () => {
    setOpenGrades(!openGrades);
  };

  const handleSubmitTag = (e) => {
    if (e.key === "Enter") {
      tags.push(tagName);
      setListOfTags([...listOfTags, tagName]);
      setTagName("");
    }
  };

  return (
    <div className="flex w-full h-full items-center justify-between flex-row border-b border-1 border-gray-300 py-6 font-Raleway">
      <div className="flex">
        <div className="flex w-32 h-32 rounded-full border-1 border-gray-300 border ml-5">
          <img
            className="flex w-full h-full rounded-full object-contain"
            src={pic}
            alt="Student Avatar"
          />
        </div>
        <div className="flex flex-col ml-5">
          <div>
            <p className="text-4xl font-bold">
              {firstName} {lastName}
            </p>
          </div>
          <div className="ml-4 leading-7">
            <div>
              <p>Email: {email}</p>
            </div>
            <div>
              <p>Company: {company}</p>
            </div>
            <div>
              <p>Skill: {skill}</p>
            </div>{" "}
            <div>
              <p>Average: {average.toFixed(2)}%</p>
            </div>
          </div>
          {openGrades && (
            <div className="ml-4">
              {grades.map((grade, index) => (
                <p key={index}>
                  Test {index + 1}: {grade}%
                </p>
              ))}
            </div>
          )}
          <div className="ml-4">
            <div className="flex flex-row">
              {tags.map((tag, key) => {
                return (
                  <div key={key} className="flex mr-1">
                    <div className="flex bg-gray-400 rounded-md text-white px-2 py-1">
                      {tag}
                    </div>
                  </div>
                );
              })}
            </div>
            <input
              className="outline-none border-b-2 focus:border-b-black duration-300"
              type="text"
              placeholder="Add a tag"
              onChange={(e) => setTagName(e.target.value)}
              value={tagName}
              onKeyDown={handleSubmitTag}
            />
          </div>
        </div>
      </div>
      <div className="flex h-full relative right-10 top-5">
        {openGrades && (
          <RemoveIcon
            fontSize="large"
            color="action"
            className="hover:cursor-pointer"
            onClick={handleOpenGrades}
          />
        )}
        {!openGrades && (
          <AddIcon
            fontSize="large"
            color="action"
            className="hover:cursor-pointer"
            onClick={handleOpenGrades}
          />
        )}
      </div>
    </div>
  );
};

export default StudentCard;
