# MTRPZ-Lab-1

# Description
This console app convert markdown to html. Can be called in console and take parameters, described below. App supports only **bold**, _italic_, `monospaced` and ```**preformatted markdown**```. Also it write a paragraphs.

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
[Reverted commit](https://github.com/Dmutre/MTRPZ-Lab-1/commit/a96337e3b4be27122b7527e9097b66cc9cb28b4c)
