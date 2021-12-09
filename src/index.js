import React from "react";
import { render } from "react-dom";
import { normalize, schema } from "normalizr";
import JSONPretty from "react-json-pretty";

const blogposts = {
  id: 10,
  title: "My blogpost",
  description: "Short blogpost description",
  content: "Hello world",
  author: {
    id: 1,
    name: "John Doe"
  },
  comments: [
    {
      id: 1,
      author: "Rob",
      content: "Nice post!"
    },
    {
      id: 2,
      author: "Jane",
      content: "I totally agree with you"
    }
  ]
};

const authorSchema = new schema.Entity("authors");

const commentSchema = new schema.Entity("comments");

const postSchema = new schema.Entity("posts", {
  author: authorSchema,
  comments: [commentSchema]
});

const normalizedBlogposts = normalize(blogposts, postSchema);

var db_object1 = [
  "https://www.infinit.cx/wp-content/uploads/2021/11/TarrifPlan_CosmosDB-e1636461060455.png",
  "4EVERjoung S ©",
  "25 MBit",
  "Neueste-Tech inklusive ©",
  "Keine versteckten Kosten ©",
  "https://www.google.com",
  "https://www.telekom.de/produktinformationsblatt/magentamobil-s.pdf",
  "39,95 € mtl. ©",
  "1 Monate Vertragslaufzeit",
  "39,95 € einmalig ©",
  "https://www.telekom.de/unterwegs/tarife-und-optionen/smartphone-tarife/magentamobil-s"
];
var db_object2 = [
  "https://www.infinit.cx/wp-content/uploads/2021/11/TarrifPlan_CosmosDB-e1636461060455.png",
  "4EVERjoung M ©",
  "50 MBit",
  "Neueste-Tech inklusive ©",
  "Keine versteckten Kosten ©",
  "https://www.google.com",
  "https://www.telekom.de/produktinformationsblatt/magentamobil-m.pdf",
  "39,95 € mtl. ©",
  "12 Monate Vertragslaufzeit",
  "39,95 € einmalig ©",
  "https://www.telekom.de/unterwegs/tarife-und-optionen/smartphone-tarife/magentamobil-m"
];
var db_object3 = [
  "https://www.infinit.cx/wp-content/uploads/2021/11/TarrifPlan_CosmosDB-e1636461060455.png",
  "4EVERjoung L ©",
  "150 MBit",
  "Neueste-Tech inklusive ©",
  "Keine versteckten Kosten ©",
  "https://www.google.com",
  "https://www.telekom.de/produktinformationsblatt/magentamobil-l.pdf",
  "39,95 € mtl. ©",
  "12 Monate Vertragslaufzeit",
  "39,95 € einmalig ©",
  "https://www.telekom.de/unterwegs/tarife-und-optionen/smartphone-tarife/magentamobil-l"
];
var db_object4 = [
  "https://www.infinit.cx/wp-content/uploads/2021/11/TarrifPlan_CosmosDB-e1636461060455.png",
  "4EVERjoung XL ©",
  "300 MBit",
  "Neueste-Tech inklusive ©",
  "Keine versteckten Kosten ©",
  "https://www.google.com",
  "https://www.telekom.de/produktinformationsblatt/magentamobil-xl.pdf",
  "39,95 € mtl. ©",
  "24 Monate Vertragslaufzeit",
  "0 € einmalig ©",
  "https://www.telekom.de/unterwegs/tarife-und-optionen/smartphone-tarife/magentamobil-xl"
];
var db_result = [db_object1, db_object2, db_object3, db_object4];

var lookup = [
  "#imageTop",
  "#packName",
  "#unitSize",
  "#info1",
  "#info2",
  "#tariffDetailLink",
  "#productInfoLink",
  "#packCost",
  "#runTime",
  "#subscriptionCost",
  "#TariffSelectCallback"
];

