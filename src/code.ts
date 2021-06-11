// import { Client } from '@notionhq/client';
// const { Client } = require("@notionhq/client")

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).


const NOTION_API_KEY = 'secret_wFt6mNzaaLTgusbV6buFqF2X30zzRdPoN1l4Cch949o'
const DDBB_ID = 'd3f81d66235b4628b2f982984ccfdc43'
// console.log(this.document)
const data = [
  {title: 'titulo primero', content: 'Me encanta este restaurante sobre todo las croquetas', rank: 4 },
  {title: 'titulo segundo', content: 'Bueno el sitio no está mal la verdad pero estuvimos media hora solo para esperar a que nos tomasen nota y ni siquiera estaba lleno, no me quiero imaginar cómo será cuando estén a tope..', rank: 4}
]
// This shows the HTML page in "ui.html".
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

// figma.ui.onmessage = async msg => {
if (figma.currentPage.selection[0]?.type !== 'COMPONENT') {
  this.alert('you need to select a component for this plugin to work')
  figma.closePlugin();
}else{
figma.showUI(__html__);

// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// const fetchNotionDDBB = async () => {
//   const response = await notion.pages.create({
//     parent: {
//       database_id: '2f26ee68-df30-4251-aad4-8ddc420cba3d',
//     },
//     properties: {
//       'Grocery item': {
//         type: 'title',
//         title: [
//           {
//             type: 'text',
//             text: {
//               content: 'Tomatoes',
//             },
//           },
//         ],
//       },
//       Price: {
//         type: 'number',
//         number: 1.49,
//       },
//       'Last ordered': {
//         type: 'date',
//         date: {
//           start: '2021-05-11',
//         },
//       },
//     },
//   });
//   console.log(response);
// };

// fetch('https://api.notion.com/v1/databases/' + DDBB_ID)
// .then(response => response.json())
//   .then(data => console.log(data));

  const component = figma.currentPage.selection[0]
  const children = component.children
  const childrenKeys = children?.map(e => e.name) || []
  // const position = {x: component.x, y : component.y}
  // console.log('component',component.width)
  
    const nodes: SceneNode[] = [];
      data.forEach((item, i) => {
      const instance = component.createInstance()
      Object.keys(item).forEach(async key => {
        if (childrenKeys.includes(key)) {
          const node = instance.findChild(n => n.name === key)
          await figma.loadFontAsync(node.fontName)
          console.log('key',node)
          node.characters = item[key]
        }
      })
      // instance.y = position.y
      // instance.x = i * (component.width + 60);
      instance.y = i * (component.height);

      figma.currentPage.appendChild(instance);
      nodes.push(instance);
    })
    
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
}

figma.ui.onmessage = msg => {

//   // Make sure to close the plugin when you're done. Otherwise the plugin will
//   // keep running, which shows the cancel button at the bottom of the screen.
//   figma.closePlugin();

};

