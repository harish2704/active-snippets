var Template = require('../models/Template'),
    _ = require('underscore'),
    formBuilder = require('bootstrap-form-builder'),
    paginator = require('generic-paginate')( {defaults:{ size: 10 }});

function processData( data ){

    if ( typeof data.settings === 'string' ){
        try{
            data.settings = JSON.parse( data.settings );
        }
        catch( e ){
            data.settings = {};
        }
    }
    data.settings = data.settings || {};
    if( ! data.openTag ){
        data.openTag = '<%';
    }
    if( ! data.closeTag ){
        data.closeTag = '%>';
    }
    return data;
}

exports.index = function(req, res ) {

    var kw = req.query.keyword;
    var conditions = {};
    if ( kw ){
        conditions.name = {
            '$regex' : ".*" + kw + ".*",
            '$options': 'i'
        };
    }
    Template.count( conditions, function( err, count ){
        var paginationParams = {};
        paginationParams.count = count;
        paginationParams.page = req.query.page;

        var pagination = paginator.paginate( paginationParams );

        return Template.find(conditions).skip(pagination.start-1).limit( paginator.defaults.size).exec(function( err, templates ){
            return res.render('templates/index', { templates: templates, pagination: pagination });
        });
    });
};

exports.load = function( id, req, res, next ){
    Template.findById(id, function( err, template ){
        return next( err, template );
    });
};

exports.create = function( req, res ){

    var userData = req.body;
    userData = processData( userData );
    var template = new Template( userData );
    return template.save( function( err, template ){
        if( err ){
            return res.send( err );
        }
         return res.render('debug', {template: template});
    });
};
exports.show = function( req, res ){
    var id = req.params.template;

    return Template.findById( id , function( err, template ){
        var out = _.defaults( {template: template }, formBuilder.helpers );
        return res.render('templates/show', out );
    });
};

exports.destroy = function( req, res ){
    var id = req.params.template;

    return Template.remove( {_id: id }, function( err  ){
        return res.redirect( 'back', { _code: !err } );
    });
};

exports.new = function( req, res ){
    res.render('templates/new');
};

exports.edit = function( req, res ){
    var id = req.params.template;
    return Template.findById( id , function( err, template ){
        return res.render('templates/edit', {template: template });
    });
};

exports.update = function( req, res ){
    var id = req.params.template;
    var data = _.pick( req.body, 'name', 'source', 'settings', 'lang', 'openTag', 'closeTag' );
    data = processData(data );
    return Template.findById( id , function( err, template ){
        template = _.extend( template, data );
        return template.save( function( err, template ){
            if ( err ){
                return res.send(503);
            }
            return res.redirect( 'back');
            
        });

    });
};
