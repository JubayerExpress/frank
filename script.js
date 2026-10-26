
/* =========================================================
   BUCC TRANSFER WINDOW — script.js
   BRAC University Computer Club
   ========================================================= */

// 1. DEPARTMENTS AND SENIOR EXECUTIVES

const departments = {
  "Creative": [
    "Sajib Sarker",
    "Md Ridwanur Rahman",
    "Sadia Afrin",
    "Md. Misbahul Islam",
    "Md. Rakibul Islam Nayan",
    "Asiful Islam Ayranna",
    "Tahera Toor",
    "Jaber Hasan",
    "Oyshi Sarker Nishita",
    "Jahra Binte Mamoon",
    "Abidur Islam Kiron",
    "Mahajabin Islam",
    "Md. Mushfiqur Rahman",
    "Rafia Nigar Noor"
  ],

  "Event Management": [
    "Fahim al razy",
    "Md. Rahatul Islam Rahat",
    "Tayeb Islam Tosif",
    "Zuhaer Mahtab Alif",
    "Fahim Faisal",
    "Hibrul Anam Prantik",
    "Talal Rahat Dipto",
    "Rakat-E-Jannat Raka",
    "Fabiha Muzahid",
    "Lamia Rahman",
    "Saad Noman Adeeb",
    "Rudian Ahmed",
    "Md. Nasimuzzaman Shakkhor",
    "Wahid Saifullah Fida",
    "Rafiad Zaman Khan",
    "Zinia Ahmed Toushy",
    "Mubassir Rahman",
    "Md. Tanvirul Islam Rifat",
    "Ishrat Jahan",
    "Mehjsabin Mostare Momo",
    "Khandoker Wahiduzzaman Anik",
    "Suchitra Barua",
    "Tawsif Islam Chowdhury",
    "Mahfuza Raihana",
    "Sinthia Khandoker",
    "Sadia Siddique",
    "Rafid Raihan Shadman",
    "Faiaz Abrar Zaman Pronoy",
    "Ahanaf Abid Sazid",
    "Nabilah Hossain",
    "Muhammad Mostafa Habib Zawad",
    "Rifat Hasan Nazim",
    "Hossain Tasnim Rumki",
    "S.M Nafeu Al Sikder",
    "Ashikur Rahman Ashik",
    "Nafisa Tahsin"
  ],

  "Finance": [
    "Jannatul Afrin Tahima",
    "Rafia Taimur Raisa",
    "Arnab Sen",
    "Tamanna Hossain",
    "Kazi Md Tanvirul Hasan Sadd",
    "Samin Safwan",
    "Agradip Saha",
    "Farsin Rahman Nahin",
    "Samirah Alom Sarah",
    "Hamza Bin Islam",
    "Shahriar",
    "Arnab Saha",
    "Senan Sami",
    "Towfique Nishad",
    "Irfan Alam Rahi",
    "Fariha yasmin",
    "Mahmudul Hassan Taseen",
    "Ishraq Ishat Khan",
    "Zinnia Nahid",
    "Abdur Rahman Khalid",
    "Abrar Srabon",
    "Bandhu Bilas Saha",
    "Aayan Anwar"
  ],

  "Human Resources": [
    "Zarrafuzzaman Choudhury",
    "Dibyo Singho Barua Subrajit",
    "Fahmidul Islam",
    "Newaz Bin Jafor",
    "Adittya Dey",
    "Kazi Nazifa Tabassum",
    "Fatin Ilham",
    "Ayesha Islam Upama"
  ],

  "Press Release & Publications": [
    "Md. Rizwanul Mushfiq",
    "Hasnain Ashraf",
    "Sayed Sohanul Islam",
    "Afrin Anowar Tanisha",
    "Tarannum Al Akida",
    "Imtiaz Ahmed Shovon",
    "Abdullah Abtahee Mohammad",
    "Wasifa Afsara",
    "Syba Binte Mahadi"
  ],

  "Research and Development": [
    "Nafiul Islam Nafis",
    "Md. Monazir Doha",
    "Zawad Ishmam Hriddo",
    "Ashraful Haque Shrabon",
    "Iftekhar Hasan Palash",
    "Abdullah Shamsul Arefin",
    "Tashfeen Azmaine",
    "Lotifur Shabbir",
    "Anika Alamgir",
    "Nusrat Jahan Madhurzo",
    "Siam Ferdous",
    "Khandaker Ziaur Rahman",
    "Mahir Dyan",
    "MD. FAHIM HASSAN"
  ],

  "Communication and Marketing": [
    "S.M.Abrar Shaleheen",
    "Ahsan Abid Razin",
    "Manjura Nuha",
    "Tahmina Aktar",
    "Shafiul Bashar Prodhan",
    "Md. Fardin Bashar",
    "Sufian Amin Nabil",
    "Sabikun Nahar Nisat"
  ]
};


