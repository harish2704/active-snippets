# Active-Snippets 
Active-Snippets is a bit advanced snippet manager, written for developers

## [Demo Link](http://inflection.readthedocs.io/en/latest/)

## Details

* Active-Snippets are bit more than a plain piece of text.
* An Active-Snippet consists 
    - A template text written in [EJS/Embedded Javascript Template](http://ejs.co/) template
    - A custom form defnition.
        * A Form genererated using this defnition will be used to get some data
* Once it is created, we can render the given template with custom data

## Usage

* Press `New` button
* Provide `Name` and `Syntax` type for the Snippet
* Add/Delete any number of custom form fields
* Press `Preview Form` and see your custom form. Once it done, 
* Provide some sample data in newly generated form and press `Apply`
* Now type your template in the editor named 'Template Text to be rendered'
* You can see the live preview on the right side.
* in the editor, [Inflection.js](http://inflection.readthedocs.io/en/latest/) is available as `$i`. Which can be used to do simple sting manipulations
* Once it is done, `Save` the template

## Development

### Running development server

* open one terminal and run api-server `npm run start-api`
* open another terminal and run webpack-dev server `npm run start-dev`

### Production build

* Build client side bundles `npm run build`
* run API server `npm run start-api`

## TODO
- [x] Implement basic Idea and Add/Edit/View capabilities
- [x] Re-write with React.js and do clean-up 
- [ ] Build a basic website interface 
- [ ] Replace [json-server](https://github.com/typicode/json-server) using API server with a database
- [ ] Implement User-accounts and authentication for Edit/Delete
- [ ] Testing
- [ ] Implement rating mechanism
- [ ] Implement forking mechanism
- [ ] Implement server-side rendering for SEO

