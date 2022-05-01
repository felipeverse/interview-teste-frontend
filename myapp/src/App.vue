<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Roboto:wght@100&display=swap');

:root {
  --primary: #8A4CFC;
  --primary-alt: #7021e7;
  --light: #EEEEEE;
  --light-alt: #F8F8F8;
  --grey: #888888;
  --dark: #131A26;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}

body {
  background-color: var(--light);
}

main {
  width: 100vw;
  overflow: hidden;
}

input, button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
}

.button {
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--primary);
  color: #FFF;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.4s;
}

.button:hover {
  background-color: var(--primary-alt);
}

.button.button-outline {
  background-color: transparent;
  border: 2px solid var(--primary);
  padding: 6px 14px;
  color: var(--primary);
}

.button.button-outline:hover {
  color: #FFF;
  background-color: var(--primary);
}

.button.button-small {
  padding: 4px 8px;
  font-size: 18px;
  font-weight: 600;
}

.button.button-alert {
  background-color: crimson;
}

.button-group {
  display: flex;
  margin: 0 -8px;
}

.button-group.group-end {
  justify-content: flex-end;
}

.button-group .button {
  margin: 0px 8px;
}

header {
  display: block;
  padding: 16px;
  background-color: var(--dark);
}

Header h1 {
  color: #FFF;
  font-size: 28px;
}
</style>