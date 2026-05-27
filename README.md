# 🕐 Circular Animated Clock

A beautiful, minimal analog-style clock built with pure HTML, CSS, and JavaScript. It displays the current time using three animated SVG circles for hours, minutes, and seconds — each with a glowing dot indicator.

---

## ✨ Features

- **Live time display** — updates every second in real time
- **Animated SVG rings** — circular progress arcs for hours, minutes, and seconds
- **Glowing dot indicators** — a neon-colored dot rotates around each ring
- **12-hour format** — with AM/PM label
- **Zero dependencies** — pure HTML, CSS, and JavaScript, no libraries or frameworks

---


## 🗂️ Project Structure

```
Digital_Clock/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # Clock logic and time updates
└── README.md       # Project documentation
```

---


## 🛠️ How It Works

- **SVG `stroke-dashoffset`** — each ring's colored arc is drawn using SVG circle stroke animations. The `strokeDashoffset` value is calculated based on the current time to fill the arc proportionally.
- **Dot rotation** — a CSS `::before` pseudo-element acts as the glowing dot and is rotated using `transform: rotate(deg)` based on the current time value.
- **`defer` attribute** — the script uses `defer` so the DOM is fully loaded before the clock initializes.
- **Immediate render** — `updateClock()` runs once on load before the 1-second interval starts, so there's no blank flash on page open.

---

## 🎨 Color Scheme

| Ring     | Color     | Hex       |
|----------|-----------|-----------|
| Hours    | Pink/Red  | `#ff2972` |
| Minutes  | Yellow    | `#fee800` |
| Seconds  | Green     | `#04fc43` |
| Background | Dark    | `#2f363e` |

---

## 🧰 Built With

- HTML5
- CSS3 (SVG styling, CSS variables, Google Fonts - Poppins)
- Vanilla JavaScript (Date API, setInterval)

---

