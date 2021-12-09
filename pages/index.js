import Head from "next/head";
import { useContext, useState } from "react";
import StudentCard from "../components/StudentCard";
import { StudentContext } from "../contexts/StudentContext";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagTerm, setTagTerm] = useState("");
  const { studentData } = useContext(StudentContext);
  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const editTagTerm = (e) => {
    setTagTerm(e.target.value);
  };

  const result = studentData.filter(({ firstName, lastName, tags }) =>
    new RegExp(searchTerm || tagTerm, "gui").test(
      `${firstName} ${lastName} ${tags.join(" ")}`
    )
  );

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
          <div className="flex rounded-lg flex-col overflow-auto w-full h-studentContainer border border-gray-300 bg-white scrollbar-hide">
            <div className="flex flex-col bg-white rounded-xl">
              <input
                className="text-gray-400 text-lg p-4 outline-none border-b-2 border-gray-300 mx-2 focus:border-black duration-300"
                placeholder="Search by name"
                onChange={editSearchTerm}
                value={searchTerm}
              />
              <input
                className="text-gray-400 text-lg p-4 outline-none border-b-2 border-gray-300 mx-2 focus:border-black duration-300"
                placeholder="Search by tag"
                onChange={editTagTerm}
                value={tagTerm}
              />
              {result.map((student, key) => {
                return (
                  <div key={key} className="flex flex-col w-full">
                    <StudentCard
                      key={key}
                      student={student}
                      tags={student.tags}
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
