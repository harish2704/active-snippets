/*
 * This file was auto-generated from the API controllers using this tool
 * https://github.com/harish2704/expose-controllers-http
 *
 * Generated-At: Mon Jul 04 2016 23:20:16 GMT+0530 (IST)
 */

function bindActions( actions, thisVal ){
  Object.keys(actions).forEach(function(action){
    actions[action] = actions[action].bind(thisVal);
  });
}


function Api(  ){

  /*
   * Bind all controller methods 
   */
  bindActions( this.auth, this );
  bindActions( this.snippets, this );
  bindActions( this.users, this );
}


Api.prototype._request = function( method, path, opts ){
  throw new Error('_request method need to be implemented');
};



/*
 * auth Controller 
 */
var auth = {};
Api.prototype.auth = auth;

/* Methods */

auth.postRegister = function( data ){
    return this._request( 'post', '/auth/register', { body: data } );
};


auth.getVerify = function( data ){
    return this._request( 'get', '/auth/verify', { query: data } );
};


auth.getProfile = function( data ){
    return this._request( 'get', '/auth/profile', { query: data } );
};


auth.getLogout = function( data ){
    return this._request( 'get', '/auth/logout', { query: data } );
};


auth.postLogin = function( data ){
    return this._request( 'post', '/auth/login', { body: data } );
};


auth.patchProfile = function( data ){
    return this._request( 'patch', '/auth/profile', { body: data } );
};



/*
 * snippets Controller 
 */
var snippets = {};
Api.prototype.snippets = snippets;

/* Methods */

snippets.get = function( data ){
    return this._request( 'get', '/snippets/', { query: data } );
};



/*
 * users Controller 
 */
var users = {};
Api.prototype.users = users;

/* Methods */




module.exports = Api;

