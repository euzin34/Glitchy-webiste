window.ProgrammingPuzzles = {
  puzzles: [
    // Easy (1-10)
    {
      id: "html-1",
      title: "Fix HTML Tag",
      difficulty: "easy",
      code: "<h1>Hello World</h1>",
      answer: "<h1>Hello World</h1>",
      hint: "Close the h1 tag",
    },
    {
      id: "css-1",
      title: "CSS Color Property",
      difficulty: "easy",
      code: "color: ;",
      answer: "color: red;",
      hint: "Add a color value",
    },
    {
      id: "js-1",
      title: "Variable Declaration",
      difficulty: "easy",
      code: "let name = ;",
      answer: 'let name = "John";',
      hint: "Assign a string value",
    },
    {
      id: "html-2",
      title: "Image Tag",
      difficulty: "easy",
      code: '<img src="image.jpg">',
      answer: '<img src="image.jpg" alt="description">',
      hint: "Add alt attribute",
    },
    {
      id: "css-2",
      title: "Font Size",
      difficulty: "easy",
      code: "font-size: ;",
      answer: "font-size: 16px;",
      hint: "Set font size in pixels",
    },
    {
      id: "js-2",
      title: "Function Call",
      difficulty: "easy",
      code: "console.();",
      answer: "console.log();",
      hint: "Complete the log method",
    },
    {
      id: "html-3",
      title: "Link Tag",
      difficulty: "easy",
      code: "<a>Click me</a>",
      answer: '<a href="#">Click me</a>',
      hint: "Add href attribute",
    },
    {
      id: "css-3",
      title: "Background Color",
      difficulty: "easy",
      code: "background-color: ;",
      answer: "background-color: blue;",
      hint: "Set background color",
    },
    {
      id: "js-3",
      title: "Array Declaration",
      difficulty: "easy",
      code: "let arr = ;",
      answer: "let arr = [];",
      hint: "Create empty array",
    },
    {
      id: "html-4",
      title: "List Item",
      difficulty: "easy",
      code: "<ul><>Item</></ul>",
      answer: "<ul><li>Item</li></ul>",
      hint: "Use li tags for list items",
    },

    // Medium (11-20)
    {
      id: "js-4",
      title: "For Loop",
      difficulty: "medium",
      code: "for(let i=0; i<5; ) { }",
      answer: "for(let i=0; i<5; i++) { }",
      hint: "Add increment operator",
    },
    {
      id: "css-4",
      title: "Flexbox Center",
      difficulty: "medium",
      code: "display: flex; justify-content: ;",
      answer: "display: flex; justify-content: center;",
      hint: "Center items horizontally",
    },
    {
      id: "html-5",
      title: "Form Input",
      difficulty: "medium",
      code: '<input type="text">',
      answer: '<input type="text" name="username" required>',
      hint: "Add name and required attributes",
    },
    {
      id: "js-5",
      title: "Object Property",
      difficulty: "medium",
      code: 'let obj = {name: "John", : 25}',
      answer: 'let obj = {name: "John", age: 25}',
      hint: "Add property name",
    },
    {
      id: "css-5",
      title: "Grid Layout",
      difficulty: "medium",
      code: "display: grid; grid-template-columns: ;",
      answer: "display: grid; grid-template-columns: 1fr 1fr;",
      hint: "Create two equal columns",
    },
    {
      id: "js-6",
      title: "Arrow Function",
      difficulty: "medium",
      code: "const add = (a, b) { return a + b; }",
      answer: "const add = (a, b) => { return a + b; }",
      hint: "Add arrow syntax",
    },
    {
      id: "html-6",
      title: "Table Structure",
      difficulty: "medium",
      code: "<table><tr><>Data</></tr></table>",
      answer: "<table><tr><td>Data</td></tr></table>",
      hint: "Use td for table data",
    },
    {
      id: "css-6",
      title: "Media Query",
      difficulty: "medium",
      code: "@media (max-width: ) { }",
      answer: "@media (max-width: 768px) { }",
      hint: "Set breakpoint for mobile",
    },
    {
      id: "js-7",
      title: "Event Listener",
      difficulty: "medium",
      code: 'element.addEventListener("", function() {});',
      answer: 'element.addEventListener("click", function() {});',
      hint: "Add click event",
    },
    {
      id: "css-7",
      title: "Animation",
      difficulty: "medium",
      code: "animation: fadeIn 2s ;",
      answer: "animation: fadeIn 2s ease-in-out;",
      hint: "Add timing function",
    },

    // Hard (21-30)
    {
      id: "js-8",
      title: "Promise Chain",
      difficulty: "hard",
      code: "fetch(url).then().catch()",
      answer:
        "fetch(url).then(response => response.json()).catch(error => console.error(error))",
      hint: "Handle response and errors",
    },
    {
      id: "css-8",
      title: "Complex Selector",
      difficulty: "hard",
      code: ".parent .child { }",
      answer: ".parent > .child:nth-child(2n+1) { }",
      hint: "Select odd direct children",
    },
    {
      id: "js-9",
      title: "Async/Await",
      difficulty: "hard",
      code: "async function getData() { const data = fetch(url); }",
      answer:
        "async function getData() { const data = await fetch(url); return data.json(); }",
      hint: "Add await and return parsed data",
    },
    {
      id: "html-7",
      title: "Semantic HTML",
      difficulty: "hard",
      code: "<div><div>Title</div><div>Content</div></div>",
      answer: "<article><header>Title</header><main>Content</main></article>",
      hint: "Use semantic elements",
    },
    {
      id: "css-9",
      title: "Custom Properties",
      difficulty: "hard",
      code: ":root { --main-color: blue; } .element { color: ; }",
      answer:
        ":root { --main-color: blue; } .element { color: var(--main-color); }",
      hint: "Use CSS custom property",
    },
    {
      id: "js-10",
      title: "Destructuring",
      difficulty: "hard",
      code: "const obj = {a: 1, b: 2}; const = obj;",
      answer: "const obj = {a: 1, b: 2}; const {a, b} = obj;",
      hint: "Destructure object properties",
    },
    {
      id: "css-10",
      title: "Grid Areas",
      difficulty: "hard",
      code: 'grid-template-areas: "";',
      answer:
        'grid-template-areas: "header header" "sidebar main" "footer footer";',
      hint: "Define grid layout areas",
    },
    {
      id: "js-11",
      title: "Module Export",
      difficulty: "hard",
      code: "function helper() {} // Export this",
      answer: "function helper() {} export { helper };",
      hint: "Export the function",
    },
    {
      id: "html-8",
      title: "Accessibility",
      difficulty: "hard",
      code: "<button>Submit</button>",
      answer: '<button type="submit" aria-label="Submit form">Submit</button>',
      hint: "Add type and aria-label",
    },
    {
      id: "js-12",
      title: "Closure Pattern",
      difficulty: "hard",
      code: "function counter() { let count = 0; }",
      answer: "function counter() { let count = 0; return () => ++count; }",
      hint: "Return function that increments count",
    },
  ],

  init(gameEngine) {
    this.gameEngine = gameEngine;
    this.renderPuzzles();
    this.setupEventListeners();
  },

  renderPuzzles() {
    const container = document.getElementById("programmingPuzzleList");

    this.puzzles.forEach((puzzle) => {
      const puzzleElement = document.createElement("div");
      puzzleElement.className = "puzzle-item";
      puzzleElement.dataset.puzzleId = puzzle.id;

      puzzleElement.innerHTML = `
                <div class="puzzle-title">${puzzle.title}</div>
                <div class="puzzle-code">${puzzle.code}</div>
                <span class="puzzle-difficulty difficulty-${
                  puzzle.difficulty
                }">${puzzle.difficulty.toUpperCase()}</span>
            `;

      container.appendChild(puzzleElement);
    });
  },

  setupEventListeners() {
    document
      .getElementById("programmingPuzzleList")
      .addEventListener("click", (e) => {
        const puzzleItem = e.target.closest(".puzzle-item");
        if (puzzleItem && !puzzleItem.classList.contains("solved")) {
          this.activatePuzzle(puzzleItem.dataset.puzzleId);
        }
      });
  },

  activatePuzzle(puzzleId) {
    const puzzle = this.puzzles.find((p) => p.id === puzzleId);
    if (!puzzle) return;

    const userAnswer = prompt(
      `Fix this code:\n\n${puzzle.code}\n\nHint: ${puzzle.hint}`
    );

    if (userAnswer && userAnswer.trim() === puzzle.answer) {
      this.solvePuzzle(puzzleId);
    } else {
      alert("Not quite right. Try again!");
    }
  },

  solvePuzzle(puzzleId) {
    const puzzleElement = document.querySelector(
      `[data-puzzle-id="${puzzleId}"]`
    );
    puzzleElement.classList.add("solved");

    this.gameEngine.solvePuzzle("programming", puzzleId);

    // Add success effect
    puzzleElement.style.animation = "pulse 0.5s ease-in-out";
  },
};
