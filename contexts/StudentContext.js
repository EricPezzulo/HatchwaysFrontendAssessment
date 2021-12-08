import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const API_URL = "https://api.hatchways.io/assessment/students";
  const [studentData, setStudentdata] = useState([]);

  // const studentsArr = [...studentData];
  // studentsArr.forEach((elem) => (elem.tags = []));

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(API_URL);
      const data = res?.data?.students;

      data.forEach((elem) => (elem.tags = []));

      setStudentdata(data);
    };
    fetchStudents();
  }, []);
  return (
    <StudentContext.Provider value={{ studentData, setStudentdata }}>
      {children}
    </StudentContext.Provider>
  );
}
