"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionUploadedImage() {
  const containerRef = useRef(null);
  const p5InstanceRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(5);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initP5 = async () => {
      if (!window.p5) {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"
        );
      }

      // Initial config
      const detail = 6;
      const width = 500;
      const height = 500;
      let particles = [];
      let grid = [];
      let img;
      let particleImage;
      let ctx;
      let currentRenderStep = 5;

      // Create a new p5 instance
      p5InstanceRef.current = new window.p5((p) => {
        // Particle class definition
        class Particle {
          constructor(x, y) {
            this.x = x || p.random(width);
            this.y = y || p.random(height);
            this.speed = 0;
            this.v = p.random(0, 0.7);
          }

          update() {
            if (grid && grid.length && this.y < height && this.x < width) {
              const gridY = Math.floor(this.y / detail);
              const gridX = Math.floor(this.x / detail);

              if (
                gridY >= 0 &&
                gridY < grid.length &&
                gridX >= 0 &&
                gridX < grid[gridY].length
              ) {
                this.speed = grid[gridY][gridX] * 0.97;
              }
            }
            this.x += (1 - (this.speed || 0)) * 3 + this.v;

            if (this.x > width) {
              this.x = 0;
            }
          }

          draw() {
            p.image(particleImage, this.x, this.y);
          }
        }

        p.preload = () => {
          img = p.loadImage(
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/Meisje_met_de_parel.jpg?3"
          );
        };

        p.setup = () => {
          const canvas = p.createCanvas(width, height);
          ctx = canvas.drawingContext;
          p.pixelDensity(1);

          // Create particle image
          particleImage = p.createGraphics(8, 8);
          particleImage.fill(255);
          particleImage.noStroke();
          particleImage.circle(4, 4, 4);

          // Setup initial state
          goToStep5();
        };

        p.draw = () => {
          // Run appropriate step
          if (currentRenderStep === 5) {
            step5();
          } else if (currentRenderStep === 6) {
            step6();
          }
        };

        // Make methods available outside p5 instance
        p.changeStep = (step) => {
          currentRenderStep = step;

          if (step === 5) {
            goToStep5();
          } else if (step === 6) {
            goToStep6();
          }
        };

        // Step 5 functions
        const goToStep5 = () => {
          p.clear();
          ctx.globalAlpha = 1;
          p.loop();
          p.image(img, 0, 0, width, height);
          p.loadPixels();
          p.clear();
          p.noStroke();

          grid = [];
          for (let y = 0; y < height; y += detail) {
            let row = [];
            for (let x = 0; x < width; x += detail) {
              const pixelIndex = (y * width + x) * 4;
              const r = p.pixels[pixelIndex];
              const g = p.pixels[pixelIndex + 1];
              const b = p.pixels[pixelIndex + 2];
              const c = p.color(r, g, b);
              const brightness = p.brightness(c) / 100;

              p.fill(brightness * 255);
              p.rect(x, y, detail, detail);
              row.push(brightness);
            }
            grid.push(row);
          }

          particles = [];
          for (let i = 0; i < 3000; i++) {
            particles.push(new Particle(null, (i / 3000) * height));
          }
        };

        const step5 = () => {
          p.clear();
          particles.forEach((particle) => {
            particle.update();
            ctx.globalAlpha = particle.speed * 0.3;
            particle.draw();
          });
        };

        // Step 6 functions
        const goToStep6 = () => {
          p.clear();
          ctx.globalAlpha = 1;
          p.loop();
          p.image(img, 0, 0, width, height);
          p.loadPixels();
          p.clear();
          p.noStroke();

          grid = [];
          for (let y = 0; y < height; y += detail) {
            let row = [];
            for (let x = 0; x < width; x += detail) {
              const pixelIndex = (y * width + x) * 4;
              const r = p.pixels[pixelIndex];
              const g = p.pixels[pixelIndex + 1];
              const b = p.pixels[pixelIndex + 2];
              const c = p.color(r, g, b);
              const brightness = p.brightness(c) / 100;
              row.push(brightness);
            }
            grid.push(row);
          }

          particles = [];
          for (let i = 0; i < 3000; i++) {
            particles.push(new Particle(null, (i / 3000) * height));
          }
        };

        const step6 = () => {
          ctx.globalAlpha = 0.05;
          p.fill(0);
          p.rect(0, 0, width, height);
          ctx.globalAlpha = 0.2;

          particles.forEach((particle) => {
            particle.update();
            ctx.globalAlpha = particle.speed * 0.3;
            particle.draw();
          });
        };
      }, containerRef.current);

      // Set initial step
      setTimeout(() => {
        if (p5InstanceRef.current) {
          p5InstanceRef.current.changeStep(currentStep);
        }
      }, 500);
    };

    initP5();

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
    };
  }, []);

  // Update when currentStep changes
  useEffect(() => {
    if (p5InstanceRef.current && p5InstanceRef.current.changeStep) {
      p5InstanceRef.current.changeStep(currentStep);
    }
  }, [currentStep]);

  // Script loader function
  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 py-20">
      <div className="loading loading01 text-center text-xl flex items-end gap-2">
        <span>A</span>
        <span>n</span>
        <span>a</span>
        <span>l</span>
        <span>i</span>
        <span>z</span>
        <span>a</span>
        <span>n</span>
        <span>d</span>
        <span>o</span>
        <span className="text-xl ">.</span>
        <span className="text-xl ">.</span>
        <span className="text-xl ">.</span>
      </div>
      <div ref={containerRef}></div>
      <div className="flex gap-2 justify-center">
        <button
          className={`px-4 py-2 ${
            currentStep === 5 ? "bg-blue-600" : "bg-blue-500"
          } text-white rounded`}
          onClick={() => setCurrentStep(5)}
        >
          Variable Opacity
        </button>
        <button
          className={`px-4 py-2 ${
            currentStep === 6 ? "bg-blue-600" : "bg-blue-500"
          } text-white rounded`}
          onClick={() => setCurrentStep(6)}
        >
          Fade Effect
        </button>
      </div>
    </div>
  );
}
