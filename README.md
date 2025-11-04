# Section 5 – Refactoring Code Smells in Practice

**Identify code smells**: Review the code and look for patterns that may cause maintenance issues, reduce readability, or introduce potential bugs.

1. Mysterious varible names: at the top of the code there are declared varibles whose names are unclear what they do and how to use them.

2. Duplicated code: all 3 button event handlers functions have repeated code with the same purpose of updating the counter, website title, and background color.

3. Excessive comments: there is a comment for every line of code many of which explain obvious code. There are also repeated comments for code lines that essentially have the same function.

4. Primitive obsession: code uses strings for IDs and color values rather than objects.

5. Long function: setup() function handles everything- UI setup, event handling, and state updates.

**Refactor**: Apply **refactoring patterns** as described in Fowler’s _Refactoring_ book to improve the code.

1. Renamed varible (137): replaced varible names for what it represents/is used for.
   Ex: "c" -> "counter"
   "h" -> "HEADING"

2. Extract Function(106): Moved repeated "update UI after a change” logic into a single updateUI(); arithmetic goes through updateCount(delta) and resetCount().

3. Removed unnecessary comments: deleted all line by line comments. Kept limited and simple comments needed for clarification.

4. Replace Primitive with Object (174): centralized raw strings for IDs and colors into IDS and COLORS.

5. Introduce Parameter Object (140): Split setup() into mutliple functions. setup() now just lays out html, handleEvents() holds event listners for buttons, and helper functions manage buttons logic.
