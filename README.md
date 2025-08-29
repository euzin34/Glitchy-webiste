404: The Repair
Welcome to 404: The Repair, a gamified web platform designed to help beginner programmers learn coding fundamentals by fixing a deliberately "broken" website. Inspired by the chaos of early coding struggles, this project transforms debugging into an interactive puzzle-solving experience. Built for a hackathon, it features a retro, glitchy interface with programming challenges across three categories: Programming Paradigms, Interactive Repairs, and Advanced Systems.
Overview

Project Name: 404: The Repair
Purpose: Teach programming concepts through hands-on puzzles in a fun, engaging way.
Tech Stack: HTML, CSS, JavaScript
Status: Hackathon prototype (48-hour build)
Target Audience: Beginner programmers, coding enthusiasts, and educators

The website starts with a "SYSTEM MALFUNCTION" screen, displaying corrupted text and a progress tracker (e.g., "0/54 SYSTEMS RESTORED"). Users solve puzzles to restore the site, earning points and unlocking new challenges.
Features
Puzzle Categories

Programming Paradigms.exe

Focus: Basic syntax and structure.
Puzzles:
Fix HTML Tag Hello World (Easy)
CSS Color Property color: ; (Easy)
Variable Declaration let name = ; (Easy)
Image Tag (Easy)
Font Size font-size: ; (Easy)
Function Call console.( ); (Easy)
Link Tag "Click me" (Easy)
Background Color background-color: ; (Easy)
Array Declaration let arr = ; (Easy)
List Item <li>Item</li> (Easy)
For Loop for(let i=0; i<5; ) {} (Medium)




Interactive Repairs.exe

Focus: Interactive coding tasks.
Puzzles:
Color Changer (Type: click, Easy)
Hover Reveal (Type: hover, Easy)
Text Input (Type: input, Easy)
Drag & Drop (Type: drag, Medium) - Includes drag-and-drop interface to reorder elements.
Button Sequence (Type: sequence, Medium)
Memory Game (Type: memory, Medium)
Value Slider (Type: slider, Medium)
CSS Maze (Type: maze, Hard)
Code Breaker (Type: code, Hard)
Perfect Timing (Type: timing, Hard)
Pattern Match (Type: pattern, Hard)




Advanced Systems.exe

Focus: Advanced programming concepts.
Puzzles:
Regex Pattern Match (Medium) - Create a regex pattern to validate email addresses.
Promise Chain Repair (Medium) - Fix a broken promise chain.
Flexbox Alignment (Medium) - Center content both horizontally and vertically.
DOM Navigation (Medium) - Navigate the DOM tree efficiently.
Closure Memory Leak (Hard) - Fix a closure that creates a memory leak.
Event Bubble Control (Hard) - Implement event delegation.
Prototype Inheritance (Hard) - Create a proper inheritance chain.





Additional Features

Progress Tracking: Displays systems restored (e.g., "1/54 SYSTEMS RESTORED").
Hints: Provided for some puzzles (e.g., "Complete the log method" for console.log();).
Visual Effects: Glitchy animations, red borders, and corrupted text for immersion.
Navigation: Basic menu with Home, About, and Contact links.


Installation

Clone the Repository

git clone https://github.com/yourusername/404-the-repair.git
Note: Replace yourusername with the actual GitHub username and repository link if hosted.


Navigate to the Project Directory

cd 404-the-repair


Open the Project

Open index.html in a web browser (e.g., Chrome, Firefox).
No server is required as it runs client-side with HTML, CSS, and JavaScript.


Prerequisites

A modern web browser.
No additional dependencies or build tools needed.



Usage

Launch the Website

Open index.html to see the "SYSTEM MALFUNCTION" screen.


Select a Puzzle

Click on a puzzle (e.g., "Fix HTML Tag Hello World") to start.
For interactive puzzles like "Drag & Drop," follow on-screen instructions to reorder elements.


Solve the Puzzle

Enter or adjust code as prompted (e.g., complete console.log();).
Use hints if provided (e.g., via a popup with a text input).


Track Progress

The counter updates (e.g., from "0/54" to "1/54") upon successful completion.


Explore Categories

Move between Programming Paradigms, Interactive Repairs, and Advanced Systems to tackle varied challenges.



Development Details

Tech Stack:

HTML: Structures the page and puzzle interfaces.
CSS: Handles glitch effects (e.g., @keyframes for flickering text, red borders) and layout.
JavaScript: Manages puzzle logic, validation, and interactivity (e.g., drag-and-drop, input checks).


Build Process:

Developed in 48 hours during a hackathon.
Used local storage to track user progress and puzzle completion.
Tested across Chrome and Firefox for compatibility.


File Structure:

index.html: Main HTML file with the interface.
styles.css: CSS file for styling and animations.
script.js: JavaScript file for puzzle logic and interactivity.



Challenges We Ran Into

Time Constraints: With only 48 hours, we prioritized core puzzles over advanced features like a leaderboard.
Glitchy UI Balance: Ensuring the site looked broken but usable required multiple iterations of CSS animations.
Puzzle Validation: Writing JavaScript to validate user inputs (e.g., console.log();) was challenging; initial versions had false positives.
Browser Compatibility: Glitch effects varied across browsers, requiring adjustments to CSS vendor prefixes.
Team Coordination: Balancing tasks among team members with varying JavaScript experience was tricky but resolved with pair-programming.

Accomplishments We're Proud Of

Completed a functional prototype with 20+ puzzles across three difficulty levels.
Created an immersive glitchy aesthetic that enhances the learning experience.
Implemented interactive elements like drag-and-drop and text input puzzles.
Received positive feedback from early testers on the gamified approach.

What We Learned

Mastered CSS animations for glitch effects and JavaScript for dynamic puzzle validation.
Learned to balance chaotic design with usability for an engaging user experience.
Improved teamwork and problem-solving under tight deadlines.
Gained insights into beginner-friendly coding education through gamification.

What's Next for 404: The Repair

More Puzzles: Add challenges like JavaScript event handling or CSS grid layouts.
Backend Integration: Implement a simple server (e.g., Node.js) for user accounts and progress saving.
Mobile Optimization: Enhance responsiveness for mobile devices.
Community Feedback: Incorporate user suggestions from hackathon testers.
Educational Partnerships: Explore collaboration with coding bootcamps or schools.

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature-name").
Push to the branch (git push origin feature-name).
Open a pull request.

License
MIT License (or specify your preferred license if applicable).

Contact
Email: euzinkc3@gmai.com


Built with passion during a hackathon on August 29, 2025. Try fixing the glitches and level up your coding skills!
