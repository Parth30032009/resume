import "./Resume.css";
function Resume({
  Name,
  address,
  Email,
  Phone,
  goal,
  hobbies,
  experience,
  education,
  Skill,
}) {
  // Function for objects
  function checkObjLength(obj) {
    return Object.keys(obj).length === 0 ? "" : obj;
  }

  // Function for arrays
  function checkArrLength(arr) {
    return arr.length === 0 ? "" : arr;
  }

  // Function for strings
  function checkStrLength(str) {
    return str.length === 0 ? "" : str;
  }

  let props = [experience, education, Skill];
  props.map((prop) => {
    switch (true) {
      case prop instanceof Object:
        checkObjLength(prop);
        break;
      case prop instanceof Array:
        checkArrLength(prop);
        break;
      case prop instanceof String:
        checkStrLength(prop);
        break;
      default:
        break;
    }
  });
  return (
    <>
      <div>
        {/* Declaring header */}
        <header id="header">
          <h1>Resume</h1>
        </header>
        {/* Declaring main section */}
        <main>
          {/* Declaring section for basic information */}
          {Name == "" && address == "" && Email == "" && Phone == "" ? null : (
            <section id="basicInfo">
              {/* Combining name and address in a common div */}
              {Name == "" ? null : (
                <div id="name" style={{ fontWeight: "bold" }}>
                  {Name}
                </div>
              )}
              
                {address == "" ? null : (
                  <div id="address">
                    <div id="street">{address.street}</div>
                    <div id="colony">{address.colony}</div>
                    <div id="district">{address.district}</div>
                  </div>
                )}
              
              {/* Declaring div for contact information */}
              <div id="contactInfo">
                {Email == "" ? null : (
                  <div id="email">
                    <p style={{ fontWeight: "bold", display: "inline" }}>
                      Email:
                    </p>
                    {Email}
                  </div>
                )}
                {Phone == "" ? null : (
                  <div id="phone">
                    <p style={{ fontWeight: "bold", display: "inline" }}>
                      Contact NO:
                    </p>
                    {Phone}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Declaring section for Objective part */}
          {goal == "" ? null : (
            <section id="objective">
              <header className="para">Objective</header>
              <p id="goal">{goal}</p>
            </section>
          )}

          {/* Declaring section for educational qulifications */}
          {education == "" ? null : (
            <section id="education">
              <header className="para">Educational Qualifications</header>
              <div id="table">
                {/* Declaring a table  */}
                <table>
                  <thead>
                    <th>School</th>
                    <th>Degree</th>
                    <th>Year</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{education[0].school}</td>
                      <td>{education[0].degree}</td>
                      <td>{education[0].year}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Declaring section for skills */}
          {Skill == "" ? null : (
            <section id="skills">
              <header className="para">Skills</header>
              <ul>
                <li>
                  {Skill[0].skill}-{Skill[0].level}
                </li>
                <li>
                  {Skill[1].skill}-{Skill[1].level}
                </li>
                <li>
                  {Skill[2].skill}-{Skill[2].level}
                </li>
              </ul>
            </section>
          )}

          {/* Declaring section for Experience */}
          {experience == "" ? null : (
            <section id="Experience">
              <header className="para">Experience</header>
              <ul id="exp">
                <li>
                  {experience[0].company} {experience[0].role} ,
                  {experience[0].year}
                </li>
                <li>
                  {experience[1].company} {experience[1].role} ,
                  {experience[1].year}
                </li>
              </ul>
            </section>
          )}

          {/* Declaring section for hobbies */}
          {hobbies == "" ? null : (
            <section id="hobbies">
              <header className="para">hobbies</header>
              <ul>
                <li>
                  {hobbies[0]}, {hobbies[1]}, {hobbies[2]}
                </li>
              </ul>
            </section>
          )}
        </main>
        
      </div>
    </>
  );
}

export default Resume;
