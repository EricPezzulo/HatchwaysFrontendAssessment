import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
}) => {
  const [openGrades, setOpenGrades] = useState(false);

  const average = grades.map(Number).reduce((a, b) => a + b) / grades.length;

  const handleClick = () => {
    setOpenGrades(!openGrades);
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
              <p>Email:{email}</p>
            </div>
            <div>
              <p>Company: {company}</p>
            </div>
            <div>
              <p>Skill: {skill}</p>
            </div>{" "}
            <div>
              <p>
                Average:
                {average.toFixed(2)}%
              </p>
            </div>
          </div>
          {openGrades && (
            <div className="ml-4">
              {grades.map((grade, index) => (
                <p>
                  Test {index + 1}: {grade}%
                </p>
              ))}
            </div>
          )}
        </div>{" "}
      </div>{" "}
      <div className="flex h-full relative right-10 top-5">
        {openGrades && (
          <RemoveIcon
            fontSize="large"
            color="action"
            className="hover:cursor-pointer"
            onClick={handleClick}
          />
        )}
        {!openGrades && (
          <AddIcon
            fontSize="large"
            color="action"
            className="hover:cursor-pointer"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default StudentCard;
