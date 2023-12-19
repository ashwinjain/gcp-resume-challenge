function renderHeader() {
  // Create the main container div
  var headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  // Create the first resume-header div
  var resumeHeader1 = document.createElement("div");
  resumeHeader1.classList.add("resume-header");

  // Create the h1 element
  var h1Element = document.createElement("h1");
  h1Element.textContent = "Ashwin Jain";

  // Append the h1 element to the first resume-header div
  resumeHeader1.appendChild(h1Element);

  // Append the first resume-header div to the main container div
  headerContainer.appendChild(resumeHeader1);

  // Create the second resume-header div
  var resumeHeader2 = document.createElement("div");
  resumeHeader2.classList.add("resume-header");

  // Array of contact information
  var contactInformation = [
    "(615) 981-6618",
    '&nbsp;| <a href="mailto:ashwinj3@illinois.edu">Email</a>',
    '&nbsp;| <a href="https://www.linkedin.com/in/real-ashwin-jain">LinkedIn</a>',
    '&nbsp;| <a href="https://github.com/ashwinjain">GitHub</a>',
  ];

  // Create contact-information divs and append them to the second resume-header div
  contactInformation.forEach(function (info) {
    var contactInfoDiv = document.createElement("div");
    contactInfoDiv.classList.add("contact-information");
    contactInfoDiv.innerHTML = "<p>" + info + "</p>";
    resumeHeader2.appendChild(contactInfoDiv);
  });

  // Append the second resume-header div to the main container div
  headerContainer.appendChild(resumeHeader2);

  // Append the main container div to the body
  document.body.appendChild(headerContainer);
}
function renderSection(name) {
  // Create the main container div
  var subsectionContainer = document.createElement("div");
  subsectionContainer.classList.add("subsection");

  // Create the subsection-header div
  var subsectionHeader = document.createElement("div");
  subsectionHeader.classList.add("subsection-header");
  subsectionHeader.textContent = name;

  // Create the horizontal line (hr) element
  var horizontalLine = document.createElement("hr");

  // Append the subsection-header and hr elements to the main container div
  subsectionContainer.appendChild(subsectionHeader);
  subsectionContainer.appendChild(horizontalLine);

  // Append the main container div to the body
  document.body.appendChild(subsectionContainer);
}

