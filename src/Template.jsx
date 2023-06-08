import React, { Component } from 'react';
import { Link } from 'react-router';

import Api from './api';
import TemplateViewer from './TemplateViewer';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      template: null
    };
  }

  componentDidMount(){
    Api.getTemplate( this.props.params.templateId )
      .then( (data) => {
        this.setState({
          template: data
        });
      });
  }


  render() {
    if( this.state.template ){
      return ( 
        <div className="row">
          <div className="col-md-12">
            <h2>
              <Link className="btn" to="template-list" >🏠</Link>
              {this.state.template.name}
              <Link className="btn btn-warning" to="template-edit" params={{templateId: this.state.template.id}}>Edit</Link>
            </h2>
            <br/>
          </div>
          <TemplateViewer template={this.state.template} width="12" formWidth="4" editorWidth="8" />
        </div>
        );
    } else {
      return ( <p className="loading" >Loading...</p> );
    }
  }
}