// 2. PRESELECTED TRANSFER ANNOUNCEMENTS
// Edit these before the event.
// "from" is the person's current department.
// "to" is the department revealed as the destination.
//
// The destination appears first, then the SE's name.
// Use the exact names and department titles from above.

const plannedTransfers = [
  {
    name: "Sajib Sarker",
    from: "Creative",
    to: "Creative"
  },
  {
    name: "Fahim al razy",
    from: "Event Management",
    to: "Communication and Marketing"
  },
  {
    name: "Jannatul Afrin Tahima",
    from: "Finance",
    to: "Human Resources"
  },
  {
    name: "Zarrafuzzaman Choudhury",
    from: "Human Resources",
    to: "Research and Development"
  },
  {
    name: "Md. Rizwanul Mushfiq",
    from: "Press Release & Publications",
    to: "Press Release & Publications"
  },
  {
    name: "Nafiul Islam Nafis",
    from: "Research and Development",
    to: "Creative"
  },
  {
    name: "S.M.Abrar Shaleheen",
    from: "Communication and Marketing",
    to: "Event Management"
  }
];


// 3. SETTINGS

const SHUFFLE_DURATION = 5000;
const SHUFFLE_INTERVAL = 80;


// 4. PAGE ELEMENTS
// These IDs should match the ones in your index.html.
// If your HTML uses different IDs, update the selectors here.

const $ = (selector) => document.querySelector(selector);

const elements = {
  startButton: $(
    "#startButton, #start-btn, #startTransfer, [data-action='start']"
  ),
  departmentDisplay: $(
    "#departmentDisplay, #department-display, #destination"
  ),
  nameDisplay: $(
    "#nameDisplay, #name-display, #playerName"
  ),
  status: $(
    "#status, #statusText, #announcementStatus"
  ),
  result: $(
    "#result, #resultPanel, #transferResult"
  ),
  nextButton: $(
    "#nextButton, #next-btn, #nextTransfer, [data-action='next']"
  ),
  resetButton: $(
    "#resetButton, #reset-btn, #resetTransfer, [data-action='reset']"
  ),
  history: $(
    "#transferHistory, #transfer-history, #confirmedTransfers"
  ),
  counter: $(
    "#transferCounter, #transfer-counter, #counter"
  )
};


// 5. STATE

let currentTransferIndex = 0;
let isAnimating = false;
let transferHistory = [];


// 6. HELPERS

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setText(element, value) {
  if (element) element.textContent = value;
}

function setStatus(message) {
  setText(elements.status, message);
}

function setButtonDisabled(button, disabled) {
  if (button) button.disabled = disabled;
}

function setButtonLabel(button, label) {
  if (!button) return;

  // Works for ordinary buttons and buttons with a text span.
  const labelElement = button.querySelector(
    "[data-button-label], .button-text, span"
  );

  if (labelElement) {
    labelElement.textContent = label;
  } else {
    button.textContent = label;
  }
}

function showElement(element) {
  if (element) {
    element.hidden = false;
    element.classList.remove("hidden");
  }
}

function hideElement(element) {
  if (element) {
    element.hidden = true;
    element.classList.add("hidden");
  }
}

function animateElement(element) {
  if (!element) return;

  element.classList.remove("rolling", "reveal");
  void element.offsetWidth;
  element.classList.add("rolling");
}

function revealElement(element) {
  if (!element) return;

  element.classList.remove("rolling", "reveal");
  void element.offsetWidth;
  element.classList.add("reveal");
}

function getAllDepartments() {
  return Object.keys(departments);
}

function getAllSEs() {
  return Object.entries(departments).flatMap(
    ([department, names]) =>
      names.map((name) => ({
        name,
        department
      }))
  );
}


