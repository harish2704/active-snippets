/*
 * This file was auto-generated from the API controllers using this tool
 * https://github.com/harish2704/expose-controllers-http
 *
 * Generated-At: Tue Jul 05 2016 12:36:48 GMT+0530 (IST)
 */




/**
* Abstract class Api.
* Extend this class and implement _request method using any available http client libraries
*/
function Api(){ };




/*
 * auth Controller 
 */

/* Methods */

Api.prototype.postRegisterAuth = function( data ){
    return this._request( 'post', '/auth/register', { body: data } );
};


Api.prototype.getVerifyAuth = function( data ){
    return this._request( 'get', '/auth/verify', { query: data } );
};


Api.prototype.getProfileAuth = function( data ){
    return this._request( 'get', '/auth/profile', { query: data } );
};


Api.prototype.getLogoutAuth = function( data ){
    return this._request( 'get', '/auth/logout', { query: data } );
};


Api.prototype.postLoginAuth = function( data ){
    return this._request( 'post', '/auth/login', { body: data } );
};


Api.prototype.patchProfileAuth = function( data ){
    return this._request( 'patch', '/auth/profile', { body: data } );
};



/*
 * snippets Controller 
 */

/* Methods */

Api.prototype.listSnippets = function( data ){
    return this._request( 'get', '/snippets/', { query: data } );
};


Api.prototype.createSnippets = function( data ){
    return this._request( 'post', '/snippets/', { body: data } );
};


Api.prototype.updateSnippets = function( data ){
    return this._request( 'put', '/snippets/', { body: data } );
};



/*
 * users Controller 
 */

/* Methods */




module.exports = Api;

