/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ (function() {

// import { Client } from '@notionhq/client';
// const { Client } = require("@notionhq/client")
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
const NOTION_API_KEY = 'secret_wFt6mNzaaLTgusbV6buFqF2X30zzRdPoN1l4Cch949o';
const DDBB_ID = 'd3f81d66235b4628b2f982984ccfdc43';
// console.log(this.document)
const data = [
    { title: 'titulo primero', content: 'Me encanta este restaurante sobre todo las croquetas', rank: 4 },
    { title: 'titulo segundo', content: 'Bueno el sitio no está mal la verdad pero estuvimos media hora solo para esperar a que nos tomasen nota y ni siquiera estaba lleno, no me quiero imaginar cómo será cuando estén a tope..', rank: 4 }
];
// This shows the HTML page in "ui.html".
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
// figma.ui.onmessage = async msg => {
if (((_a = figma.currentPage.selection[0]) === null || _a === void 0 ? void 0 : _a.type) !== 'COMPONENT') {
    this.alert('you need to select a component for this plugin to work');
    figma.closePlugin();
}
else {
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
    const component = figma.currentPage.selection[0];
    const children = component.children;
    const childrenKeys = (children === null || children === void 0 ? void 0 : children.map(e => e.name)) || [];
    const position = { x: component.x, y: component.y };
    console.log('component', component.width);
    // component.fills = [{type: 'SOLID', color: {r: 1, g: 0.2, b: 0}}];
    const nodes = [];
    data.forEach((item, i) => {
        // const frame = figma.createComponent()
        const instance = component.createInstance();
        Object.keys(item).forEach((key) => __awaiter(this, void 0, void 0, function* () {
            if (childrenKeys.includes(key)) {
                const node = instance.findChild(n => n.name === key);
                // loadFont(node)
                yield figma.loadFontAsync(node.fontName);
                // await figma.loadFontAsync(node.fontName)
                console.log('key', node);
                node.characters = item[key];
            }
        }));
        // instance.y = position.y
        // instance.x = i * (component.width + 60);
        instance.y = i * (component.height);
        figma.currentPage.appendChild(instance);
        nodes.push(instance);
    });
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
}
figma.ui.onmessage = msg => {
    //   // One way of distinguishing between different types of messages sent from
    //   // your HTML page is to use an object with a "type" property like this.
    //   const component = figma.createComponent()
    //   component.fills = [{type: 'SOLID', color: {r: 1, g: 0.2, b: 0}}];
    //   if (msg.type === 'create-rectangles') {
    //     const nodes: SceneNode[] = [];
    //     data.forEach(item => {
    //       // const frame = figma.createComponent()
    //       const instance = component.createInstance()
    //       figma.currentPage.appendChild(instance);
    //       nodes.push(instance);
    //     })
    //     // for (let i = 0; i < msg.count; i++) {
    //       // const rect = figma.createRectangle();
    //       // rect.x = i * 150;
    //       // rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
    //       // figma.currentPage.appendChild(rect);
    //       // nodes.push(rect);
    //     // }
    //     figma.currentPage.selection = nodes;
    //     figma.viewport.scrollAndZoomIntoView(nodes);
    //   }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/code.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90bGJmaWdtYS8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovL3RsYmZpZ21hL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxXQUFXLFNBQVM7QUFDcEIsVUFBVSxTQUFTO0FBQ25CO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxvR0FBb0c7QUFDekcsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQ0FBbUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxZQUFZO0FBQ1osVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSwyQkFBMkIsdUJBQXVCLG9CQUFvQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QixvQkFBb0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osNkJBQTZCLGVBQWU7QUFDNUM7QUFDQTtBQUNBLCtCQUErQix1QkFBdUIsb0JBQW9CO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzdIQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdAbm90aW9uaHEvY2xpZW50Jztcbi8vIGNvbnN0IHsgQ2xpZW50IH0gPSByZXF1aXJlKFwiQG5vdGlvbmhxL2NsaWVudFwiKVxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX2E7XG4vLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSB3aW5kb3cgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbnVtYmVyLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgdGhhdCBtYW55IHJlY3RhbmdsZXMgb24gdGhlIHNjcmVlbi5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG5jb25zdCBOT1RJT05fQVBJX0tFWSA9ICdzZWNyZXRfd0Z0Nm1OemFhTFRndXNiVjZidUZxRjJYMzB6elJkUG9OMWw0Q2NoOTQ5byc7XG5jb25zdCBEREJCX0lEID0gJ2QzZjgxZDY2MjM1YjQ2MjhiMmY5ODI5ODRjY2ZkYzQzJztcbi8vIGNvbnNvbGUubG9nKHRoaXMuZG9jdW1lbnQpXG5jb25zdCBkYXRhID0gW1xuICAgIHsgdGl0bGU6ICd0aXR1bG8gcHJpbWVybycsIGNvbnRlbnQ6ICdNZSBlbmNhbnRhIGVzdGUgcmVzdGF1cmFudGUgc29icmUgdG9kbyBsYXMgY3JvcXVldGFzJywgcmFuazogNCB9LFxuICAgIHsgdGl0bGU6ICd0aXR1bG8gc2VndW5kbycsIGNvbnRlbnQ6ICdCdWVubyBlbCBzaXRpbyBubyBlc3TDoSBtYWwgbGEgdmVyZGFkIHBlcm8gZXN0dXZpbW9zIG1lZGlhIGhvcmEgc29sbyBwYXJhIGVzcGVyYXIgYSBxdWUgbm9zIHRvbWFzZW4gbm90YSB5IG5pIHNpcXVpZXJhIGVzdGFiYSBsbGVubywgbm8gbWUgcXVpZXJvIGltYWdpbmFyIGPDs21vIHNlcsOhIGN1YW5kbyBlc3TDqW4gYSB0b3BlLi4nLCByYW5rOiA0IH1cbl07XG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG4vLyBDYWxscyB0byBcInBhcmVudC5wb3N0TWVzc2FnZVwiIGZyb20gd2l0aGluIHRoZSBIVE1MIHBhZ2Ugd2lsbCB0cmlnZ2VyIHRoaXNcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxuLy8gcG9zdGVkIG1lc3NhZ2UuXG4vLyBmaWdtYS51aS5vbm1lc3NhZ2UgPSBhc3luYyBtc2cgPT4ge1xuaWYgKCgoX2EgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlKSAhPT0gJ0NPTVBPTkVOVCcpIHtcbiAgICB0aGlzLmFsZXJ0KCd5b3UgbmVlZCB0byBzZWxlY3QgYSBjb21wb25lbnQgZm9yIHRoaXMgcGx1Z2luIHRvIHdvcmsnKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuZWxzZSB7XG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbiAgICAvLyBjb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHsgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9LRVkgfSk7XG4gICAgLy8gY29uc3QgZmV0Y2hOb3Rpb25EREJCID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24ucGFnZXMuY3JlYXRlKHtcbiAgICAvLyAgICAgcGFyZW50OiB7XG4gICAgLy8gICAgICAgZGF0YWJhc2VfaWQ6ICcyZjI2ZWU2OC1kZjMwLTQyNTEtYWFkNC04ZGRjNDIwY2JhM2QnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgLy8gICAgICAgJ0dyb2NlcnkgaXRlbSc6IHtcbiAgICAvLyAgICAgICAgIHR5cGU6ICd0aXRsZScsXG4gICAgLy8gICAgICAgICB0aXRsZTogW1xuICAgIC8vICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgIC8vICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAvLyAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdUb21hdG9lcycsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICBQcmljZToge1xuICAgIC8vICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgLy8gICAgICAgICBudW1iZXI6IDEuNDksXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICAnTGFzdCBvcmRlcmVkJzoge1xuICAgIC8vICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgIC8vICAgICAgICAgZGF0ZToge1xuICAgIC8vICAgICAgICAgICBzdGFydDogJzIwMjEtMDUtMTEnLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgLy8gfTtcbiAgICAvLyBmZXRjaCgnaHR0cHM6Ly9hcGkubm90aW9uLmNvbS92MS9kYXRhYmFzZXMvJyArIEREQkJfSUQpXG4gICAgLy8gLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC8vICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY29tcG9uZW50LmNoaWxkcmVuO1xuICAgIGNvbnN0IGNoaWxkcmVuS2V5cyA9IChjaGlsZHJlbiA9PT0gbnVsbCB8fCBjaGlsZHJlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hpbGRyZW4ubWFwKGUgPT4gZS5uYW1lKSkgfHwgW107XG4gICAgY29uc3QgcG9zaXRpb24gPSB7IHg6IGNvbXBvbmVudC54LCB5OiBjb21wb25lbnQueSB9O1xuICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQnLCBjb21wb25lbnQud2lkdGgpO1xuICAgIC8vIGNvbXBvbmVudC5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IHtyOiAxLCBnOiAwLjIsIGI6IDB9fV07XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgLy8gY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVDb21wb25lbnQoKVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudC5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKChrZXkpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBpbnN0YW5jZS5maW5kQ2hpbGQobiA9PiBuLm5hbWUgPT09IGtleSk7XG4gICAgICAgICAgICAgICAgLy8gbG9hZEZvbnQobm9kZSlcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMobm9kZS5mb250TmFtZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygna2V5Jywgbm9kZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gaXRlbVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIC8vIGluc3RhbmNlLnkgPSBwb3NpdGlvbi55XG4gICAgICAgIC8vIGluc3RhbmNlLnggPSBpICogKGNvbXBvbmVudC53aWR0aCArIDYwKTtcbiAgICAgICAgaW5zdGFuY2UueSA9IGkgKiAoY29tcG9uZW50LmhlaWdodCk7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGluc3RhbmNlKTtcbiAgICAgICAgbm9kZXMucHVzaChpbnN0YW5jZSk7XG4gICAgfSk7XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZXM7XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcbn1cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgLy8gICAvLyBPbmUgd2F5IG9mIGRpc3Rpbmd1aXNoaW5nIGJldHdlZW4gZGlmZmVyZW50IHR5cGVzIG9mIG1lc3NhZ2VzIHNlbnQgZnJvbVxuICAgIC8vICAgLy8geW91ciBIVE1MIHBhZ2UgaXMgdG8gdXNlIGFuIG9iamVjdCB3aXRoIGEgXCJ0eXBlXCIgcHJvcGVydHkgbGlrZSB0aGlzLlxuICAgIC8vICAgY29uc3QgY29tcG9uZW50ID0gZmlnbWEuY3JlYXRlQ29tcG9uZW50KClcbiAgICAvLyAgIGNvbXBvbmVudC5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IHtyOiAxLCBnOiAwLjIsIGI6IDB9fV07XG4gICAgLy8gICBpZiAobXNnLnR5cGUgPT09ICdjcmVhdGUtcmVjdGFuZ2xlcycpIHtcbiAgICAvLyAgICAgY29uc3Qgbm9kZXM6IFNjZW5lTm9kZVtdID0gW107XG4gICAgLy8gICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyAgICAgICAvLyBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUNvbXBvbmVudCgpXG4gICAgLy8gICAgICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuY3JlYXRlSW5zdGFuY2UoKVxuICAgIC8vICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGluc3RhbmNlKTtcbiAgICAvLyAgICAgICBub2Rlcy5wdXNoKGluc3RhbmNlKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cuY291bnQ7IGkrKykge1xuICAgIC8vICAgICAgIC8vIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAvLyAgICAgICAvLyByZWN0LnggPSBpICogMTUwO1xuICAgIC8vICAgICAgIC8vIHJlY3QuZmlsbHMgPSBbe3R5cGU6ICdTT0xJRCcsIGNvbG9yOiB7cjogMSwgZzogMC41LCBiOiAwfX1dO1xuICAgIC8vICAgICAgIC8vIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKHJlY3QpO1xuICAgIC8vICAgICAgIC8vIG5vZGVzLnB1c2gocmVjdCk7XG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZXM7XG4gICAgLy8gICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XG4gICAgLy8gICB9XG4gICAgLy8gTWFrZSBzdXJlIHRvIGNsb3NlIHRoZSBwbHVnaW4gd2hlbiB5b3UncmUgZG9uZS4gT3RoZXJ3aXNlIHRoZSBwbHVnaW4gd2lsbFxuICAgIC8vIGtlZXAgcnVubmluZywgd2hpY2ggc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9