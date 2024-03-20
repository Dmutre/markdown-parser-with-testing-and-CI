# MTRPZ-Lab-1

# Description
This console app convert markdown to html and escape. Can be called in console and take parameters, described below. App supports only **bold**, _italic_, `monospaced` and ```**preformatted markdown**```. Also it write a paragraphs.

# Assembling
To **prepare the project to launching** you need to have installed **Node.js**. 
For the first: clone repository to your PC:
```bash
git clone https://github.com/Dmutre/MTRPZ-Lab-1.git
```
You don`t need to install packages, **they are for developing**.

# Launching
In the directory, where you cloned the repo, you need to start app.js file via node.js:
```bash
node ./app.js <file_with_markdown>
```
After launching console programm will output in console the result of working. If you want to output the result into exact file, use this command:
```bash
node ./app <file_with_markdown> --out <out_put_file>
```
For converting markdown to escape you can add flag --format and input one of available format: _html_ or _escape_:
```bash
node ./app <file_with_markdown> --out <out_put_file> --format html
```

**As default parser will set html format**

# Example
There are test.md in the directory. To parse it and get result in console write this command: 
```bash
node ./app.js ./test.md
```
To get result in exact output file:
```bash
node ./app.js ./test.md --out ./output.html
```

# Revert commit
[Reverted commit](https://github.com/Dmutre/markdown-parser-with-testing-and-CI/commit/b39622554e4ac7819ff277585ba2875e9211db77)
# Commit with failed test
[Failed testing](https://github.com/Dmutre/markdown-parser-with-testing-and-CI/commit/62996f8d0a9e22a46c383e1dd2a7a4e224ea7b6f)

# Conclusion
Testing is essential for ensuring software reliability and quality. While it may require extra time initially, it ultimately saves time by catching bugs early and preventing issues in production. Testing boosts developer confidence, speeds up development through early bug detection, and serves as documentation for the codebase. In short, while testing adds overhead, its benefits in terms of improved software quality and accelerated development outweigh the initial investment.