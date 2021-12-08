import Head from "next/head";
import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import axios from "axios";

export default function Home() {
  const API_URL = "https://api.hatchways.io/assessment/students";
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(API_URL);
      const data = res?.data?.students;
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const dynamicSearch = () => {
    return students.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 ">
      <Head>
        <title>Front End Assessment</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <div className="flex flex-col w-full h-full">
        <div className="flex w-3/4 items-center self-center">
          <div className="flex rounded-lg flex-col overflow-y-scroll w-full h-studentContainer border border-gray-300">
            <div className="flex flex-col bg-white rounded-lg ">
              <input
                className="text-gray-400 text-lg p-4 outline-none border-b-2 gray-300 mx-2"
                placeholder="Search by name"
                onChange={editSearchTerm}
                value={searchTerm}
              />

              {students.map((student, key) => {
                return (
                  <div key={key} className="flex flex-col w-full">
                    <StudentCard
                      firstName={student.firstName}
                      lastName={student.lastName}
                      company={student.company}
                      city={student.city}
                      pic={student.pic}
                      skill={student.skill}
                      id={student.id}
                      grades={student.grades}
                      email={student.email}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
