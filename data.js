// ============================================================
//  data.js  –  shared state, questions, sample data
// ============================================================

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";
const TIMER_SECONDS = 20;

// ── Question bank ──────────────────────────────────────────
let questionBank = [
  { id:1,  subject:"General Knowledge", q:"What is the capital of India?",                                   opts:["Mumbai","New Delhi","Kolkata","Chennai"],                         ans:1 },
  { id:2,  subject:"Science",           q:"Which planet is known as the Red Planet?",                        opts:["Venus","Jupiter","Mars","Saturn"],                                ans:2 },
  { id:3,  subject:"Mathematics",       q:"What is 15 × 8?",                                                 opts:["100","110","120","130"],                                          ans:2 },
  { id:4,  subject:"General Knowledge", q:"Who wrote India's national anthem?",                              opts:["Bankim Chandra","Rabindranath Tagore","Sarojini Naidu","M. Gandhi"],ans:1 },
  { id:5,  subject:"Science",           q:"What is the chemical symbol for water?",                          opts:["WA","H₂O","HO₂","OH"],                                           ans:1 },
  { id:6,  subject:"Mathematics",       q:"How many sides does a hexagon have?",                             opts:["5","7","8","6"],                                                  ans:3 },
  { id:7,  subject:"General Knowledge", q:"Which is the largest ocean on Earth?",                           opts:["Atlantic","Indian","Pacific","Arctic"],                           ans:2 },
  { id:8,  subject:"Science",           q:"What is the approximate speed of light?",                        opts:["3×10⁸ m/s","3×10⁶ m/s","3×10⁴ m/s","3×10¹⁰ m/s"],              ans:0 },
  { id:9,  subject:"General Knowledge", q:"Who invented the telephone?",                                    opts:["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Marconi"],  ans:2 },
  { id:10, subject:"Mathematics",       q:"What is the square root of 144?",                                opts:["11","12","13","14"],                                              ans:1 },
  { id:11, subject:"Science",           q:"Which gas do plants absorb during photosynthesis?",              opts:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],                  ans:2 },
  { id:12, subject:"General Knowledge", q:"What is the longest river in the world?",                        opts:["Amazon","Nile","Ganges","Yangtze"],                               ans:1 },
  { id:13, subject:"Science",           q:"How many bones are in the adult human body?",                    opts:["196","206","216","226"],                                          ans:1 },
  { id:14, subject:"Mathematics",       q:"What is 2 raised to the power of 8?",                            opts:["128","256","512","64"],                                           ans:1 },
  { id:15, subject:"Science",           q:"Who developed the theory of relativity?",                        opts:["Isaac Newton","Niels Bohr","Albert Einstein","Heisenberg"],       ans:2 },
  { id:16, subject:"General Knowledge", q:"What is the hardest natural substance on Earth?",                opts:["Gold","Iron","Diamond","Platinum"],                               ans:2 },
  { id:17, subject:"General Knowledge", q:"Which country is the largest by land area?",                     opts:["USA","China","Canada","Russia"],                                  ans:3 },
  { id:18, subject:"Science",           q:"What is the SI unit of electric current?",                       opts:["Volt","Watt","Ohm","Ampere"],                                     ans:3 },
  { id:19, subject:"General Knowledge", q:"How many colours are in a rainbow?",                             opts:["5","6","7","8"],                                                  ans:2 },
  { id:20, subject:"Computers",         q:"What does CPU stand for?",                                       opts:["Central Processing Unit","Core Power Unit","Central Power Unit","Core Processing Unit"], ans:0 },
  { id:21, subject:"Science",           q:"Which element has atomic number 1?",                             opts:["Helium","Hydrogen","Oxygen","Carbon"],                            ans:1 },
  { id:22, subject:"Mathematics",       q:"What is the approximate value of π (pi)?",                      opts:["3.14","2.71","1.61","1.73"],                                      ans:0 },
  { id:23, subject:"General Knowledge", q:"Who was the first President of India?",                          opts:["Jawaharlal Nehru","Dr. Rajendra Prasad","S. Radhakrishnan","L. B. Shastri"], ans:1 },
  { id:24, subject:"Science",           q:"Which organ pumps blood throughout the human body?",             opts:["Liver","Lungs","Brain","Heart"],                                  ans:3 },
  { id:25, subject:"Computers",         q:"What is the full form of DNA?",                                  opts:["Deoxyribonucleic Acid","Deoxyribonitric Acid","Diribonucleic Acid","Dinitronicotinic Acid"], ans:0 },
];

