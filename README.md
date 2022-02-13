## Question: Explain the difference between shallow clone/copy and deep clone/copy, then implement a function to deep clone an object.

### First of all, what is a clone/copy?

- A copy just looks like the old thing, but isn’t. When you change the copy, you expect the original thing to stay the same, whereas the copy changes.

- In programming, we store values in variables. Making a copy means that you initiate a new variable with the same value(s). However, there is a big potential pitfall to consider: deep copying vs. shallow copying. A **deep** copy means that all of the values of the new variable are **copied and disconnected from the original variable**. A **shallow** copy means that **certain (sub-)values are still connected to the original variable**.[^1]

- Examples of shallow coping

  1. `var newObject = oldObject`
  2. `var newObject = [...oldObject]`
  3. `var newObject = Object.assign({}, oldObject)`

>

- Examples of deep coping
  1.  Basic version which will not work for functions and circular reference situation. `JSON.parse(JSON.stringify(originalObj))`
  2.  Advanced version which will recursively traverse the original Object "Please check deepCloneAdvanced function in deepClone.mjs file"

---

### - Written in JavaScript

### - Please use this command to run the files `node .\index.mjs`

### - This project is implemented using [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), minimum node version is 13.2.0

[^1]:
    [Reference1](https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/)
    [Reference2](https://javascript.plainenglish.io/write-a-better-deep-clone-function-in-javascript-d0e798e5f550)
