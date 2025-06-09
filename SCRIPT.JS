let jobList = [
  { title: "Frontend Developer", company: "Google", desc: "HTML, CSS, React required." },
  { title: "Backend Developer", company: "Amazon", desc: "Node.js, Express, MongoDB." },
  { title: "UI/UX Designer", company: "Netflix", desc: "Design using Figma, Adobe XD." }
];

function renderJobs(filter = "") {
  const jobContainer = document.getElementById("job-list");
  jobContainer.innerHTML = "";

  const filteredJobs = jobList.filter(job =>
    job.title.toLowerCase().includes(filter.toLowerCase()) ||
    job.company.toLowerCase().includes(filter.toLowerCase())
  );

  filteredJobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>${job.company}</strong></p>
      <p>${job.desc}</p>
    `;
    jobContainer.appendChild(div);
  });

  if (filteredJobs.length === 0) {
    jobContainer.innerHTML = "<p>No jobs found.</p>";
  }
}

document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const company = document.getElementById("company").value;
  const desc = document.getElementById("desc").value;

  jobList.unshift({ title, company, desc });
  renderJobs();
  this.reset();
});

function searchJobs() {
  const input = document.getElementById("searchInput").value;
  renderJobs(input);
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.onload = () => {
  renderJobs();
};