// ── Pre-loaded sample registrations ──────────────────────
let registrations = [
  { id:"R4821", name:"Priya Sharma",   std:"12th", school:"St. Mary's High School",  board:"CBSE",  phone:"9876543210", email:"priya.sharma@gmail.com",   address:"Bengaluru", examType:"Online Quiz",  date:"2026-04-20" },
  { id:"R3305", name:"Rahul Verma",    std:"11th", school:"DPS Bangalore",           board:"CBSE",  phone:"9123456780", email:"rahul.verma@gmail.com",    address:"Mysuru",    examType:"Talent Exam",  date:"2026-04-21" },
  { id:"R7749", name:"Sneha Patel",    std:"10th", school:"Kendriya Vidyalaya",      board:"State", phone:"8765432109", email:"sneha.patel@gmail.com",    address:"Hubli",     examType:"Placement",    date:"2026-04-21" },
  { id:"R2214", name:"Arjun Nair",     std:"12th", school:"Christ College",          board:"ICSE",  phone:"7654321098", email:"arjun.nair@gmail.com",     address:"Kochi",     examType:"Online Quiz",  date:"2026-04-22" },
  { id:"R9067", name:"Deepika Reddy",  std:"11th", school:"Narayana School",         board:"State", phone:"6543210987", email:"deepika.reddy@gmail.com",  address:"Hyderabad", examType:"Talent Exam",  date:"2026-04-22" },
];

// ── Pre-loaded sample results ────────────────────────────
let results = [
  { id:"R4821", name:"Priya Sharma",  examType:"Online Quiz", score:88, correct:22, wrong:3,  skipped:0, date:"2026-04-20" },
  { id:"R3305", name:"Rahul Verma",   examType:"Talent Exam", score:76, correct:19, wrong:6,  skipped:0, date:"2026-04-21" },
  { id:"R2214", name:"Arjun Nair",    examType:"Online Quiz", score:96, correct:24, wrong:1,  skipped:0, date:"2026-04-22" },
  { id:"R9067", name:"Deepika Reddy", examType:"Talent Exam", score:60, correct:15, wrong:10, skipped:0, date:"2026-04-22" },
];

// ── Session state (volatile per visit) ───────────────────
let currentStudent   = null;   // set after registration
let currentAnswers   = [];     // array of selected option indices (null = skipped)
let currentQuizResult = null;  // set after quiz finishes
let adminLoggedIn    = false;

// ── Helpers ──────────────────────────────────────────────
function genId() {
  return "R" + (Math.floor(Math.random() * 8999) + 1000);
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function gradeLabel(score) {
  if (score >= 90) return "Distinction";
  if (score >= 75) return "First Class";
  if (score >= 60) return "Second Class";
  if (score >= 40) return "Pass";
  return "Fail";
}

function gradeBadgeClass(score) {
  if (score >= 75) return "badge-success";
  if (score >= 40) return "badge-warning";
  return "badge-danger";
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
}

// Save / load from localStorage so data persists across pages
function saveData() {
  localStorage.setItem("ams_registrations", JSON.stringify(registrations));
  localStorage.setItem("ams_results",       JSON.stringify(results));
  localStorage.setItem("ams_questions",     JSON.stringify(questionBank));
}

function loadData() {
  try {
    const r = localStorage.getItem("ams_registrations");
    const res = localStorage.getItem("ams_results");
    const q = localStorage.getItem("ams_questions");
    if (r)   registrations = JSON.parse(r);
    if (res) results       = JSON.parse(res);
    if (q)   questionBank  = JSON.parse(q);
  } catch(e) { /* use defaults */ }
}

// Session student
function saveSession(student) {
  sessionStorage.setItem("ams_student", JSON.stringify(student));
}
function loadSession() {
  try {
    const s = sessionStorage.getItem("ams_student");
    return s ? JSON.parse(s) : null;
  } catch(e) { return null; }
}
function clearSession() {
  sessionStorage.removeItem("ams_student");
}

// Admin session
function saveAdminSession() {
  sessionStorage.setItem("ams_admin", "1");
}
function loadAdminSession() {
  return sessionStorage.getItem("ams_admin") === "1";
}
function clearAdminSession() {
  sessionStorage.removeItem("ams_admin");
}

loadData();
