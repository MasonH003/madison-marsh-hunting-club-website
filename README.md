# madison-marsh-hunting-club-website

## Contributors
Student Developers: Mason Hall, Horacio Trujillo
Client: Tim Sauer 

### Project Description
Welcome to the Madison Marsh Hunting Club website project this project was created for the CS496 Capstone Project at University of Loyola, Maryland, 2024.

### Project Information
https://1drv.ms/x/s!AnLnqwjfpbpJg4VCE--5bVZ9sW8H0A?e=ZJJJwV

### User Manual
[Link to User Manual](/UserManual.md)

### Installation Instructions

Download:
https://code.visualstudio.com/

- Once installed, copy github repo into a vscode project.

Download:
https://nodejs.org/en/download/

- After downloading the above, check to see if node is installed using commands in cmd terminal and then in the terminal of the project after copying this repo from github into vscode:
```
node -v
npm -v
```
- Download dependencies by copying and pasting each of these commmands in the terminal: (IF THERE IS AN OPTION TO DOWNLOAD ALL NECESSARY DEPENDENCIES (Y) DO THIS!!) if not:
```
npm i -D daisyui@latest
npm install flowbite flowbite-react
npm install @supabase/supabase-js @supabase/auth-ui-react @supabase/auth-ui-shared
npm i react-router-dom
npm install -D tailwindcss postcss autoprefixer
```

### How to Run

- Run command: make sure you are in the right directory
```
cd madison-marsh
npm run dev
```
- Click the localhost link that pops up in the terminal and if everything ran correctly the website should pop up in your default browser.

### How to Test
```
npm i -D vitest

// download vscode Vitest snippets extension (dein software)

// click (y) to download vitest ui if prompted

npm i -D @testing-library/react@14.2.0
npm i -D jsdom@24.0.0
npm i -D @testing-library/jest-dom

// COMMANDS:

npm run test
npm run test:ui


```
