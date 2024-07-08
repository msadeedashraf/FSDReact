
https://angular.dev/

https://v17.angular.io/guide/what-is-angular


Play List by Angular
https://www.youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF

TypeScript Intro
https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh

Learning Angular
https://angular.dev/tutorials/first-app
Documnetation
https://angular.dev/overview

More Learning Resources
https://www.freecodecamp.org/learn/


setup
>npm install -g @angular/cli

to create a hello-world app
>ng new hello-world

if you get execution error 
 File C:\Users\sjokh\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this
system. For more information, see about_Execution_Policies

then open the power shell as an administrator and execute the following commands

>Get-ExecutionPolicy
>Set-ExecutionPolicy RemoteSigned

VS Code Extensions for Angular

Path Intellisense
Angular Snippets
Angular2-Switcher
Angular Files
REST Client
JSON to TS
Angular Language Service
Angular2-Inline
TSLint
Material Icon Theme

https://medium.com/@sasidharansd/top-10-must-have-vscode-extensions-for-angular-developers-in-2022-5a76edfdeeba


go to the project folder 
>ng serve

to setup the hello-world page
go to 
app.component.html

remove all the text and replace it with 
<h1>Hello World</h1>
<h1>{{title}}</h1>
<h1>{{50+60}}</h1>

go to app.component.css 
add 
h1 {
    color: blue;
}


