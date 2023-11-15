**\_Deploy React App**

1. npm i gh-pages -D or --save-dev
2. Add below scripts
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
3. git init
4. git add .
5. git commit -m "initial commit"
6. git config --global user.email ""
7. git config --global user.name ""
8. git remote add origin <url>
9. add below code in package.json
   "homepage": "http://rahulraji18.github.io/react_app",
10. npm run deploy   
11. push code => git push -u origin master
