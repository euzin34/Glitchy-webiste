// Advanced Puzzles - 10 Medium to Hard Challenges
const advancedPuzzles = [
  // Medium Puzzles (4)
  {
    id: "regex-validator",
    title: "REGEX_PATTERN_MATCH",
    difficulty: "medium",
    description: "Create a regex pattern to validate email addresses",
    question: "Write a regex pattern that matches valid email addresses:",
    answer: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    hints: [
      "Start with ^",
      "Use + for one or more",
      "Don't forget the domain extension",
    ],
    type: "code",
  },
  {
    id: "async-promise",
    title: "PROMISE_CHAIN_REPAIR",
    difficulty: "medium",
    description: "Fix the broken promise chain",
    question:
      'Complete this promise chain:\nfetch("/api/data")\n  .then(response => response.json())\n  .then(data => ___)\n  .catch(error => console.error(error));',
    answer: "console.log(data)",
    hints: [
      "What do you do with the data?",
      "Think about logging",
      "Use console.log()",
    ],
    type: "code",
  },
  {
    id: "css-flexbox",
    title: "FLEXBOX_ALIGNMENT",
    difficulty: "medium",
    description: "Center content both horizontally and vertically",
    question: "What CSS properties center a div both ways using flexbox?",
    answer: "justify-content: center; align-items: center;",
    hints: [
      "Use flexbox properties",
      "One for horizontal, one for vertical",
      "justify-content and align-items",
    ],
    type: "code",
  },
  {
    id: "dom-traversal",
    title: "DOM_NAVIGATION",
    difficulty: "medium",
    description: "Navigate the DOM tree efficiently",
    question: "How do you select the next sibling element in vanilla JS?",
    answer: "element.nextElementSibling",
    hints: [
      "Not nextSibling",
      "Think about elements only",
      "nextElementSibling",
    ],
    type: "code",
  },

  // Hard Puzzles (6)
  {
    id: "closure-scope",
    title: "CLOSURE_MEMORY_LEAK",
    difficulty: "hard",
    description: "Fix the closure that creates a memory leak",
    question:
      'function createCounter() {\n  let count = 0;\n  let data = new Array(1000000).fill("data");\n  return function() {\n    return ++count;\n  };\n}\n\nHow do you fix the memory leak?',
    answer: "data = null;",
    hints: [
      "The large array is trapped",
      "Set unused variables to null",
      "Clean up references",
    ],
    type: "code",
  },
  {
    id: "event-delegation",
    title: "EVENT_BUBBLE_CONTROL",
    difficulty: "hard",
    description: "Implement efficient event delegation",
    question:
      "Write code to handle clicks on dynamically added buttons using event delegation:",
    answer:
      'document.addEventListener("click", function(e) { if(e.target.matches("button")) { /* handle */ } });',
    hints: [
      "Use document as the listener",
      "Check e.target",
      "Use matches() method",
    ],
    type: "code",
  },
  {
    id: "prototype-chain",
    title: "PROTOTYPE_INHERITANCE",
    difficulty: "hard",
    description: "Create a proper inheritance chain",
    question: "How do you make Child inherit from Parent using prototypes?",
    answer:
      "Child.prototype = Object.create(Parent.prototype); Child.prototype.constructor = Child;",
    hints: [
      "Use Object.create()",
      "Don't forget the constructor",
      "Two lines needed",
    ],
    type: "code",
  },
  {
    id: "algorithm-optimization",
    title: "PERFORMANCE_BOTTLENECK",
    difficulty: "hard",
    description: "Optimize this O(n²) algorithm to O(n)",
    question:
      "function findDuplicates(arr) {\n  let duplicates = [];\n  for(let i = 0; i < arr.length; i++) {\n    for(let j = i + 1; j < arr.length; j++) {\n      if(arr[i] === arr[j]) duplicates.push(arr[i]);\n    }\n  }\n  return duplicates;\n}\n\nOptimize using a Set:",
    answer:
      "let seen = new Set(); let duplicates = new Set(); for(let item of arr) { if(seen.has(item)) duplicates.add(item); else seen.add(item); } return Array.from(duplicates);",
    hints: ["Use two Sets", "One for seen items", "One for duplicates"],
    type: "code",
  },
  {
    id: "memory-management",
    title: "GARBAGE_COLLECTION",
    difficulty: "hard",
    description: "Identify and fix memory leaks",
    question:
      "let cache = {};\nfunction addToCache(key, value) {\n  cache[key] = value;\n}\n\nWhat's wrong and how to fix it?",
    answer:
      "Cache grows indefinitely. Add: if(Object.keys(cache).length > 1000) cache = {};",
    hints: ["Cache never clears", "Add a size limit", "Clear when too large"],
    type: "code",
  },
  {
    id: "security-xss",
    title: "XSS_PREVENTION",
    difficulty: "hard",
    description: "Prevent XSS attacks in user input",
    question: "How do you safely insert user content into the DOM?",
    answer:
      "element.textContent = userInput; // or use DOMPurify.sanitize(userInput)",
    hints: [
      "Don't use innerHTML",
      "Use textContent for text",
      "Or sanitize HTML",
    ],
    type: "code",
  },
];

