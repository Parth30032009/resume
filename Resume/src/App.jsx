import "./App.css";
import Resume from "../Resume/Resume";

function App() {
  let allInfo = {
    Name: "Parth Sharma",
    address: {
      street: "xyz street",
      colony: "Kuldeep Vihar",
      district: "Aligarh",
    },
    Email: "ps802sharma@gmail.com",
    Phone: "9876543210",
    goal: "I want to excel in this field by hard work and determination",
    hobbies: ["Reading Books", "Football", "Coding"],
    experience: [
      { year: 2022, company: "abc company", role: "Web Designer" },
      { year: 2023, company: "xyz company", role: "UI/UX Designer" },
    ],
    education: [
      {
        year: 2019,
        degree: "Bachelor of Science",
        school: "University of Science",
      },
    ],
    Skill: [
      { skill: "HTML/CSS", level: "Advanced" },
      { skill: "JavaScript", level: "Intermediate" },
      { skill: "React", level: "Beginner" },
    ],
  };

  return (
    <>
      <Resume {...allInfo}></Resume>
    </>
  );
}

export default App;
