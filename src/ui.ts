import './ui.css'


document.getElementById('create').onclick = () => {
  const textbox = document.getElementById('count');
  // const count = parseInt(textbox.value, 10);
  const count = 6
  parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}