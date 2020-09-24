<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
export default {
  name: "App"
};
</script>

<style>
@media (max-width: 768px) {
  .name {
    writing-mode: horizontal-tb;
    margin-top: 30px;
    margin-left: calc(15px + (240 - 15) * ((100vw - 300px) / (2300 - 300)));
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
}

.page {
  margin-left: calc(15px + (240 - 15) * ((100vw - 300px) / (2300 - 300)));
}

:root {
  --color-mode: "light";
  --color-dark: black;
  --color-dark-alpha: rgba(0, 0, 0, 0.1);
  --color-light: #efefef;
  --color-light-alpha: rgba(255, 255, 255, 0.9);
  --icon-sun-filter: invert(0.61) sepia(0.8) saturate(5) hue-rotate(0deg)
    brightness(0.92);
  --icon-moon-filter: invert(0.75);
  --background: #efefef;
  --text-color: #141414;
  --button-icon: var(--icon-moon);
  --button-icon-filter: var(--icon-moon-filter);
  --button-background: var(--color-dark);
  --button-color: var(--color-light);
  --border-color: var(--color-dark-alpha);
}
html,
body {
  background: var(--background);
  color: var(--text-color);
  transition: background 500ms ease-in-out, color 200ms ease;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-mode: "dark";
  }

  :root:not([data-user-color-scheme]) {
    --background: var(--color-dark);
    --text-color: var(--color-light);
    --button-icon: var(--icon-sun);
    --button-icon-filter: var(--icon-sun-filter);
    --button-background: var(--color-light);
    --button-color: var(--color-dark);
    --border-color: var(--color-light-alpha);
  }
}

[data-user-color-scheme="dark"] {
  --background: var(--color-dark);
  --text-color: var(--color-light);
  --button-icon: var(--icon-sun);
  --button-icon-filter: var(--icon-sun-filter);
  --button-background: var(--color-light-alpha);
  --button-color: var(--color-dark);
  --border-color: var(--color-light-alpha);
}
</style>
