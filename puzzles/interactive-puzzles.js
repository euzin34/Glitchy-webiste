window.InteractivePuzzles = {
  puzzles: [
    // Easy (3 puzzles)
    {
      id: "click-1",
      title: "Color Changer",
      difficulty: "easy",
      type: "click",
    },
    { id: "hover-1", title: "Hover Reveal", difficulty: "easy", type: "hover" },
    { id: "input-1", title: "Text Input", difficulty: "easy", type: "input" },

    // Medium (4 puzzles)
    { id: "drag-1", title: "Drag & Drop", difficulty: "medium", type: "drag" },
    {
      id: "sequence-1",
      title: "Button Sequence",
      difficulty: "medium",
      type: "sequence",
    },
    {
      id: "memory-1",
      title: "Memory Game",
      difficulty: "medium",
      type: "memory",
    },
    {
      id: "slider-1",
      title: "Value Slider",
      difficulty: "medium",
      type: "slider",
    },

    // Hard (7 puzzles)
    { id: "maze-1", title: "CSS Maze", difficulty: "hard", type: "maze" },
    { id: "code-1", title: "Code Breaker", difficulty: "hard", type: "code" },
    {
      id: "timing-1",
      title: "Perfect Timing",
      difficulty: "hard",
      type: "timing",
    },
    {
      id: "pattern-1",
      title: "Pattern Match",
      difficulty: "hard",
      type: "pattern",
    },
    {
      id: "physics-1",
      title: "Physics Puzzle",
      difficulty: "hard",
      type: "physics",
    },
    { id: "logic-1", title: "Logic Gates", difficulty: "hard", type: "logic" },
    {
      id: "cipher-1",
      title: "Caesar Cipher",
      difficulty: "hard",
      type: "cipher",
    },
  ],

  init(gameEngine) {
    this.gameEngine = gameEngine;
    this.renderPuzzles();
    this.setupEventListeners();
  },

  renderPuzzles() {
    const container = document.getElementById("interactivePuzzleList");

    this.puzzles.forEach((puzzle) => {
      const puzzleElement = document.createElement("div");
      puzzleElement.className = "puzzle-item";
      puzzleElement.dataset.puzzleId = puzzle.id;

      puzzleElement.innerHTML = `
                <div class="puzzle-title">${puzzle.title}</div>
                <div class="puzzle-type">Type: ${puzzle.type}</div>
                <span class="puzzle-difficulty difficulty-${
                  puzzle.difficulty
                }">${puzzle.difficulty.toUpperCase()}</span>
            `;

      container.appendChild(puzzleElement);
    });
  },

  setupEventListeners() {
    document
      .getElementById("interactivePuzzleList")
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

    // Create puzzle interface based on type
    this.createPuzzleInterface(puzzle);
  },

  createPuzzleInterface(puzzle) {
    const modal = document.createElement("div");
    modal.className = "puzzle-modal";
    modal.innerHTML = `
            <div class="puzzle-modal-content">
                <div class="puzzle-modal-header">
                    <h3>${puzzle.title}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="puzzle-modal-body" id="puzzleModalBody">
                    ${this.generatePuzzleContent(puzzle)}
                </div>
            </div>
        `;

    document.body.appendChild(modal);

    // Setup puzzle-specific logic
    this.setupPuzzleLogic(puzzle, modal);

    // Close modal functionality
    modal.querySelector(".close-modal").addEventListener("click", () => {
      document.body.removeChild(modal);
    });
  },

  generatePuzzleContent(puzzle) {
    switch (puzzle.type) {
      case "click":
        return `
                    <div class="color-changer-puzzle">
                        <div class="color-box" id="colorBox" style="background: red; width: 100px; height: 100px; margin: 20px auto; cursor: pointer;"></div>
                        <p>Click the box until it turns green!</p>
                    </div>
                `;

      case "hover":
        return `
                    <div class="hover-puzzle">
                        <div class="hover-area" style="width: 200px; height: 100px; background: #333; margin: 20px auto; position: relative;">
                            <div class="hidden-text" style="opacity: 0; transition: opacity 0.3s;">Secret Code: 1337</div>
                        </div>
                        <input type="text" id="hoverInput" placeholder="Enter the secret code">
                        <button id="hoverSubmit">Submit</button>
                    </div>
                `;

      case "input":
        return `
                    <div class="input-puzzle">
                        <p>Type the magic word: <strong>ABRACADABRA</strong></p>
                        <input type="text" id="magicInput" placeholder="Enter magic word">
                        <button id="inputSubmit">Cast Spell</button>
                    </div>
                `;

      case "drag":
        return `
                    <div class="drag-puzzle">
                        <div class="drag-items">
                            <div class="drag-item" draggable="true" data-value="A">A</div>
                            <div class="drag-item" draggable="true" data-value="B">B</div>
                            <div class="drag-item" draggable="true" data-value="C">C</div>
                        </div>
                        <div class="drop-zones">
                            <div class="drop-zone" data-target="C">Drop C here</div>
                            <div class="drop-zone" data-target="A">Drop A here</div>
                            <div class="drop-zone" data-target="B">Drop B here</div>
                        </div>
                    </div>
                `;

      case "sequence":
        return `
                    <div class="sequence-puzzle">
                        <p>Click the buttons in this order: 4, 2, 1, 3</p>
                        <div class="sequence-buttons">
                            <button class="seq-btn" data-num="1">1</button>
                            <button class="seq-btn" data-num="2">2</button>
                            <button class="seq-btn" data-num="3">3</button>
                            <button class="seq-btn" data-num="4">4</button>
                        </div>
                        <div class="sequence-display">Sequence: <span id="sequenceDisplay">[]</span></div>
                    </div>
                `;

      case "memory":
        return `
                    <div class="memory-puzzle">
                        <p>Remember the pattern and repeat it!</p>
                        <div class="memory-grid">
                            <div class="memory-cell" data-index="0"></div>
                            <div class="memory-cell" data-index="1"></div>
                            <div class="memory-cell" data-index="2"></div>
                            <div class="memory-cell" data-index="3"></div>
                        </div>
                        <button id="startMemory">Start Pattern</button>
                    </div>
                `;

      case "slider":
        return `
                    <div class="slider-puzzle">
                        <p>Set all sliders to exactly 50%</p>
                        <div class="sliders">
                            <input type="range" class="puzzle-slider" min="0" max="100" value="25">
                            <input type="range" class="puzzle-slider" min="0" max="100" value="75">
                            <input type="range" class="puzzle-slider" min="0" max="100" value="10">
                        </div>
                        <button id="checkSliders">Check Values</button>
                    </div>
                `;

      default:
        return `<p>Puzzle type: ${puzzle.type} - Implementation coming soon!</p>`;
    }
  },

  setupPuzzleLogic(puzzle, modal) {
    switch (puzzle.type) {
      case "click":
        this.setupColorChanger(puzzle, modal);
        break;
      case "hover":
        this.setupHoverReveal(puzzle, modal);
        break;
      case "input":
        this.setupTextInput(puzzle, modal);
        break;
      case "drag":
        this.setupDragDrop(puzzle, modal);
        break;
      case "sequence":
        this.setupSequence(puzzle, modal);
        break;
      case "memory":
        this.setupMemoryGame(puzzle, modal);
        break;
      case "slider":
        this.setupSliderPuzzle(puzzle, modal);
        break;
    }
  },

  setupColorChanger(puzzle, modal) {
    const colorBox = modal.querySelector("#colorBox");
    const colors = ["red", "blue", "yellow", "purple", "green"];
    let currentIndex = 0;

    colorBox.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % colors.length;
      colorBox.style.background = colors[currentIndex];

      if (colors[currentIndex] === "green") {
        this.solvePuzzle(puzzle.id, modal);
      }
    });
  },

  setupHoverReveal(puzzle, modal) {
    const hoverArea = modal.querySelector(".hover-area");
    const hiddenText = modal.querySelector(".hidden-text");
    const input = modal.querySelector("#hoverInput");
    const submit = modal.querySelector("#hoverSubmit");

    hoverArea.addEventListener("mouseenter", () => {
      hiddenText.style.opacity = "1";
    });

    hoverArea.addEventListener("mouseleave", () => {
      hiddenText.style.opacity = "0";
    });

    submit.addEventListener("click", () => {
      if (input.value === "1337") {
        this.solvePuzzle(puzzle.id, modal);
      } else {
        alert("Wrong code! Hover over the area to reveal it.");
      }
    });
  },

  setupTextInput(puzzle, modal) {
    const input = modal.querySelector("#magicInput");
    const submit = modal.querySelector("#inputSubmit");

    submit.addEventListener("click", () => {
      if (input.value.toUpperCase() === "ABRACADABRA") {
        this.solvePuzzle(puzzle.id, modal);
      } else {
        alert("That's not the magic word!");
      }
    });
  },

  setupDragDrop(puzzle, modal) {
    const dragItems = modal.querySelectorAll(".drag-item");
    const dropZones = modal.querySelectorAll(".drop-zone");
    let correctPlacements = 0;

    dragItems.forEach((item) => {
      item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.dataset.value);
      });
    });

    dropZones.forEach((zone) => {
      zone.addEventListener("dragover", (e) => e.preventDefault());
      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggedValue = e.dataTransfer.getData("text/plain");
        const targetValue = zone.dataset.target;

        if (draggedValue === targetValue) {
          zone.textContent = draggedValue;
          zone.style.background = "#00ff00";
          correctPlacements++;

          if (correctPlacements === 3) {
            this.solvePuzzle(puzzle.id, modal);
          }
        } else {
          zone.style.background = "#ff0000";
          setTimeout(() => {
            zone.style.background = "";
          }, 1000);
        }
      });
    });
  },

  setupSequence(puzzle, modal) {
    const buttons = modal.querySelectorAll(".seq-btn");
    const display = modal.querySelector("#sequenceDisplay");
    const correctSequence = [4, 2, 1, 3];
    let userSequence = [];

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const num = Number.parseInt(button.dataset.num);
        userSequence.push(num);
        display.textContent = `[${userSequence.join(", ")}]`;

        if (userSequence.length === correctSequence.length) {
          if (
            JSON.stringify(userSequence) === JSON.stringify(correctSequence)
          ) {
            this.solvePuzzle(puzzle.id, modal);
          } else {
            alert("Wrong sequence! Try again.");
            userSequence = [];
            display.textContent = "[]";
          }
        }
      });
    });
  },

  setupMemoryGame(puzzle, modal) {
    const cells = modal.querySelectorAll(".memory-cell");
    const startButton = modal.querySelector("#startMemory");
    const pattern = [0, 2, 1, 3]; // Random pattern
    let userPattern = [];
    let showingPattern = false;

    startButton.addEventListener("click", () => {
      if (showingPattern) return;

      showingPattern = true;
      userPattern = [];

      // Show pattern
      pattern.forEach((cellIndex, i) => {
        setTimeout(() => {
          cells[cellIndex].style.background = "#ffff00";
          setTimeout(() => {
            cells[cellIndex].style.background = "";
            if (i === pattern.length - 1) {
              showingPattern = false;
            }
          }, 500);
        }, i * 700);
      });
    });

    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (showingPattern) return;

        userPattern.push(index);
        cell.style.background = "#00ff00";
        setTimeout(() => {
          cell.style.background = "";
        }, 200);

        if (userPattern.length === pattern.length) {
          if (JSON.stringify(userPattern) === JSON.stringify(pattern)) {
            this.solvePuzzle(puzzle.id, modal);
          } else {
            alert("Wrong pattern! Try again.");
            userPattern = [];
          }
        }
      });
    });
  },

  setupSliderPuzzle(puzzle, modal) {
    const sliders = modal.querySelectorAll(".puzzle-slider");
    const checkButton = modal.querySelector("#checkSliders");

    checkButton.addEventListener("click", () => {
      const allAt50 = Array.from(sliders).every(
        (slider) => slider.value === "50"
      );

      if (allAt50) {
        this.solvePuzzle(puzzle.id, modal);
      } else {
        alert("All sliders must be at exactly 50%!");
      }
    });
  },

  solvePuzzle(puzzleId, modal) {
    const puzzleElement = document.querySelector(
      `[data-puzzle-id="${puzzleId}"]`
    );
    puzzleElement.classList.add("solved");

    this.gameEngine.solvePuzzle("interactive", puzzleId);

    // Close modal with success animation
    modal.style.animation = "fadeOut 0.5s ease-in-out";
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 500);

    // Add success effect to puzzle item
    puzzleElement.style.animation = "pulse 0.5s ease-in-out";
  },
};

