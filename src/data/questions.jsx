const QUESTIONS_BY_SUBJECT = {

    science : [
        { 
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "H2"],
            answer: "H2O"
        },
        { 
            question: "What planet is known as the Red Planet?",
            options: ["Mars", "Earth", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        { 
            question: "What is the chemical formula for table salt?",
            options: ["NaCl", "KCl", "MgCl2", "CaCl2"],
            answer: "NaCl"
        },
        { 
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
            answer: "Nitrogen"
        },
        { 
            question: "What type of bond involves the sharing of electron pairs between atoms?",
            options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
            answer: "Covalent bond"
        },
        { 
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"],
            answer: "Mitochondrion"
        },
        { 
            question: "What is the process by which plants make their food using sunlight?",
            options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
            answer: "Photosynthesis"
        },
        { 
            question: "Which planet is known for having a ring system?",
            options: ["Mercury", "Venus", "Saturn", "Mars"],
            answer: "Saturn"
        },
        { 
            question: "What is the main gas found in the exhaled air?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide"
        },
        { 
            question: "What is the boiling point of water at sea level?",
            options: ["0°C", "50°C", "100°C", "150°C"],
            answer: "100°C"
        },
        { 
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Pt"],
            answer: "Au"
        },
        { 
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Earth", "Mars", "Mercury"],
            answer: "Mercury"
        },
        { 
            question: "Rate the test from the scale of 1 to 4 (1 is bad and 4 is excellent)",
            options: [1, 2, 3, 4],
            answer: ""
        }
    ],
    
    math : [
        { 
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        { 
            question: "What is the square root of 16?",
            options: ["2", "4", "8", "16"],
            answer: "4"
        },
        { 
            question: "What is the value of π (pi) up to two decimal places?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            answer: "3.14"
        },
        { 
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            answer: "8"
        },
        { 
            question: "What is the formula for the area of a circle?",
            options: ["πr²", "2πr", "πd", "r²"],
            answer: "πr²"
        },
        { 
            question: "What is 7 multiplied by 6?",
            options: ["36", "42", "48", "54"],
            answer: "42"
        },
        { 
            question: "What is the value of 2 raised to the power of 5?",
            options: ["16", "32", "64", "128"],
            answer: "32"
        },
        { 
            question: "What is the sum of the angles in a triangle?",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            answer: "180 degrees"
        },
        { 
            question: "What is the derivative of x²?",
            options: ["x", "2x", "x²", "2x²"],
            answer: "2x"
        },
        { 
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            answer: "30"
        },
        { 
            question: "What is the next prime number after 7?",
            options: ["9", "10", "11", "13"],
            answer: "11"
        },
        { 
            question: "What is the value of the expression 3 + 4 × 2?",
            options: ["14", "11", "10", "8"],
            answer: "11"
        },
        { 
            question: "Rate the test from the scale of 1 to 4 (1 is bad and 4 is excellent)",
            options: [1, 2, 3, 4],
            answer: ""
        }
    ],
    aptitude: [
        { 
            question: "If a car travels at a speed of 60 km/h for 3 hours, how far does it travel?",
            options: ["120 km", "150 km", "180 km", "200 km"],
            answer: "180 km"
        },
        { 
            question: "If the ratio of boys to girls in a class is 3:2 and there are 30 students in total, how many girls are there?",
            options: ["10", "12", "15", "18"],
            answer: "12"
        },
        { 
            question: "What is the next number in the sequence: 2, 6, 12, 20, ...?",
            options: ["28", "30", "32", "36"],
            answer: "30"
        },
        { 
            question: "A man bought a shirt for $60 and sold it for $75. What was his profit percentage?",
            options: ["20%", "25%", "30%", "35%"],
            answer: "25%"
        },
        { 
            question: "If 3x + 2 = 11, what is the value of x?",
            options: ["2", "3", "4", "5"],
            answer: "3"
        },
        { 
            question: "What is the average of the numbers 10, 20, 30, 40, and 50?",
            options: ["25", "30", "35", "40"],
            answer: "30"
        },
        { 
            question: "A train covers a distance of 240 km in 4 hours. What is its speed?",
            options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
            answer: "60 km/h"
        },
        { 
            question: "If the perimeter of a rectangle is 40 meters and its length is 12 meters, what is its width?",
            options: ["4 meters", "6 meters", "8 meters", "10 meters"],
            answer: "8 meters"
        },
        { 
            question: "A person spends 30% of his salary on rent. If his salary is $2000, how much does he spend on rent?",
            options: ["$400", "$500", "$600", "$700"],
            answer: "$600"
        },
        { 
            question: "If 5 workers can complete a task in 20 days, how many days will it take for 10 workers to complete the same task?",
            options: ["5 days", "10 days", "15 days", "20 days"],
            answer: "10 days"
        },
        { 
            question: "Rate the test from the scale of 1 to 4 (1 is bad and 4 is excellent)",
            options: [1, 2, 3, 4],
            answer: ""
        }
    ],
    general_knowledge: [
        { 
            question: "Who is the author of the Harry Potter series?",
            options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"],
            answer: "J.K. Rowling"
        },
        { 
            question: "What is the capital of Japan?",
            options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
            answer: "Tokyo"
        },
        { 
            question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Venus"
        },
        { 
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        { 
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
            answer: "George Washington"
        },
        { 
            question: "In which year did the Berlin Wall fall?",
            options: ["1987", "1989", "1991", "1993"],
            answer: "1989"
        },
        { 
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
            answer: "Mount Everest"
        },
        { 
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "South Korea", "Thailand"],
            answer: "Japan"
        },
        { 
            question: "Who painted the ceiling of the Sistine Chapel?",
            options: ["Leonardo da Vinci", "Vincent van Gogh", "Michelangelo", "Raphael"],
            answer: "Michelangelo"
        },
        { 
            question: "Which is the smallest country in the world by land area?",
            options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
            answer: "Vatican City"
        },
        { 
            question: "Rate the test from the scale of 1 to 4 (1 is bad and 4 is excellent)",
            options: [1, 2, 3, 4],
            answer: ""
        }
    ],
    java:   [
        { 
            question: "Which company developed the Java programming language?",
            options: ["Microsoft", "Sun Microsystems", "Apple", "Google"],
            answer: "Sun Microsystems"
        },
        { 
            question: "Which keyword is used to define a class in Java?",
            options: ["define", "class", "object", "new"],
            answer: "class"
        },
        { 
            question: "What is the file extension for Java bytecode files?",
            options: [".java", ".class", ".byte", ".jcode"],
            answer: ".class"
        },
        { 
            question: "Which method is the entry point for a Java program?",
            options: ["main", "start", "init", "run"],
            answer: "main"
        },
        { 
            question: "Which of the following is not a primitive data type in Java?",
            options: ["int", "boolean", "String", "float"],
            answer: "String"
        },
        { 
            question: "Which keyword is used to inherit a class in Java?",
            options: ["inherits", "extends", "implements", "derives"],
            answer: "extends"
        },
        { 
            question: "Which of the following is used to handle exceptions in Java?",
            options: ["try-catch", "if-else", "for-loop", "switch-case"],
            answer: "try-catch"
        },
        { 
            question: "Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronized?",
            options: ["ArrayList", "Vector", "HashSet", "LinkedList"],
            answer: "ArrayList"
        },
        { 
            question: "Which of the following is the correct way to declare an array in Java?",
            options: ["int[] arr;", "int arr[];", "int arr{};", "All of the above"],
            answer: "All of the above"
        },
        { 
            question: "Which Java feature allows you to create one class within another?",
            options: ["Inheritance", "Encapsulation", "Polymorphism", "Inner Classes"],
            answer: "Inner Classes"
        },
        { 
            question: "Rate the test from the scale of 1 to 4 (1 is bad and 4 is excellent)",
            options: [1, 2, 3, 4],
            answer: ""
        }
    ],
    html: [
        { 
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text and Marking Language"],
            answer: "Hyper Text Markup Language"
        },
        { 
            question: "Which HTML element is used to define the title of a document?",
            options: ["<head>", "<title>", "<meta>", "<header>"],
            answer: "<title>"
        },
        { 
            question: "What is the correct HTML element for inserting a line break?",
            options: ["<br>", "<lb>", "<break>", "<line>"],
            answer: "<br>"
        },
        { 
            question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            options: ["title", "alt", "src", "longdesc"],
            answer: "alt"
        },
        { 
            question: "How can you create an ordered list in HTML?",
            options: ["<ul>", "<ol>", "<list>", "<order>"],
            answer: "<ol>"
        },
        { 
            question: "Which HTML element is used to specify a footer for a document or section?",
            options: ["<bottom>", "<footer>", "<section>", "<foot>"],
            answer: "<footer>"
        },
        { 
            question: "What is the correct HTML element to define important text?",
            options: ["<important>", "<strong>", "<b>", "<i>"],
            answer: "<strong>"
        },
        { 
            question: "Which of these elements are all <table> elements?",
            options: ["<table> <tr> <td>", "<table> <head> <tfoot>", "<thead> <body> <tr>", "<table> <tr> <tt>"],
            answer: "<table> <tr> <td>"
        },
        { 
            question: "How can you make a numbered list?",
            options: ["<ul>", "<ol>", "<dl>", "<list>"],
            answer: "<ol>"
        },
        { 
            question: "Which HTML attribute is used to define inline styles?",
            options: ["font", "styles", "class", "style"],
            answer: "style"
        },
        { 
            question: "Rate the test from the scale of 1 to 4 (1 is bad and 4 is excellent)",
            options: [1, 2, 3, 4],
            answer: ""
        }
    ],
    javascript: [
        { 
            question: "Which company developed JavaScript?",
            options: ["Microsoft", "Netscape", "Google", "Sun Microsystems"],
            answer: "Netscape"
        },
        { 
            question: "Which symbol is used for comments in JavaScript?",
            options: ["//", "/* */", "#", "<!-- -->"],
            answer: "//"
        },
        { 
            question: "How do you create a function in JavaScript?",
            options: ["function = myFunction()", "function myFunction()", "createFunction myFunction()", "def myFunction()"],
            answer: "function myFunction()"
        },
        { 
            question: "How can you add a single line comment in JavaScript?",
            options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "# This is a comment"],
            answer: "// This is a comment"
        },
        { 
            question: "What is the correct way to write an array in JavaScript?",
            options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = {1:'red', 2:'green', 3:'blue'}"],
            answer: "var colors = ['red', 'green', 'blue']"
        },
        { 
            question: "How do you write a conditional statement for executing some code if 'i' is equal to 5?",
            options: ["if i=5 then", "if i==5 then", "if (i==5)", "if i=5"],
            answer: "if (i==5)"
        },
        { 
            question: "Which method can be used to find the length of a string in JavaScript?",
            options: ["length()", "size()", "length", "count()"],
            answer: "length"
        },
        { 
            question: "Which event occurs when the user clicks on an HTML element?",
            options: ["onchange", "onclick", "onmouseover", "onmouseclick"],
            answer: "onclick"
        },
        { 
            question: "What is the correct way to write a JavaScript array?",
            options: ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'"],
            answer: "var colors = ['red', 'green', 'blue']"
        },
        { 
            question: "How do you round the number 7.25 to the nearest integer?",
            options: ["Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)", "round(7.25)"],
            answer: "Math.round(7.25)"
        },
        { 
            question: "Rate the test from the scale of 1 to 4 (1 is bad and 4 is excellent)",
            options: [1, 2, 3, 4],
            answer: ""
        }
    ]
};
export default QUESTIONS_BY_SUBJECT;