var JSONCardTemplate = `{  "type": "vertical",   "elements": [     {        "type":"horizontal",        "border":"borderLess",        "percentages": [70, 30],        "elements":[          {            "type":"text",            "text":"",            "style":{              "size":"small"              }            },          {            "type":"image",            "url":"#imageTop",            "style":{}            }          ]       },     {       "type":"horizontal",       "border":"borderLess",       "percentages": [100, 0],       "elements":[         {           "type":"text",           "text":"#packName",           "style":{             "size":"small"            }           }       ]     },     {       "type":"horizontal",       "border":"borderLess",       "percentages": [100, 0],       "elements":[         {           "type":"text",           "text":"#unitSize",           "style":{             "bold": true,             "size":"medium"             }           }         ]       },     {       "type":"horizontal",       "border":"borderLess",       "percentages": [100, 0],       "elements":[         {       "type": "text",       "text": "<p>✔️#info1</p><p>✔️#info2<p>",       "style":{         "size":"small"       }     }         ]       },               {       "type":"horizontal",       "border":"dropShadow",       "percentages": [100, 0],       "elements":[         {           "title": "Tarifdetails",       "type": "button",       "click": {         "actions": [           {             "type": "link",             "uri": "#tariffDetailLink",             "target":"blank"           }         ]       },       "tooltip": "Click me!",       "style":{         "background-color": "white",         "color":"#007A87",         "size":"small"       }         },         {           "type":"image",           "url":"https://www.infinit.cx/wp-content/uploads/2021/11/Blank_CosmosDB-e1636033394688.png"         }       ]     },     {       "type":"text",       "text":"",       "style":{         "size":"small"       }     },     {       "type":"horizontal",       "border":"dropShadow",       "percentages": [100, 0],       "elements":[         {           "title": "Produktinformationen (PDF)",       "type":"button",       "style":{         "color":"#007A87",         "background-color":"white",         "size":"small"       },       "click":{         "actions":[           {             "type":"link",             "uri":"#productInfoLink"           }         ]       }         },         {           "type":"image",           "url":"https://www.infinit.cx/wp-content/uploads/2021/11/Blank_CosmosDB-e1636033394688.png"         }       ]     },     {       "type":"text",       "text":""     },     {       "type":"horizontal",       "border": "borderLess",       "percentages": [60, 40],       "elements":[         {           "type":"text",           "text":"",           "style":{             "size":"large",             "color":"#7AB800"            }           },         {           "type":"text",           "tag": "Mavin",           "text":"#packCost",           "style":{             "size":"medium",             "color":"#7AB800"            }         }         ]     },     {       "type":"horizontal",       "border":"borderLess",       "percentages": [100, 0],       "elements":[         {           "type":"text",           "text":"#runTime",           "style":{             "size":"small"             }           }         ]     }     ,     {       "type":"horizontal",       "border":"borderLess",       "percentages": [100, 0],       "elements":[         {           "type":"text",           "text":"#subscriptionCost",           "style":{             "size":"small"             }           }         ]       },     {       "type": "button",       "title": "Tarif auswählen",       "click": {         "actions":[           {             "type":"link",             "uri":"#TariffSelectCallback",             "target":"blank"           }         ]       },       "style":{         "background-color":"#7AB800",         "bold":true,         "color":"black",         "size":"small"       }     }   ] }`;

var compiledjson = { test: "test" };
var templateRenderd = {};
var viewcardOBJs = [];
var templateText = JSONCardTemplate;
for (var i = 0; i < db_result.length; i++) {
  var currentObject = db_result[i];
  for (var j = 0; j < lookup.length; j++) {
    templateText = templateText.replace(lookup[j], currentObject[j]);
  }
  viewcardOBJs.push(JSON.parse(templateText));
}

templateRenderd = JSON.parse(JSON.stringify(viewcardOBJs));
compiledjson = templateRenderd;

