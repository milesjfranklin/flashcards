var welcome_home = "<p id='front-side' onclick='myFunction()'>I'm glad you're here. Are you ready to learn?</p> <p id='back-side' onclick='myFunction_2()'>Always remember the wise words of Frederick Douglass: 'Knowledge makes a man unfit to be a slave.'</p>";

var laravel_flash = "<p id='front-side' onclick='myFunction()'>Laravel</p> <p id='back-side' onclick='myFunction_2()'>Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar'</p>";

var mvc = "<p id='front-side' onclick='myFunction()'>Model-view-controller</p> <p id='back-side' onclick='myFunction_2()'>Model-view-controller (usually known as MVC) is a software design pattern commonly used for developing user interfaces which divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user. This kind of pattern is used for designing the layout of the page.<br><br> Traditionally used for desktop graphical user interfaces (GUIs), this pattern has become popular for designing web applications. Popular programming languages like JavaScript, Python, Ruby, PHP, Java, C#, and Swift have MVC frameworks that are used for web or mobile application development straight out of the box.</p>";

var php_flash = "<p id='front-side' onclick='myFunction()'>PHP</p> <p id='back-side' onclick='myFunction_2()'>PHP is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.<br><br> PHP code may be executed with a command line interface (CLI), embedded into HTML code, or used in combination with various web template systems, web content management systems, and web frameworks. PHP code is usually processed by a PHP interpreter implemented as a module in a web server or as a Common Gateway Interface (CGI) executable. The web server outputs the results of the interpreted and executed PHP code, which may be any type of data, such as generated HTML code or binary image data. PHP can be used for many programming tasks outside of the web context, such as standalone graphical applications and robotic drone control. <br><br>The standard PHP interpreter, powered by the Zend Engine, is free software released under the PHP License. PHP has been widely ported and can be deployed on most web servers on almost every operating system and platform, free of charge. <br><br>The PHP language evolved without a written formal specification or standard until 2014, with the original implementation acting as the de facto standard which other implementations aimed to follow. Since 2014, work has gone on to create a formal PHP specification.<br><br>As of September 2019, over 60 percent of sites on the web using PHP are still on discontinued-'EOLed' version 5.6 or older; versions prior to 7.2 are no longer officially supported by The PHP Development Team, but security support is provided by third parties, such as Debian.<br><br><img style='background-color: white; max-width: 300px;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/1200px-MVC-Process.svg.png'></p>";


var myArray = [welcome_home, laravel_flash, mvc, php_flash ];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

document.getElementById("demo").innerHTML = randomItem;

function GetValue() {
	var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
	document.getElementById("demo").innerHTML = randomItem;
}

function myFunction() {
    document.getElementById("back-side").style.display = "block ";
    document.getElementById("front-side").style.display = "none ";
}

function myFunction_2() {
    document.getElementById("back-side").style.display = "none ";
    document.getElementById("front-side").style.display = "block ";
}