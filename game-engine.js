class GameEngine {
  constructor() {
    this.gameState = {
      totalPuzzles: 54,
      solvedPuzzles: 0,
      currentPhase: "corruption", // corruption -> repair -> complete
      puzzleCategories: {
        programming: { total: 30, solved: 0 },
        interactive: { total: 14, solved: 0 },
        advanced: { total: 10, solved: 0 },
      },
    }

    this.init()
  }

  init() {
    console.log("[v0] Game Engine initialized")
    this.setupEventListeners()
    this.initializePuzzles()
    this.addConsoleClues()
  }

  setupEventListeners() {
    // Logo click to reveal terminal
    document.getElementById("logo").addEventListener("click", () => {
      this.handleLogoClick()
    })

    // Terminal input handling
    const terminalInput = document.getElementById("terminalInput")
    if (terminalInput) {
      terminalInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.handleTerminalCommand(e.target.value)
          e.target.value = ""
        }
      })
    }
  }

  initializePuzzles() {
    // Initialize programming puzzles
    if (window.ProgrammingPuzzles) {
      window.ProgrammingPuzzles.init(this)
    }

    // Initialize interactive puzzles
    if (window.InteractivePuzzles) {
      window.InteractivePuzzles.init(this)
    }

    const initializeAdvancedPuzzles = window.initializeAdvancedPuzzles || (() => {})
    initializeAdvancedPuzzles()
  }

  handleLogoClick() {
    const terminal = document.getElementById("terminalSection")
    if (terminal && terminal.classList.contains("hidden")) {
      terminal.classList.remove("hidden")
      this.addTerminalMessage("REPAIR_CONSOLE.exe activated")
      this.addTerminalMessage('Type "help" for available commands')
      console.log("[v0] Terminal activated")
    }
  }

  handleTerminalCommand(command) {
    const cmd = command.toLowerCase().trim()

    switch (cmd) {
      case "help":
        this.addTerminalMessage("Available commands:")
        this.addTerminalMessage("- list: Show all puzzles")
        this.addTerminalMessage("- status: Show repair progress")
        this.addTerminalMessage("- hint: Get a puzzle hint")
        this.addTerminalMessage("- clear: Clear terminal")
        break

      case "list":
        this.showPuzzleList()
        break

      case "status":
        this.showRepairStatus()
        break

      case "hint":
        this.showHint()
        break

      case "clear":
        this.clearTerminal()
        break

      default:
        this.addTerminalMessage(`Unknown command: ${command}`)
        this.addTerminalMessage('Type "help" for available commands')
    }
  }

  addTerminalMessage(message) {
    const output = document.getElementById("terminalOutput")
    if (output) {
      const messageDiv = document.createElement("div")
      messageDiv.textContent = `> ${message}`
      messageDiv.style.marginBottom = "5px"
      output.appendChild(messageDiv)
      output.scrollTop = output.scrollHeight
    }
  }

  clearTerminal() {
    const output = document.getElementById("terminalOutput")
    if (output) {
      output.innerHTML = ""
    }
  }

  showPuzzleList() {
    this.addTerminalMessage("=== PUZZLE CATEGORIES ===")
    this.addTerminalMessage(
      `Programming Paradigms: ${this.gameState.puzzleCategories.programming.solved}/${this.gameState.puzzleCategories.programming.total}`,
    )
    this.addTerminalMessage(
      `Interactive Repairs: ${this.gameState.puzzleCategories.interactive.solved}/${this.gameState.puzzleCategories.interactive.total}`,
    )
    this.addTerminalMessage(
      `Advanced Systems: ${this.gameState.puzzleCategories.advanced.solved}/${this.gameState.puzzleCategories.advanced.total}`,
    )
  }

  showRepairStatus() {
    const percentage = Math.round((this.gameState.solvedPuzzles / this.gameState.totalPuzzles) * 100)
    this.addTerminalMessage(`=== SYSTEM REPAIR STATUS ===`)
    this.addTerminalMessage(`Progress: ${this.gameState.solvedPuzzles}/${this.gameState.totalPuzzles} (${percentage}%)`)
    this.addTerminalMessage(`Phase: ${this.gameState.currentPhase.toUpperCase()}`)
  }

  showHint() {
    const hints = [
      "Try clicking on puzzle items to activate them",
      "Some puzzles require specific code syntax",
      "Look for patterns in the error messages",
      "Interactive puzzles often have visual cues",
      "Advanced puzzles test deep programming knowledge",
      "Check the console for additional clues",
    ]
    const randomHint = hints[Math.floor(Math.random() * hints.length)]
    this.addTerminalMessage(`HINT: ${randomHint}`)
  }

  solvePuzzle(puzzleId) {
    this.gameState.solvedPuzzles++

    // Determine category based on puzzle ID or use a mapping
    if (puzzleId.includes("programming") || window.programmingPuzzles?.some((p) => p.id === puzzleId)) {
      this.gameState.puzzleCategories.programming.solved++
    } else if (puzzleId.includes("interactive") || window.interactivePuzzles?.some((p) => p.id === puzzleId)) {
      this.gameState.puzzleCategories.interactive.solved++
    } else {
      this.gameState.puzzleCategories.advanced.solved++
    }

    this.updateProgress()
    this.checkPhaseTransition()

    console.log(`[v0] Puzzle solved: ${puzzleId}`)
    console.log(`[v0] Progress: ${this.gameState.solvedPuzzles}/${this.gameState.totalPuzzles}`)
  }

  updateProgress() {
    const progressFill = document.getElementById("progressFill")
    const progressText = document.getElementById("progressText")

    const percentage = (this.gameState.solvedPuzzles / this.gameState.totalPuzzles) * 100

    if (progressFill) {
      progressFill.style.width = `${percentage}%`
    }
    if (progressText) {
      progressText.textContent = `${this.gameState.solvedPuzzles}/${this.gameState.totalPuzzles} SYSTEMS RESTORED`
    }
  }

  checkPhaseTransition() {
    if (this.gameState.solvedPuzzles >= this.gameState.totalPuzzles) {
      this.showCompletionCelebration()
    } else if (this.gameState.solvedPuzzles >= this.gameState.totalPuzzles * 0.5) {
      this.startRepairPhase()
    }
  }

  startRepairPhase() {
    if (this.gameState.currentPhase === "corruption") {
      this.gameState.currentPhase = "repair"
      this.addTerminalMessage("=== REPAIR PHASE INITIATED ===")
      this.addTerminalMessage("System corruption decreasing...")

      // Start fixing visual elements
      this.beginVisualRepairs()
    }
  }

  beginVisualRepairs() {
    const elements = ["header", "nav", "hero"]
    elements.forEach((elementId, index) => {
      setTimeout(() => {
        const element = document.getElementById(elementId)
        if (element) {
          element.classList.remove("glitched")
          element.classList.add("fixed")
        }
      }, index * 2000)
    })
  }

  showCompletionCelebration() {
    this.gameState.currentPhase = "complete"

    // Create celebration overlay
    const celebration = document.createElement("div")
    celebration.className = "completion-celebration"
    celebration.innerHTML = `
      <div class="celebration-content">
        <h1 class="celebration-title">🎉 SYSTEM FULLY RESTORED! 🎉</h1>
        <p class="celebration-text">Congratulations! You've solved all 54 puzzles!</p>
        <div class="final-stats">
          <div class="stat">Programming Puzzles: ${this.gameState.puzzleCategories.programming.solved}/${this.gameState.puzzleCategories.programming.total}</div>
          <div class="stat">Interactive Puzzles: ${this.gameState.puzzleCategories.interactive.solved}/${this.gameState.puzzleCategories.interactive.total}</div>
          <div class="stat">Advanced Puzzles: ${this.gameState.puzzleCategories.advanced.solved}/${this.gameState.puzzleCategories.advanced.total}</div>
        </div>
        <button class="restart-btn" onclick="location.reload()">Start New Challenge</button>
      </div>
    `

    document.body.appendChild(celebration)

    // Add celebration effects
    this.createFireworks()

    console.log("[v0] All puzzles completed! System fully restored!")
  }

  createFireworks() {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const firework = document.createElement("div")
        firework.className = "firework"
        firework.style.left = Math.random() * 100 + "%"
        firework.style.top = Math.random() * 100 + "%"
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        document.body.appendChild(firework)

        setTimeout(() => firework.remove(), 2000)
      }, i * 100)
    }
  }

  addConsoleClues() {
    console.log("%c🔍 GLITCHY MYSTERY WEBSITE - PUZZLE EDITION", "color: #00ff00; font-size: 18px; font-weight: bold;")
    console.log("%c54 challenging puzzles await your solution!", "color: #ffff00; font-size: 14px;")
    console.log("%cClick the logo to access the terminal", "color: #ffff00;")
    console.log("%cSolve programming paradigm challenges", "color: #ffff00;")
    console.log("%cComplete interactive repair tasks", "color: #ffff00;")
    console.log("%cConquer advanced system puzzles", "color: #ffff00;")
    console.log("%cRestore the entire system!", "color: #ffff00;")
  }
}

// Initialize game when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.gameEngine = new GameEngine()
})
