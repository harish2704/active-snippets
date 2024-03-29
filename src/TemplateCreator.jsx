import React, { Component } from 'react';

import TemplateEditor from './TemplateEditor';
import TemplateViewer from './TemplateViewer';
import Api from './api';
import { browserHistory } from 'react-router'
import { Link } from 'react-router';


export default class TemplateCreator extends Component {

  constructor(){
    super();
    this.state = {
      createdTemplate: {},
    };

    this.setSchema = this.setSchema.bind(this);
    this.setTemplate = this.setTemplate.bind(this);
    this.saveTemplate = this.saveTemplate.bind(this);
  }

  componentDidMount(){
    if( this.props.params.templateId ){
      Api.getTemplate( this.props.params.templateId )
        .then( (data) => {
          this.setState({
            loadedTempalte: data,
            createdTemplate: data,
            isEditing: true,
          });
        });
    }
  }

  setSchema( data ){
    console.log('setSchema', data);
    this.setState({
      createdTemplate: {
        name: data.name,
        syntax: data.syntax,
        schema: data.schema,
        template: this.state.createdTemplate.template,
      },
      loadedTempalte: null,
    });
  }

  setTemplate( template ){
    console.log( 'Setting template' );
    let createdTemplate = this.state.createdTemplate;
    this.setState({
      createdTemplate: {
        name: createdTemplate.name,
        syntax: createdTemplate.syntax,
        schema: createdTemplate.schema,
        template: template
      }
    });
  }

  saveTemplate(){
    console.log('saveTemplate', this.state.createdTemplate);
    var task;
    if( this.state.isEditing ){
      task = Api.updateTemplate( this.props.params.templateId, this.state.createdTemplate );
    } else {
      task = Api.saveTemplate( this.state.createdTemplate );
    }
    task.then( (res) => {
      console.log( 'Template saved', res );
      browserHistory.push('/items/' + res.id );
    });
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <h2>
            <Link className="btn" to="template-list" >🏠</Link>
            {this.state.createdTemplate.name}
            <Link className="btn btn-primary" to="template-view" params={{templateId: this.props.params.templateId,}}>View</Link>
          </h2>
          <br/>
        </div>
        <TemplateEditor
          template={this.state.createdTemplate}
          onSchemaChange={this.setSchema}
          onTemplateChange={this.setTemplate}
          width="6"
          formWidth="12"
          editorWidth="12" />
        <TemplateViewer template={this.state.createdTemplate} width="6" formWidth="12" editorWidth="12" />
        <div className="col-md-2">
          <button className="btn btn-success" onClick={this.saveTemplate.bind(this)}>Save Template</button>
        </div>
      </div>
    );
  }
}