const App = () => (
  <div>
    blogposts:
    <JSONPretty json={blogposts} />
    normalized blogposts:
    <JSONPretty json={normalizedBlogposts} />
    viewsoroginal-template:
    <JSONPretty json={JSON.parse(JSONCardTemplate)} />
    view-afterreplacement:
    <JSONPretty json={compiledjson} />
    <pre>
      <code>
        {`var db_object1 = [
  "https://www.infinit.cx/wp-content/uploads/2021/11/TarrifPlan_CosmosDB-e1636461060455.png",
  "4EVERjoung S ©",
  "25 MBit",
  "Neueste-Tech inklusive ©",
  "Keine versteckten Kosten ©",
  "https://www.google.com",
  "https://www.telekom.de/produktinformationsblatt/magentamobil-s.pdf",
  "39,95 € mtl. ©",
  "1 Monate Vertragslaufzeit",
  "39,95 € einmalig ©",
  "https://www.telekom.de/unterwegs/tarife-und-optionen/smartphone-tarife/magentamobil-s"
];
var db_object2 = [
  "https://www.infinit.cx/wp-content/uploads/2021/11/TarrifPlan_CosmosDB-e1636461060455.png",
  "4EVERjoung M ©",
  "50 MBit",
  "Neueste-Tech inklusive ©",
  "Keine versteckten Kosten ©",
  "https://www.google.com",
  "https://www.telekom.de/produktinformationsblatt/magentamobil-m.pdf",
  "39,95 € mtl. ©",
  "12 Monate Vertragslaufzeit",
  "39,95 € einmalig ©",
  "https://www.telekom.de/unterwegs/tarife-und-optionen/smartphone-tarife/magentamobil-m"
];
var db_object3 = [
  "https://www.infinit.cx/wp-content/uploads/2021/11/TarrifPlan_CosmosDB-e1636461060455.png",
  "4EVERjoung L ©",
  "150 MBit",
  "Neueste-Tech inklusive ©",
  "Keine versteckten Kosten ©",
  "https://www.google.com",
  "https://www.telekom.de/produktinformationsblatt/magentamobil-l.pdf",
  "39,95 € mtl. ©",
  "12 Monate Vertragslaufzeit",
  "39,95 € einmalig ©",
  "https://www.telekom.de/unterwegs/tarife-und-optionen/smartphone-tarife/magentamobil-l"
];
var db_object4 = [
  "https://www.infinit.cx/wp-content/uploads/2021/11/TarrifPlan_CosmosDB-e1636461060455.png",
  "4EVERjoung XL ©",
  "300 MBit",
  "Neueste-Tech inklusive ©",
  "Keine versteckten Kosten ©",
  "https://www.google.com",
  "https://www.telekom.de/produktinformationsblatt/magentamobil-xl.pdf",
  "39,95 € mtl. ©",
  "24 Monate Vertragslaufzeit",
  "0 € einmalig ©",
  "https://www.telekom.de/unterwegs/tarife-und-optionen/smartphone-tarife/magentamobil-xl"
];
var db_result = [db_object1, db_object2, db_object3, db_object4];

var lookup = [
  "#imageTop",
  "#packName",
  "#unitSize",
  "#info1",
  "#info2",
  "#tariffDetailLink",
  "#productInfoLink",
  "#packCost",
  "#runTime",
  "#subscriptionCost",
  "#TariffSelectCallback"
];

var JSONCardTemplate = '${JSON.stringify(JSON.parse(JSONCardTemplate))}';
var compiledjson = { test: "test" };
var templateRenderd = {};
var viewcardOBJs = [];
var templateText = JSONCardTemplate;
for (var i = 0; i < db_result.length; i++) {
  var currentObject = db_result[i];
  for (var j = 0; j < lookup.length; j++) {
    templateText = templateText.replace(lookup[j], currentObject[j]);
  }
  viewcardOBJs.push(JSON.parse(templateText));
}

templateRenderd = JSON.parse(JSON.stringify(viewcardOBJs));
compiledjson = templateRenderd;

//Resualt of compiledjson console.log(JSON.stringify(JSONCardTemplate,null,2)); :
/*
${JSON.stringify(JSON.parse(JSONCardTemplate), null, 2)}
*/
console.log(JSON.stringify(compiledjson,null,2));
//Resualt of compiledjson console.log(JSON.stringify(compiledjson,null,2)); :
/*
${JSON.stringify(compiledjson, null, 2)}
*/
`}
<pre><code>
{`var JSONCardTemplate = botContext.getEnvVariable("JSONCardTemplate");
var JSONMenu = "";

// fromCosmosDB <<[ var JSONCardTemplate = botContext.getEnvVariable("JSONCardTemplate"); ]>>
var DBVerticalCardTemplate = {
  "type": "vertical",
  "elements": [
    {
      "type": "horizontal",
      "border": "borderLess",
      "percentages": [
        70,
        30
      ],
      "elements": [
        {
          "type": "text",
          "text": "",
          "style": {
            "size": "small"
          }
        },
        {
          "type": "image",
          "url": "#imageTop",
          "style": {}
        }
      ]
    },
    {
      "type": "horizontal",
      "border": "borderLess",
      "percentages": [
        100,
        0
      ],
      "elements": [
        {
          "type": "text",
          "text": "#packName",
          "style": {
            "size": "small"
          }
        }
      ]
    },
    {
      "type": "horizontal",
      "border": "borderLess",
      "percentages": [
        100,
        0
      ],
      "elements": [
        {
          "type": "text",
          "text": "#unitSize",
          "style": {
            "bold": true,
            "size": "medium"
          }
        }
      ]
    },
    {
      "type": "horizontal",
      "border": "borderLess",
      "percentages": [
        100,
        0
      ],
      "elements": [
        {
          "type": "text",
          "text": "<p>✔️#info1</p><p>✔️#info2<p>",
          "style": {
            "size": "small"
          }
        }
      ]
    },
    {
      "type": "horizontal",
      "border": "dropShadow",
      "percentages": [
        100,
        0
      ],
      "elements": [
        {
          "title": "Tarifdetails",
          "type": "button",
          "click": {
            "actions": [
              {
                "type": "link",
                "uri": "#tariffDetailLink",
                "target": "blank"
              }
            ]
          },
          "tooltip": "Click me!",
          "style": {
            "background-color": "white",
            "color": "#007A87",
            "size": "small"
          }
        },
        {
          "type": "image",
          "url": "https://www.infinit.cx/wp-content/uploads/2021/11/Blank_CosmosDB-e1636033394688.png"
        }
      ]
    },
    {
      "type": "text",
      "text": "",
      "style": {
        "size": "small"
      }
    },
    {
      "type": "horizontal",
      "border": "dropShadow",
      "percentages": [
        100,
        0
      ],
      "elements": [
        {
          "title": "Produktinformationen (PDF)",
          "type": "button",
          "style": {
            "color": "#007A87",
            "background-color": "white",
            "size": "small"
          },
          "click": {
            "actions": [
              {
                "type": "link",
                "uri": "#productInfoLink"
              }
            ]
          }
        },
        {
          "type": "image",
          "url": "https://www.infinit.cx/wp-content/uploads/2021/11/Blank_CosmosDB-e1636033394688.png"
        }
      ]
    },
    {
      "type": "text",
      "text": ""
    },
    {
      "type": "horizontal",
      "border": "borderLess",
      "percentages": [
        60,
        40
      ],
      "elements": [
        {
          "type": "text",
          "text": "",
          "style": {
            "size": "large",
            "color": "#7AB800"
          }
        },
        {
          "type": "text",
          "tag": "Mavin",
          "text": "#packCost",
          "style": {
            "size": "medium",
            "color": "#7AB800"
          }
        }
      ]
    },
    {
      "type": "horizontal",
      "border": "borderLess",
      "percentages": [
        100,
        0
      ],
      "elements": [
        {
          "type": "text",
          "text": "#runTime",
          "style": {
            "size": "small"
          }
        }
      ]
    },
    {
      "type": "horizontal",
      "border": "borderLess",
      "percentages": [
        100,
        0
      ],
      "elements": [
        {
          "type": "text",
          "text": "#subscriptionCost",
          "style": {
            "size": "small"
          }
        }
      ]
    },
    {
      "type": "button",
      "title": "Tarif auswählen",
      "click": {
        "actions": [
          {
            "type": "link",
            "uri": "#TariffSelectCallback",
            "target": "blank"
          }
        ]
      },
      "style": {
        "background-color": "#7AB800",
        "bold": true,
        "color": "black",
        "size": "small"
      }
    }
  ]
};

// fromCosmosDB
var DBlookupModel = {
  "imageTop":"#imageTop",
  "packName":"#packName",
  "unitSize":"#unitSize",
  "info1":"#info1",
  "info2":"#info2",
  "tariffDetailLink":"#tariffDetailLink",
  "productInfoLink":"#productInfoLink",
  "packCost":"#packCost",
  "runTime":"#runTime",
  "subscriptionCost":"#subscriptionCost",
  "TariffSelectCallback":"#TariffSelectCallback"
};

// var lookup = Object.values(DBlookupModel);

// fromCosmosDB
var DBVerticalcardsModels = [
  {
    "imageTop":"#imageTop",
    "packName":"#packName",
    "unitSize":"#unitSize",
    "info1":"#info1",
    "info2":"#info2",
    "tariffDetailLink":"#tariffDetailLink",
    "productInfoLink":"#productInfoLink",
    "packCost":"#packCost",
    "runTime":"#runTime",
    "subscriptionCost":"#subscriptionCost",
    "TariffSelectCallback":"#TariffSelectCallback"
  },
  {
    "imageTop":"#imageTop",
    "packName":"#packName",
    "unitSize":"#unitSize",
    "info1":"#info1",
    "info2":"#info2",
    "tariffDetailLink":"#tariffDetailLink",
    "productInfoLink":"#productInfoLink",
    "packCost":"#packCost",
    "runTime":"#runTime",
    "subscriptionCost":"#subscriptionCost",
    "TariffSelectCallback":"#TariffSelectCallback"
  },
  {
    "imageTop":"#imageTop",
    "packName":"#packName",
    "unitSize":"#unitSize",
    "info1":"#info1",
    "info2":"#info2",
    "tariffDetailLink":"#tariffDetailLink",
    "productInfoLink":"#productInfoLink",
    "packCost":"#packCost",
    "runTime":"#runTime",
    "subscriptionCost":"#subscriptionCost",
    "TariffSelectCallback":"#TariffSelectCallback"
  },
  {
    "imageTop":"#imageTop",
    "packName":"#packName",
    "unitSize":"#unitSize",
    "info1":"#info1",
    "info2":"#info2",
    "tariffDetailLink":"#tariffDetailLink",
    "productInfoLink":"#productInfoLink",
    "packCost":"#packCost",
    "runTime":"#runTime",
    "subscriptionCost":"#subscriptionCost",
    "TariffSelectCallback":"#TariffSelectCallback"
  }
];

/*
var db_result  = [];
for (var i = 0; i < DBVerticalcardsModels.length; i++) {
  var currentModel = DBVerticalcardsModels[i];
  db_result.push([Object.values(currentModel)]);
}
*/

// new Algorithm 
/* 
var compiledjson = {};
var templateRenderd = {};
var viewcardOBJs = [];
var templateText = JSONCardTemplate;
for (var i = 0; i < db_result.length; i++) {
  var currentObject = db_result[i];
  for (var j = 0; j < lookup.length; j++) {
    templateText = templateText.replace(lookup[j], currentObject[j]);
  }
  viewcardOBJs.push(JSON.parse(templateText));
}

templateRenderd = JSON.parse(JSON.stringify(viewcardOBJs));
compiledjson = templateRenderd;

var compiledViewString = JSON.stringify(compiledjson);

botContext.printDebugMessage("JSONMenu" + compiledViewString);
botContext.setBotVariable("JSONMenu", compiledViewString, true, false);
*/`}
</code></pre>
      </code>
    </pre>
  </div>
);

render(<App />, document.getElementById("root"));
