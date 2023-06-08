import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import Ejs from 'ejs'


import Panel from './Panel';
import Editor from './AceEditor';

const emptySchema = {
}

export default class TemplateViewer extends Component {

  constructor(){
    super();
    this.state = {
      renderedTxt: '',
      formData: null,
      errorMsg: '',
    };
  }

  updateRenderedTempalte( formData ){
    var templateStr = this.props.template.template,
        renderedTxt;

    this.setState({
      formData: formData,
    });
    try{
      if( templateStr ){
        templateStr = templateStr.replace( /^[ \t]*<% (.*) %>[ \t]*\n/gm, function( match, content ){
          return '<% '+ content +' %>';
        });
        renderedTxt = ejs.render( templateStr, formData );
        this.setState({
          renderedTxt: renderedTxt,
          errorMsg: '',
        });
      }
    } catch( e ){
      this.setState({
        errorMsg: e + '',
      })
      console.log( e );
    }
  }

  renderTemplate( form ){
    this.updateRenderedTempalte( form.formData );
  }


  componentWillReceiveProps( nextProps ){
    console.log( 'recieving props...', nextProps );
    if( this.state.formData ){
      this.updateRenderedTempalte( this.state.formData );
    }
  }

  render() {
    let template = this.props.template;

    return ( 
      <div className={'col-md-' + this.props.width}>
        <Panel title="Data Form" type="warning" width={this.props.formWidth} className="pnl-create-form" >
          <Form schema={template.schema||emptySchema} onSubmit={this.renderTemplate.bind(this)} formData={this.state.formData} >
            <button className="btn btn-success" type="submit" >Apply</button>
          </Form>
        </Panel>
        <Panel title="Rendered output" type="success" width={this.props.editorWidth}  >
          <Editor
            mode={template.syntax}
            fontSize={14}
            name="show-template"
            width={null}
            editorProps={{$blockScrolling: Infinity }}
            value={this.state.renderedTxt}
          />
        </Panel>
        <div className="col-md-12">
          <pre>
            <code>
              {this.state.errorMsg}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

