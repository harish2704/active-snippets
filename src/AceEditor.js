import React from 'react';

import AceEditor from 'react-ace';
// import 'brace/theme/monokai';

import ace from 'brace';
const aceConfigModule = ace.acequire('ace/config');

const aceConfig = {
  basePath   : "/brace/",
  modePath   : "/brace/mode/",
  themePath  : "/brace/theme/",
  workerPath : "/brace/worker/",
  // extPath : "/brace/ext/",
}
for (const prop in aceConfig) {
  aceConfigModule.set(prop, aceConfig[prop] );
}

const editorProps = {
  $blockScrolling: Infinity,
}

const editorOpts = {
  useWorker: false,
}



export default function( props ){
  return(
    <AceEditor
      value={props.value}
      onChange={props.onChange}
      mode={props.mode}
      theme="iplastic"
      fontSize={14}
      name={props.name}
      editorProps={editorProps}
      setOptions={editorOpts}
      width={null}
    />
  );
}
