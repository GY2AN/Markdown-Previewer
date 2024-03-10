import {useState} from "react";
import {marked} from "marked";
import './App.css';

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2

  **bold text**
  
  *italicized text*

  > Dorothy followed her through many of the beautiful rooms in her castle.

  - First item
  - Second item
  - Third item
  - Fourth item

  \`code\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

[title](https://www.example.com)

![alt text](image.jpg)





  `)
  return (
    <div className="App">
      <textarea id="editor" onChange={(event) =>{const textValue = event.target.value; setText(textValue)}} value={text}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{
          __html: marked(text),}}>

      </div>
    </div>
  );
}

export default App;