function renderProjectSubsection(
  name,
  skills,
  startMonth,
  endMonth,
  year,
  description
) {
  // Create the main container div
  var subsectionEntryDiv = document.createElement("div");
  subsectionEntryDiv.classList.add("subsection-entry");

  // Create the entry-header div
  var entryHeaderDiv = document.createElement("div");
  entryHeaderDiv.classList.add("entry-header");

  // Create entry-name div
  var entryNameDiv = document.createElement("div");
  entryHeaderDiv.classList.add("entry-name");
  entryNameDiv.textContent = name;

  // Create entry-skills div with vertical line breaks
  var entrySkillsDiv = document.createElement("div");
  entrySkillsDiv.classList.add("entry-skills");

  skillString = "&nbsp;| ";

  for (let i = 0; i < skills.length; i++) {
    skillString += skills[i];
    if (i != skills.length - 1) {
      skillString += ", ";
    }
  }

  entrySkillsDiv.innerHTML = skillString;

  // Create entry-date div with left spacing
  var entryDateDiv = document.createElement("div");
  entryDateDiv.classList.add("entry-date");

  dateString =
    startMonth + (startMonth == endMonth ? "" : " - " + endMonth) + " " + year;
  entryDateDiv.textContent = dateString;

  // Append entry-name, entry-skills, and entry-date to entry-header
  entryHeaderDiv.appendChild(entryNameDiv);
  entryHeaderDiv.appendChild(entrySkillsDiv);
  entryHeaderDiv.appendChild(entryDateDiv);

  // Append entry-header to subsection-entry
  subsectionEntryDiv.appendChild(entryHeaderDiv);

  // Create entry-description div
  var entryDescriptionDiv = document.createElement("div");
  entryDescriptionDiv.classList.add("entry-description");

  // Create description-list ul
  var descriptionListUl = document.createElement("ul");
  descriptionListUl.classList.add("description-list");

  // Create and append description li elements

  description.forEach(function (descriptionText) {
    var descriptionLi = document.createElement("li");
    descriptionLi.textContent = descriptionText;
    descriptionListUl.appendChild(descriptionLi);
  });

  // Append description-list to entry-description
  entryDescriptionDiv.appendChild(descriptionListUl);

  // Append entry-description to subsection-entry
  subsectionEntryDiv.appendChild(entryDescriptionDiv);

  // Append subsection-entry to the body
  document.body.appendChild(subsectionEntryDiv);
}
function renderExperienceSubsection(
  role,
  start_m,
  start_y,
  end_m,
  end_y,
  employer,
  location,
  description
) {
  // Create main container
  const subsectionEntry = document.createElement("div");
  subsectionEntry.classList.add("subsection-entry");

  // Create entry header
  const entryHeader = document.createElement("div");
  entryHeader.classList.add("entry-header");

  // Create entry name
  const entryName = document.createElement("div");
  entryName.classList.add("entry-name");
  entryName.textContent = role;

  // Create entry date
  const entryDate = document.createElement("div");
  entryDate.classList.add("entry-date");
  durationString = "";
  startString = "";
  endString = "";
  if (start_m == end_m && start_y == end_y) {
    durationString = end_m + " " + end_y;
  } else if (start_m != end_m && start_y == end_y) {
    durationString = start_m + " - " + end_m + " " + end_y;
  } else {
    durationString = start_m + " " + start_y + " - " + end_m + " " + end_y;
  }
  entryDate.textContent = durationString;

  // Append entry name and entry date to entry header
  entryHeader.appendChild(entryName);
  entryHeader.appendChild(entryDate);

  // Create entry header description
  const entryHeaderDescription = document.createElement("div");
  entryHeaderDescription.classList.add("entry-header-description");

  // Create left text
  const leftText = document.createElement("div");
  leftText.classList.add("left");
  leftText.textContent = employer;

  // Create right text
  const rightText = document.createElement("div");
  rightText.classList.add("right");
  rightText.textContent = location;

  // Append left and right text to entry header description
  entryHeaderDescription.appendChild(leftText);
  entryHeaderDescription.appendChild(rightText);

  // Create entry description
  const entryDescription = document.createElement("div");
  entryDescription.classList.add("entry-description");

  // Create unordered list
  const ul = document.createElement("ul");

  description.forEach(function (descriptionText) {
    var descriptionLi = document.createElement("li");
    descriptionLi.textContent = descriptionText;
    ul.appendChild(descriptionLi);
  });

  // Append unordered list to entry description
  entryDescription.appendChild(ul);

  // Append entry header, entry header description, and entry description to main container
  subsectionEntry.appendChild(entryHeader);
  subsectionEntry.appendChild(entryHeaderDescription);
  subsectionEntry.appendChild(entryDescription);

  // Append the main container to the document body
  document.body.appendChild(subsectionEntry);
}
function renderTechnicalSkill(skillName, skills) {
  // Create main container
  const skillEntry = document.createElement("div");
  skillEntry.classList.add("entry-skill");

  // Create entry name
  const entryName = document.createElement("div");
  entryName.classList.add("entry-name");
  entryName.textContent = skillName + ": ";

  // Create entry-skills div with vertical line breaks
  var entrySkills = document.createElement("div");
  entrySkills.classList.add("entry-skills");

  skillString = "&nbsp";

  for (let i = 0; i < skills.length; i++) {
    skillString += skills[i];
    if (i != skills.length - 1) {
      skillString += ", ";
    }
  }

  entrySkills.innerHTML = skillString;
  // entrySkills.textContent = role;
  skillEntry.appendChild(entryName);
  skillEntry.appendChild(entrySkills);
  document.body.appendChild(skillEntry);
  return;
}
function renderEducationSubsection(
  schoolName,
  city,
  state,
  degree,
  graduationYear
) {
  // Create main container
  const subsectionEntry = document.createElement("div");
  subsectionEntry.classList.add("subsection-entry");

  // Create entry header
  const entryHeader = document.createElement("div");
  entryHeader.classList.add("entry-header");

  // Create entry name
  const entryName = document.createElement("div");
  entryName.classList.add("entry-name");
  entryName.textContent = schoolName;

  // Create entry date
  const entryLocation = document.createElement("div");
  entryLocation.classList.add("entry-date");
  entryLocation.textContent = city + ", " + state;

  // Append entry name and entry date to entry header
  entryHeader.appendChild(entryName);
  entryHeader.appendChild(entryLocation);

  // Create entry header description
  const entryHeaderDescription = document.createElement("div");
  entryHeaderDescription.classList.add("entry-header-description");

  // Create left text
  const leftText = document.createElement("div");
  leftText.classList.add("left");
  leftText.textContent = degree;

  // Create right text
  const rightText = document.createElement("div");
  rightText.classList.add("right");
  rightText.textContent = "Graduating " + graduationYear;

  // Append left and right text to entry header description
  entryHeaderDescription.appendChild(leftText);
  entryHeaderDescription.appendChild(rightText);

  subsectionEntry.appendChild(entryHeader);
  subsectionEntry.appendChild(entryHeaderDescription);
  // Append the main container to the document body
  document.body.appendChild(subsectionEntry);
}
function renderSetting() {
  // Create the setting-place div
  var settingPlace = document.createElement("div");
  settingPlace.classList.add("setting-place");
  settingPlace.textContent = "Blaze Pizza";

  // Create the setting-time div
  var settingTime = document.createElement("div");
  settingTime.classList.add("setting-time");
  settingTime.textContent = "March 2020 - June 2022";

  // Append the setting-place and setting-time divs to the main container div
  settingContainer.appendChild(settingPlace);
  settingContainer.appendChild(settingTime);

  // Append the main container div to the body
  document.body.appendChild(settingContainer);
}

