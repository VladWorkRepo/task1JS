function convertAstToHtmlString(astObject) {
    return `<${astObject.tagName} ${astObject.attributes.map(a => a.name)}="${astObject.attributes.map(a => a.value)}">${astObject.children.map(a => a.value)}</${astObject.tagName}>`;
}

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(convertAstToHtmlString(
  { 
    "nodeType": "element", "tagName": "div",
    "attributes": [ { "name": "class", "value": "test" } ],
    "children": [ { "nodeType": "text", "value": "Hello world!" }]}), '<div class="test">Hello world!</div>');