// advanced puzzles Initiliz
function initializeAdvancedPuzzles() {
  const container = document.getElementById("advancedPuzzleList");
  if (!container) return;

  advancedPuzzles.forEach((puzzle) => {
    const puzzleElement = document.createElement("div");
    puzzleElement.className = `puzzle-item ${puzzle.difficulty}`;
    puzzleElement.innerHTML = `
            <div class="puzzle-header">
                <span class="puzzle-title">${puzzle.title}</span>
                <span class="difficulty-badge ${
                  puzzle.difficulty
                }">${puzzle.difficulty.toUpperCase()}</span>
            </div>
            <div class="puzzle-description">${puzzle.description}</div>
        `;

    puzzleElement.addEventListener("click", () => openAdvancedPuzzle(puzzle));
    container.appendChild(puzzleElement);
  });
}

function openAdvancedPuzzle(puzzle) {
  const modal = document.createElement("div");
  modal.className = "puzzle-modal";
  modal.innerHTML = `
        <div class="modal-content advanced-modal">
            <div class="modal-header">
                <h3>${puzzle.title}</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <p class="puzzle-question">${puzzle.question.replace(
                  /\n/g,
                  "<br>"
                )}</p>
                <div class="code-input-area">
                    <textarea class="code-input" placeholder="Enter your solution here..." rows="6"></textarea>
                </div>
                <div class="hint-system">
                    <button class="hint-btn">Get Hint</button>
                    <div class="hint-text hidden"></div>
                </div>
                <button class="submit-btn">Submit Solution</button>
                <div class="feedback hidden"></div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);

  let currentHint = 0;
  const hintBtn = modal.querySelector(".hint-btn");
  const hintText = modal.querySelector(".hint-text");
  const codeInput = modal.querySelector(".code-input");
  const submitBtn = modal.querySelector(".submit-btn");
  const feedback = modal.querySelector(".feedback");

  hintBtn.addEventListener("click", () => {
    if (currentHint < puzzle.hints.length) {
      hintText.textContent = puzzle.hints[currentHint];
      hintText.classList.remove("hidden");
      currentHint++;
      if (currentHint >= puzzle.hints.length) {
        hintBtn.textContent = "No more hints";
        hintBtn.disabled = true;
      }
    }
  });

  submitBtn.addEventListener("click", () => {
    const userAnswer = codeInput.value.trim();
    const isCorrect = checkAdvancedAnswer(userAnswer, puzzle.answer);

    feedback.classList.remove("hidden");
    if (isCorrect) {
      feedback.innerHTML =
        '<span class="success">✅ Correct! System repaired.</span>';
      feedback.className = "feedback success";
      setTimeout(() => {
        modal.remove();
        if (window.gameEngine) {
          window.gameEngine.solvePuzzle(puzzle.id);
        }
      }, 2000);
    } else {
      feedback.innerHTML =
        '<span class="error">❌ Incorrect. Try again.</span>';
      feedback.className = "feedback error";
    }
  });

  modal
    .querySelector(".close-btn")
    .addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

function checkAdvancedAnswer(userAnswer, correctAnswer) {
  // Normalize answers for comparison
  const normalize = (str) => str.toLowerCase().replace(/\s+/g, " ").trim();
  return (
    normalize(userAnswer) === normalize(correctAnswer) ||
    userAnswer.includes(correctAnswer) ||
    correctAnswer.includes(userAnswer)
  );
}

// Auto-initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeAdvancedPuzzles);
} else {
  initializeAdvancedPuzzles();
}