// Function to increase the visitor count
function increaseVisitorCount() {
  // Retrieve the current count from localStorage
  let count = localStorage.getItem("visitorCount");

  // If count is null, set it to 0
  if (count === null) {
    count = 0;
  }

  // Increment the count
  count++;

  // Update the localStorage and display the count
  localStorage.setItem("visitorCount", count);
  document.getElementById("visitorCount").innerText = count;
}

// Call the function when the page loads
// increaseVisitorCount();
var descriptionsMA = [
  "Designed and implemented a highly efficient memory allocator in C utilizing linked lists that performed with 94% efficiency relative to the standard C library memory allocator",
  "Conducted comprehensive memory profiling and analysis using tools like Valgrind to identify and resolve memory leaks and inefficiencies",
];

var descriptionsFS = [
  "Developed a file sharing system in C that allowed users to share files with other users on local and remote machines",
  "Implemeneted TCP sockets to establish reliable connections between clients and servers and allow for file transfer",
  "Tested for support of 100 client, file transfer of files of all sizes, and file transfer of multiple files at once",
];

var descriptionsTBP = [
  "Used Dijkstra’s shortest path algorithm to determine the shortest path from Champaign to Chicago that passes through the most number of Taco Bells",
  "Web scraped to generate a csv file containing every Taco Bell in Illinois and its coordinate location",
  "Wrote test scripts to test our implementation of Dijkstra’s algorithm and our graph data structure",
  "Utilized Git version control to collaborate with 3 other team members",
];
var descriptionsGA = [
  "Leading and mentoring a team of 4 developers in the design and development of an app that tracks machine/equipment availability at the UIUC gym using React, Node.js, Java, and other smaller frameworks",
  "Fostered a collaborative and innovative work environment by encouraging knowledge sharing, cross-functional communication, and continuous learning",
  "Stayed updated with new advancements to technologies used in the product to provide strategic direction and ensure the team's skill set remained current",
];

var descriptionsBP = [
  "Provided attentive and friendly customer service, ensuring a positive dining experience for patrons",
  "Handled cash transactions, operated the point-of-sale system, and accurately balanced cash register at the end of each shift",
  "Demonstrated a proactive approach in assisting fellow team members during peak hours, ensuring smooth operations and minimizing customer wait times",
  "Trained and mentored new team members to ensure they quickly learned the required skills and processes",
];

var descriptionsCC = [
  "Led and supervised a group of 20 elementary and middle school boys, ensuring their safety and engagement throughout a full day of sports-related activities and stations",
  "Prioritized the cultivation of key virtues, including teamwork and humility, to foster their personal growth and development",
];
renderHeader();

renderSection("Education");

renderEducationSubsection(
  "University of Illinois at Urbana-Champaign",
  "Champaign",
  "IL",
  "Bachelor of Science in Computer Science + Economics",
  2025
);
renderSection("Projects");
renderProjectSubsection(
  "File Sharing System",
  ["C", "Linux", "Socket Programming"],
  "November",
  "December",
  2023,
  descriptionsFS
);
renderProjectSubsection(
  "Memory Allocator",
  ["C", "Linux"],
  "September",
  "September",
  2023,
  descriptionsMA
);
renderProjectSubsection(
  "Taco Bell Path",
  ["C++", "Python", "Git"],
  "November",
  "November",
  2022,
  descriptionsTBP
);
renderProjectSubsection(
  "UIUC Gym App",
  ["C", "Linux"],
  "September",
  "December",
  2023,
  descriptionsGA
);

renderSection("Experience");

renderExperienceSubsection(
  "Team Member",
  "March",
  2020,
  "June",
  2022,
  "Blaze Pizza",
  "Brentwood, TN",
  descriptionsBP
);

renderExperienceSubsection(
  "Camp Counselor",
  "Summer",
  2019,
  "Summer",
  2019,
  "Montgomery Bell Academy",
  "Nashville, TN",
  descriptionsCC
);

renderSection("Technical Skills");

renderTechnicalSkill("Languages", [
  "Java",
  "Python",
  "C/C++",
  "SQL",
  "JavaScript",
  "HTML/CSS",
  "R",
  "Kotlin",
  "Swift",
  "MIPS Assembly",
  "System Verilog",
]);
renderTechnicalSkill("Frameworks", [
  "React Native",
  "Node.js",
  "Express.js",
  "JUnit",
  "Socket.io",
]);
renderTechnicalSkill("Developer Tools", [
  "Git",
  "Docker",
  "VS Code",
  "Eclipse",
  "Valgrind",
  "Linux",
]);
renderTechnicalSkill("Libraries", [
  "pandas",
  "NumPy",
  "Matplotlib",
  "Scikit-learn",
  "PyTorch",
]);

renderTechnicalSkill("Certifications", ["Google Data Analytics"]);
