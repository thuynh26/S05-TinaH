# Section 5 – Refactoring Code Smells in Practice

**Identify code smells**: Review the code and look for patterns that may cause maintenance issues, reduce readability, or introduce potential bugs.

1. Mysterious varible names: at the top of the code there are declared varibles whose names are unclear what they do and how to use them.

2. Duplicated code: all 3 button event handlers functions have repeated code with the same purpose of updating the counter, website title, and background color.

3. Excessive comments: there is a comment for every line of code many of which explain obvious code. There are also repeated comments for code lines that essentially have the same function.

4. Primitive obsession: code uses strings for IDs and color values rather than objects.

**Refactor**: Apply **refactoring patterns** as described in Fowler’s _Refactoring_ book to improve the code.
