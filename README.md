# Practice Js
Wed, 11.15.2023

### Target

1. Understand & apply knowledge HTML/CSS/JavaScript (with ES6 syntax)
2. DOM manipulation, form validation
3. Understand how asynchronous code works & apply in practice (API call or any place we can mock API in code).
4. Get familiar with DevTools (e.g Google Chrome DevTools) for debugging issues (breakpoint,  log, etc..).
5. Deploy to the hosting (with help from supporter) 
6. Use git to control release / implement.

### Technical

1. Environment: Es6 js, Parcel, Husky, Eslint - airbnb, Prettier, Commitlint. 
2. Deploy: Vercel
3. Mock Server: https://github.com/typicode/json-server

### Requirement
* **Git**: Create a repo. Work with the ***‘dev’*** branch. Merge to ***`main`*** branch and setup deploy ***after*** first review.
* **Figma design**: [[login / signup]](https://www.figma.com/file/c2YYHsTbufFwVePbfbrXz5/Login-%26-Signup-Form-Android-By-VSL-(Community)?type=design&node-id=0-1&mode=design&t=kIoeJiRw9Btx1fD5-0). [[calculator]](https://www.figma.com/file/ld5JFnxdS12r0p4NwgaYIJ/Calculator-(Community)?type=whiteboard&node-id=0%3A3&t=1L45wZHaYQKbmzGo-1)
* **Practice requirements**:
    * Create a mock server with json server. Server can:
        * Write / read user info.
    * Create a login page. If the user is not logged in, direct to the login page. 
    When user click login:
        * Show error if any input is wrong.
        * Show error if user/password do not match with DB.
    * Create a register page. If user click register, direct to the register page. 
    When click register button:
        * If user name | email is already available in DB, show error text (top of input)
    * Create a homepage with a calculator. Only available for users who logged in. Calculator can basically calculate. Press button, not input from keyboard.
    * ***With all forms***: Show error if value of user name/ email / phone field does not match manual rule.
    * Login success will cache in 5min.
    * When login / register. Add 3000ms delay when send a request to server, show loading in Login/Register button and disable all input when waiting  for server’s response.