// 7. VALIDATE THE PLANNED TRANSFERS

function validateTransfers() {
  const allSEs = getAllSEs();

  plannedTransfers.forEach((transfer, index) => {
    const personExists = allSEs.some(
      (person) =>
        person.name === transfer.name &&
        person.department === transfer.from
    );

    if (!personExists) {
      console.warn(
        `Transfer ${index + 1}: "${transfer.name}" was not found ` +
        `in "${transfer.from}". Check spelling and department.`
      );
    }

    if (!departments[transfer.to]) {
      console.warn(
        `Transfer ${index + 1}: destination "${transfer.to}" ` +
        `does not exist in the department list.`
      );
    }
  });
}


// 8. ROULETTE ANIMATION

function shuffleDisplay(element, values, duration, finalValue) {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }

    const startTime = Date.now();
    let interval = SHUFFLE_INTERVAL;

    element.classList.add("rolling");

    function tick() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress >= 1) {
        element.textContent = finalValue;
        element.classList.remove("rolling");
        element.classList.add("reveal");
        resolve();
        return;
      }

      element.textContent = randomItem(values);

      // Slow down near the end for a dramatic reveal.
      const nextInterval =
        SHUFFLE_INTERVAL + Math.floor(progress * 170);

      clearTimeout(timer);
      timer = setTimeout(tick, nextInterval);
    }

    let timer = setTimeout(tick, interval);
  });
}


// 9. ANNOUNCEMENT EFFECTS

function showAnnouncement(transfer) {
  const destination = transfer.to;
  const name = transfer.name;
  const from = transfer.from;

  setText(elements.departmentDisplay, destination);
  setText(elements.nameDisplay, name);

  setStatus("HERE WE GO!");

  if (elements.result) {
    showElement(elements.result);
    elements.result.classList.add("confirmed");
  }

  // Optional IDs: add these elements to HTML if desired.
  setText($("#fromDepartment"), from);
  setText($("#toDepartment"), destination);
  setText($("#transferName"), name);
  setText($("#announcementTitle"), "HERE WE GO!");
  setText($("#announcementSubtitle"), "BUCC TRANSFER CONFIRMED");

  // Trigger a celebration effect if the HTML includes it.
  const celebration = $("#celebration");
  if (celebration) {
    showElement(celebration);
    celebration.classList.remove("celebrate");
    void celebration.offsetWidth;
    celebration.classList.add("celebrate");
  }

  // Browser event for optional integrations.
  document.dispatchEvent(
    new CustomEvent("bucc:transfer-revealed", {
      detail: transfer
    })
  );
}


// 10. TRANSFER HISTORY

function renderHistory() {
  if (elements.history) {
    elements.history.innerHTML = "";

    transferHistory.forEach((transfer, index) => {
      const item = document.createElement("article");
      item.className = "transfer-history-item";

      const number = document.createElement("span");
      number.className = "transfer-number";
      number.textContent = String(index + 1).padStart(2, "0");

      const details = document.createElement("div");
      details.className = "transfer-details";

      const name = document.createElement("strong");
      name.textContent = transfer.name;

      const movement = document.createElement("p");
      movement.textContent =
        `${transfer.from} → ${transfer.to}`;

      details.append(name, movement);
      item.append(number, details);
      elements.history.appendChild(item);
    });
  }

  setText(
    elements.counter,
    `${transferHistory.length} / ${plannedTransfers.length}`
  );

  document.dispatchEvent(
    new CustomEvent("bucc:history-updated", {
      detail: [...transferHistory]
    })
  );
}


// 11. START THE NEXT TRANSFER

