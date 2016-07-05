// import 'whatwg-fetch';
import URI from 'urijs';
import config from '../config';
import BaseApi from './BaseApi';

class ApiError{
  constructor( message, status, errors ){
    this.message = message;
    this.status = status;
    this.errors = errors;
  }
  static create( res ){
    return new ApiError( res.message, res._status, res.errors );
  }

  toString(){
    return this.message
  }
}

class Api extends BaseApi {

  constructor(){
    super();
    this.endPoint = config.apiUrl,
    this.cache = {
      templates: []
    };
  }

  _request( method, path, args ){

    var url = new URI( this.endPoint + path )
      .query( args.query||{} );

    var opts = {
      method: method,
      headers:{
        accept: 'application/json',
        'content-type': 'application/json',
        'x-sessionid': this.sessionid,
      },
    }
    method = method.toUpperCase();

    if( args.body && ( [ 'POST', 'PUT', 'PATCH' ].indexOf( method ) > -1 ) ){
      opts.body = JSON.stringify( args.body );
    }

    return fetch( url, opts )
      .then( ( res ) => res.json().then( data=>{ data._status = res.status; return data; }) )
      .then( function( res ){
        if( res.success ){
          return res.data;
        }
        return Promise.reject( ApiError.create(res) );
      });
  }


  createSnippets( data ){
    data.schema = JSON.stringify( data.schema );
    return super.createSnippets( data );
  }
}


export default (new Api() );
