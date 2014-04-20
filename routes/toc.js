
/*
 * GET home page.
 */
function Section(sectionNum, sectionTitle) {
  this.sectionNum = sectionNum;
  this.sectionTitle = sectionTitle;
}

function Chapter(chapterNum, chapterTitle, sections) {
  this.chapterNum = chapterNum;
  this.chapterTitle = chapterTitle;
  this.sections = sections;
}

var chapterTitles = [
  'Why, What, and How',
  'JavaScript: an Overview',
  'Value, Variable, Expression and Statement',
  'Functions',
  'Object',
  'Object and Inheritance',
  'Node.js',
  'The Express Web Framework',
  'MongoDB: the Data Tier'
];


var sectionTitles = [
  // chapter 1
  [
    'Why Learn JavaScript',
    'What to Learn',
    'How to Learn JavaScript',
    'A Little Bit history',
    'Some Learning Resources'
  ],
 
  // chpater 2
  [
    'Values, Types and Operations'
    //'Variables and Statements',
    //'Functions',
    //'Objects and Methods'
  ],

  // chapter 3
  [
    //'Data are Values',
    //'Variables Store Values',
    //'Expression Calculates Values',
    //'Statement is the Basic Execution Unit of a Program' 
  ],

  // chapter 4
  [
    //'Function Definition',
    //'Function Call',
    //'Variable Scope',
    //'Nested Functions',
    //'Closure',
    //'Built-in Functions'
  ],

  // chapter 5
  [
    //'Object Properties',
    //'Creating a New Object',
    //'The "this" Keyword in a Function',
    //'Terms and Examples',
    //'Enumerate Object Properties',
    //'Array Object',
    //'Built-in Objects'
  ],

   // chpater 6
  [
    //'Dynamic Object Model',
    //'The [[prototype]] Property of an Object',
    //'The prototyp Property of a Function',
    //'The constructor Property',
    //'Relationships among Constructor, Prototype and Constructed Object',
    //'The Object and Object.prototyp',
    //'The Function and Function.prototyp',
    //'Everything Inherits Object.prototype'
  ], 

   // chpater 7
  [
    'What is Node.js',
    'Hello World',
    'Hello World in the Web',
    'Modules',
    'Hello World in Modules',
    'Multiple Web Pages'
  ],


  // chpater 8
  [
    'The Quick Start',
    'Behind the Quick Start',
    'A Sample Applicatoin'
  ],

  // chpater 9
  [
    'Know the Basic MongoDB Concepts',
    'Write a Simple MongoDB Program', 
    'Implement a Data-Driven Web Application'
  ]

];

var numOfChapters = chapterTitles.length
var chapters = new Array(numOfChapters);
for (var chapterNum = 1; chapterNum <= numOfChapters; chapterNum += 1) {

  var numOfSections = sectionTitles[chapterNum - 1].length;
  var sections = new Array(numOfSections);

  for (var sectionNum = 1; sectionNum <= numOfSections; sectionNum += 1) {
    sections[sectionNum - 1] = new Section(sectionNum,
      sectionTitles[chapterNum - 1][sectionNum - 1]);
  }

  chapters[chapterNum - 1] = new Chapter(chapterNum,
    chapterTitles[chapterNum - 1],
    sections);
}

exports.chapters = chapters;