async function startTransfer() {
  if (isAnimating) return;

  if (currentTransferIndex >= plannedTransfers.length) {
    setStatus("THE TRANSFER WINDOW IS CLOSED.");
    setButtonLabel(elements.startButton, "WINDOW CLOSED");
    setButtonDisabled(elements.startButton, true);
    setButtonDisabled(elements.nextButton, true);
    return;
  }

  isAnimating = true;

  const transfer = plannedTransfers[currentTransferIndex];

  setButtonDisabled(elements.startButton, true);
  setButtonDisabled(elements.nextButton, true);

  hideElement(elements.result);
  hideElement($("#celebration"));

  setText(elements.departmentDisplay, "SCANNING DESTINATIONS...");
  setText(elements.nameDisplay, "SEARCHING FOR THE SE...");

  setStatus("THE RUMOURS ARE INTENSIFYING...");

  animateElement(elements.departmentDisplay);
  animateElement(elements.nameDisplay);

  try {
    // Phase 1: reveal destination department first.
    await shuffleDisplay(
      elements.departmentDisplay,
      getAllDepartments(),
      SHUFFLE_DURATION,
      transfer.to
    );

    setStatus("DESTINATION LOCKED. WHO IS IT?");

    // Short pause between the two reveals.
    await new Promise((resolve) => setTimeout(resolve, 700));

    // Phase 2: reveal the Senior Executive's name.
    await shuffleDisplay(
      elements.nameDisplay,
      getAllSEs().map((person) => person.name),
      SHUFFLE_DURATION,
      transfer.name
    );

    showAnnouncement(transfer);

    transferHistory.push({
      ...transfer,
      timestamp: new Date().toISOString()
    });

    renderHistory();

    currentTransferIndex += 1;

    if (currentTransferIndex >= plannedTransfers.length) {
      setStatus("ALL TRANSFERS ANNOUNCED. HERE WE GO!");
      setButtonLabel(elements.startButton, "WINDOW CLOSED");
      setButtonDisabled(elements.startButton, true);
    } else {
      setStatus("HERE WE GO! TRANSFER CONFIRMED.");
      setButtonLabel(elements.startButton, "REVEAL NEXT TRANSFER");
      setButtonDisabled(elements.startButton, false);
    }

    setButtonDisabled(elements.nextButton, false);
  } catch (error) {
    console.error("Transfer animation error:", error);
    setStatus("Something went wrong. Please try again.");
    setButtonDisabled(elements.startButton, false);
  } finally {
    isAnimating = false;
  }
}


// 12. RESET THE TRANSFER WINDOW

function resetTransferWindow() {
  if (isAnimating) return;

  const confirmed = window.confirm(
    "Reset the Transfer Window? All revealed transfers will be cleared."
  );

  if (!confirmed) return;

  currentTransferIndex = 0;
  transferHistory = [];

  setText(elements.departmentDisplay, "DESTINATION TBD");
  setText(elements.nameDisplay, "WHO'S NEXT?");

  setStatus("THE TRANSFER WINDOW IS OPEN.");

  hideElement(elements.result);
  hideElement($("#celebration"));

  setButtonLabel(elements.startButton, "REVEAL TRANSFER");
  setButtonDisabled(elements.startButton, false);
  setButtonDisabled(elements.nextButton, false);

  renderHistory();

  document.dispatchEvent(
    new CustomEvent("bucc:transfer-reset")
  );
}


// 13. OPTIONAL RANDOM MODE
// Use this if you want random SEs and destinations instead of the
// planned list. The current main button uses plannedTransfers.

function generateRandomTransfer() {
  const people = getAllSEs();
  const person = randomItem(people);
  const destination = randomItem(getAllDepartments());

  return {
    name: person.name,
    from: person.department,
    to: destination
  };
}


// 14. CONNECT BUTTONS

function initialiseTransferWindow() {
  validateTransfers();

  if (elements.startButton) {
    elements.startButton.addEventListener(
      "click",
      startTransfer
    );
  } else {
    console.warn(
      "BUCC Transfer Window: Start button not found. " +
      "Check the button ID in index.html."
    );
  }

  if (elements.nextButton) {
    elements.nextButton.addEventListener("click", () => {
      if (!isAnimating) startTransfer();
    });
  }

  if (elements.resetButton) {
    elements.resetButton.addEventListener(
      "click",
      resetTransferWindow
    );
  }

  setText(elements.departmentDisplay, "DESTINATION TBD");
  setText(elements.nameDisplay, "WHO'S NEXT?");
  setStatus("THE TRANSFER WINDOW IS OPEN.");

  setButtonLabel(elements.startButton, "REVEAL TRANSFER");

  renderHistory();
}


// 15. START WHEN THE PAGE IS READY

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initialiseTransferWindow
  );
} else {
  initialiseTransferWindow();
}