// Add modal styles
const modalStyles = `
.puzzle-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1500;
}

.puzzle-modal-content {
    background: #1a1a1a;
    border: 2px solid #00ff00;
    border-radius: 10px;
    padding: 30px;
    max-width: 500px;
    width: 90%;
    color: #00ff00;
}

.puzzle-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #00ff00;
    padding-bottom: 10px;
}

.close-modal {
    background: none;
    border: none;
    color: #ff0000;
    font-size: 24px;
    cursor: pointer;
}

.puzzle-modal-body {
    text-align: center;
}

/* Puzzle-specific styles */
.color-box, .memory-cell {
    border: 2px solid #00ff00;
    transition: all 0.3s ease;
}

.memory-cell {
    width: 50px;
    height: 50px;
    display: inline-block;
    margin: 5px;
    cursor: pointer;
}

.drag-item {
    background: #ff0000;
    color: #fff;
    padding: 10px;
    margin: 5px;
    cursor: grab;
    display: inline-block;
}

.drop-zone {
    border: 2px dashed #00ff00;
    padding: 20px;
    margin: 10px;
    min-height: 50px;
    display: inline-block;
    width: 100px;
}

.seq-btn {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 15px;
    margin: 5px;
    cursor: pointer;
    font-size: 18px;
}

.puzzle-slider {
    width: 100%;
    margin: 10px 0;
}

@keyframes fadeOut {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.8); }
}
`;

// Inject modal styles
const styleSheet = document.createElement("style");
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
