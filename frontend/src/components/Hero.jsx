import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mousePosition = { x: null, y: null };

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Track mouse movement for interactive effect
    window.addEventListener('mousemove', (e) => {
      mousePosition.x = e.x;
      mousePosition.y = e.y;
    });

    window.addEventListener('mouseout', () => {
      mousePosition.x = null;
      mousePosition.y = null;
    });

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
        this.distance = 0;
        this.color = `rgba(100, 181, 246, ${Math.random() * 0.8 + 0.2})`;
        this.angle = Math.random() * 2 * Math.PI;
        this.speed = 0.05 + Math.random() * 0.05;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Interactive effect with mouse
        if (mousePosition.x != null) {
          const dx = mousePosition.x - this.x;
          const dy = mousePosition.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (120 - distance) / 120;
            
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            
            this.x -= directionX;
            this.y -= directionY;
          } else {
            if (this.x !== this.baseX) {
              const dx = this.x - this.baseX;
              this.x -= dx / 20;
            }
            if (this.y !== this.baseY) {
              const dy = this.y - this.baseY;
              this.y -= dy / 20;
            }
          }
        } else {
          // Gentle floating movement
          this.angle += this.speed;
          this.x = this.baseX + Math.sin(this.angle) * 15;
          this.y = this.baseY + Math.cos(this.angle) * 15;
        }
      }
    }

    // Create particles
    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(150, (canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    // Draw connection lines between nearby particles
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 181, 246, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', (e) => {
        mousePosition.x = e.x;
        mousePosition.y = e.y;
      });
      window.removeEventListener('mouseout', () => {
        mousePosition.x = null;
        mousePosition.y = null;
      });
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.particleCanvas}></canvas>
      
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.intro}
        >
          <div className={styles.smallText}>Hello, I'm</div>
          <h1 className={styles.title}>Ayush Kumar</h1>
          <p className={styles.subtitle}>
            From pixel to backend — building sleek, smart, and scalable web apps
          </p>
          
          <motion.div 
            className={styles.techStack}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
          >
            {['React.js', 'Express.js', 'Node.js', 'MongoDB', 'API', 'DSA'].map((tech, index) => (
              <motion.span 
                key={tech} 
                className={styles.techBadge}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div 
            className={styles.buttons}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="https://drive.google.com/file/d/1mb2kk2bouD2qnHWF3e_d7y_x9YtZLs9o/view?usp=sharing" target='_blank' className={styles.primaryBtn}>Download Resume</a>
            <button onClick={scrollToProjects} className={styles.secondaryBtn}>
              View Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToProjects}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7 13 12 18 17 13"></polyline>
          <polyline points="7 6 12 11 17 6"></polyline>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;