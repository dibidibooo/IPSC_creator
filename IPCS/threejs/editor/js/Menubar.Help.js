/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Help = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( '' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// Source code

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( '' );
	option.onClick( function () {

		document.location.href = "#";

	} );
	options.add( option );

	// About

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( '' );
	option.onClick( function () {

		document.location.href = "#";

	} );
	options.add( option );

	return container;

};
