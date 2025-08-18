window.VisualEffects = {
  init() {
    this.setupGlobalEffects();
    this.createParticleSystem();
    this.setupSoundEffects();
  },

  setupGlobalEffects() {
    // Add subtle background animations
    this.createFloatingParticles();
    this.setupHoverEffects();
    this.createGlitchEffects();
  },

  createFloatingParticles() {
    const particleContainer = document.createElement("div");
    particleContainer.id = "floatingParticles";
    particleContainer.style.position = "fixed";
    particleContainer.style.top = "0";
    particleContainer.style.left = "0";
    particleContainer.style.width = "100%";
    particleContainer.style.height = "100%";
    particleContainer.style.pointerEvents = "none";
    particleContainer.style.zIndex = "1";

    document.body.appendChild(particleContainer);

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = "2px";
      particle.style.height = "2px";
      particle.style.background = "#00ff00";
      particle.style.borderRadius = "50%";
      particle.style.opacity = "0.3";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animation = `floatParticle ${
        10 + Math.random() * 20
      }s linear infinite`;
      particle.style.animationDelay = Math.random() * 10 + "s";

      particleContainer.appendChild(particle);
    }
  },

  setupHoverEffects() {
    // Add hover effects to interactive elements
    document.addEventListener("mouseover", (e) => {
      if (e.target.classList.contains("puzzle-item")) {
        this.createHoverRipple(e.target, e.clientX, e.clientY);
      }
    });
  },

  createHoverRipple(element, x, y) {
    const ripple = document.createElement("div");
    const rect = element.getBoundingClientRect();

    ripple.style.position = "absolute";
    ripple.style.width = "20px";
    ripple.style.height = "20px";
    ripple.style.background = "rgba(0, 255, 0, 0.3)";
    ripple.style.borderRadius = "50%";
    ripple.style.left = x - rect.left - 10 + "px";
    ripple.style.top = y - rect.top - 10 + "px";
    ripple.style.animation = "rippleExpand 0.6s ease-out";
    ripple.style.pointerEvents = "none";

    element.style.position = "relative";
    element.appendChild(ripple);

    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  },

  createGlitchEffects() {
    // Random glitch effects on corrupted elements
    setInterval(() => {
      const glitchedElements = document.querySelectorAll(".glitched");
      if (glitchedElements.length > 0) {
        const randomElement =
          glitchedElements[Math.floor(Math.random() * glitchedElements.length)];
        this.triggerGlitch(randomElement);
      }
    }, 5000);
  },

  triggerGlitch(element) {
    element.style.animation = "none";
    setTimeout(() => {
      element.style.animation = "sectionGlitch 0.5s ease-in-out";
    }, 10);
  },

  createParticleSystem() {
    // Advanced particle system for special effects
    this.particles = [];
    this.setupParticleCanvas();
  },

  setupParticleCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = "particleCanvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "999";

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.animateParticles(ctx, canvas);
  },

  animateParticles(ctx, canvas) {
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      this.particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.01;

        if (particle.life <= 0) {
          this.particles.splice(index, 1);
          return;
        }

        ctx.globalAlpha = particle.life;
        ctx.fillStyle = particle.color;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();
  },

  createSuccessExplosion(x, y) {
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        size: Math.random() * 4 + 2,
        color: ["#00ff00", "#ffff00", "#ff0000", "#00ffff"][
          Math.floor(Math.random() * 4)
        ],
        life: 1,
      });
    }
  },

  setupSoundEffects() {
    // Create audio context for sound effects
    try {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      this.setupSounds();
    } catch (e) {
      console.log("[v0] Audio not supported");
    }
  },

  setupSounds() {
    // Create simple beep sounds for interactions
    this.sounds = {
      click: this.createBeep(800, 0.1),
      success: this.createBeep(1200, 0.2),
      error: this.createBeep(400, 0.3),
    };
  },

  createBeep(frequency, duration) {
    return () => {
      if (!this.audioContext) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + duration
      );

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    };
  },

  playSound(soundName) {
    if (this.sounds && this.sounds[soundName]) {
      this.sounds[soundName]();
    }
  },
};

// Add visual effect styles
const effectStyles = `
@keyframes floatParticle {
    0% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-20px) translateX(10px); }
    50% { transform: translateY(0px) translateX(-10px); }
    75% { transform: translateY(20px) translateX(5px); }
    100% { transform: translateY(0px) translateX(0px); }
}

@keyframes rippleExpand {
    0% { transform: scale(1); opacity: 0.3; }
    100% { transform: scale(4); opacity: 0; }
}
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = effectStyles;
document.head.appendChild(styleSheet);

// Initialize visual effects when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.VisualEffects.init();
});
