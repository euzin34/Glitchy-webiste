class GlitchyWebsite {
  constructor() {
    this.puzzlesSolved = 0;
    this.totalPuzzles = 4;
    this.logoClicks = 0;
    this.sequenceClicks = [];
    this.correctSequence = [3, 1, 4, 2];
    this.draggedPieces = 0;

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.startGlitchEffects();
    this.addConsoleClues();
  }

  setupEventListeners() {
    // Logo click puzzle
    document
      .getElementById("logo")
      .addEventListener("click", () => this.handleLogoClick());

    // Terminal input puzzle
    document
      .getElementById("terminalInput")
      .addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.handleTerminalInput(e.target.value);
        }
      });

    // Drag and drop puzzle
    this.setupDragAndDrop();

    // Button sequence puzzle
    this.setupButtonSequence();

    // Hidden hover clue
    document
      .querySelector(".invisible-text")
      .addEventListener("mouseenter", () => {
        document.getElementById("terminal").classList.remove("hidden");
      });
  }

  handleLogoClick() {
    this.logoClicks++;
    console.log(`Logo clicked ${this.logoClicks} times. Need 3 total.`);

    if (this.logoClicks === 3) {
      this.solvePuzzle("logo");
      console.log("🎉 Logo puzzle solved! The navigation is now fixed.");
    }
  }

  handleTerminalInput(input) {
    if (input.toLowerCase() === "restore") {
      this.solvePuzzle("terminal");
      document.getElementById("terminalInput").value = "";
      document.querySelector(".terminal-content p").innerHTML =
        "REPAIR CODE ACCEPTED ✓";
      console.log("🎉 Terminal puzzle solved! The hero section is now fixed.");
    } else {
      document.querySelector(".terminal-content p").innerHTML =
        'INVALID CODE. Try again: <span class="cursor">_</span>';
    }
  }

  setupDragAndDrop() {
    const draggables = document.querySelectorAll(".draggable-piece");
    const dropZones = document.querySelectorAll(".drop-zone");

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        e.target.classList.add("dragging");
      });

      draggable.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
      });
    });

    dropZones.forEach((zone) => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("drag-over");
      });

      zone.addEventListener("dragleave", () => {
        zone.classList.remove("drag-over");
      });

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData("text/plain");
        const expectedPiece = zone.dataset.piece;

        zone.classList.remove("drag-over");

        if (draggedId === expectedPiece) {
          zone.classList.add("filled");
          zone.textContent =
            document.getElementById(draggedId).textContent + " ✓";
          document.getElementById(draggedId).style.display = "none";
          this.draggedPieces++;

          if (this.draggedPieces === 2) {
            this.solvePuzzle("drag");
            console.log("🎉 Drag puzzle solved! Card 2 is now fixed.");
          }
        }
      });
    });
  }

  setupButtonSequence() {
    const buttons = document.querySelectorAll(".seq-button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const order = Number.parseInt(button.dataset.order);
        this.sequenceClicks.push(order);
        button.classList.add("clicked");

        if (this.sequenceClicks.length === 4) {
          if (
            JSON.stringify(this.sequenceClicks) ===
            JSON.stringify(this.correctSequence)
          ) {
            this.solvePuzzle("sequence");
            console.log("🎉 Sequence puzzle solved! Card 3 is now fixed.");
          } else {
            // Reset sequence
            this.sequenceClicks = [];
            buttons.forEach((btn) => btn.classList.remove("clicked"));
            console.log("Wrong sequence! Try again: 3, 1, 4, 2");
          }
        }
      });
    });
  }

  solvePuzzle(puzzleType) {
    this.puzzlesSolved++;

    // Apply fixes based on puzzle type
    switch (puzzleType) {
      case "logo":
        this.fixNavigation();
        break;
      case "terminal":
        this.fixHeroSection();
        break;
      case "drag":
        this.fixCard(2);
        break;
      case "sequence":
        this.fixCard(3);
        break;
    }

    // Check if all puzzles are solved
    if (this.puzzlesSolved >= this.totalPuzzles) {
      setTimeout(() => this.completeRepair(), 1000);
    }
  }

  fixNavigation() {
    const header = document.getElementById("header");
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll(".nav-link");

    header.classList.remove("glitched");
    header.classList.add("fixed");
    nav.classList.remove("broken");
    nav.classList.add("fixed");

    document.getElementById("logo").textContent = "REPAIRED SITE";
    document.getElementById("logo").classList.add("fixed");

    navLinks.forEach((link, index) => {
      const texts = ["HOME", "ABOUT", "CONTACT"];
      link.textContent = texts[index];
      link.classList.add("fixed");
    });
  }

  fixHeroSection() {
    const hero = document.getElementById("hero");
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const errorMessages = document.getElementById("errorMessages");

    hero.classList.remove("glitched");
    title.textContent = "SYSTEM RESTORED";
    title.classList.add("fixed");
    subtitle.textContent = "Welcome to our amazing website!";
    subtitle.classList.add("fixed");
    errorMessages.style.display = "none";
  }

  fixCard(cardNumber) {
    const card = document.getElementById(`card${cardNumber}`);
    const title = card.querySelector(".card-title");
    const text = card.querySelector(".card-text");

    card.classList.remove("broken");
    card.classList.add("fixed");

    if (title) {
      title.classList.add("fixed");
      if (cardNumber === 2) {
        title.textContent = "PUZZLE SOLVED";
      } else if (cardNumber === 3) {
        title.textContent = "SEQUENCE COMPLETE";
      }
    }

    if (text) {
      text.classList.remove("scrambled");
      text.classList.add("fixed");
      text.textContent =
        "This section has been successfully repaired and is now functioning normally.";
    }
  }

  completeRepair() {
    // Fix everything
    document.body.classList.add("fixed");
    document.getElementById("glitchOverlay").classList.add("hidden");
    document.getElementById("footer").classList.add("fixed");
    document.querySelector(".footer-text").classList.add("fixed");

    // Fix remaining card
    const card1 = document.getElementById("card1");
    card1.classList.remove("broken");
    card1.classList.add("fixed");
    card1.querySelector(".card-title").textContent = "FULLY RESTORED";
    card1.querySelector(".card-title").classList.add("fixed");
    card1.querySelector(".card-text").classList.remove("scrambled");
    card1.querySelector(".card-text").classList.add("fixed");
    card1.querySelector(".card-text").textContent =
      "Congratulations! You have successfully repaired all corrupted systems.";

    // Show success message
    setTimeout(() => {
      document.getElementById("content").style.display = "none";
      document.getElementById("successMessage").classList.remove("hidden");
      this.createConfetti();
    }, 1500);
  }

  createConfetti() {
    const confetti = document.getElementById("confetti");
    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
    ];

    for (let i = 0; i < 50; i++) {
      const piece = document.createElement("div");
      piece.style.position = "absolute";
      piece.style.width = "10px";
      piece.style.height = "10px";
      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = Math.random() * 100 + "%";
      piece.style.top = "-10px";
      piece.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
      confetti.appendChild(piece);
    }

    // Add fall animation
    const style = document.createElement("style");
    style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        `;
    document.head.appendChild(style);
  }

  startGlitchEffects() {
    // Random glitch effects
    setInterval(() => {
      const glitchElements = document.querySelectorAll(
        ".glitch-text:not(.fixed)"
      );
      glitchElements.forEach((element) => {
        if (Math.random() < 0.1) {
          element.style.transform = `translate(${Math.random() * 4 - 2}px, ${
            Math.random() * 4 - 2
          }px)`;
          setTimeout(() => {
            element.style.transform = "translate(0, 0)";
          }, 100);
        }
      });
    }, 200);
  }

  addConsoleClues() {
    console.log("🔍 SYSTEM DIAGNOSTIC REPORT:");
    console.log("- Website corruption detected");
    console.log("- Multiple repair protocols available");
    console.log("- Clue 1: Try clicking the logo multiple times");
    console.log("- Clue 2: Look for hidden text that appears on hover");
    console.log("- Clue 3: Check HTML comments for additional hints");
    console.log("- Clue 4: Some puzzles require specific sequences");
    console.log("Good luck, repair technician! 🛠️");
  }
}

// Initialize the glitchy website when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new GlitchyWebsite();
});

// Add some extra console easter eggs
setTimeout(() => {
  console.log("💡 HINT: The terminal accepts repair codes...");
}, 5000);

setTimeout(() => {
  console.log(
    "🎯 PROGRESS: " + Math.floor(Math.random() * 4) + "/4 systems repaired"
  );
}, 10000);
