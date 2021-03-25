/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Examples = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( '' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// Examples

	var items = [
		{ title: '', file: 'arkanoid.app.json' },
		{ title: '', file: 'camera.app.json' },
		{ title: '', file: 'particles.app.json' },
		{ title: '', file: 'pong.app.json' }
	];

	var loader = new THREE.XHRLoader();

	for ( var i = 0; i < items.length; i ++ ) {

		( function ( i ) {

			var item = items[ i ];

			var option = new UI.Row();
			option.setClass( 'option' );
			option.setTextContent( item.title );
			option.onClick( function () {

				if ( confirm( '' ) ) {

					loader.load( 'examples/' + item.file, function ( text ) {

						editor.clear();
						editor.fromJSON( JSON.parse( text ) );

					} );

				}

			} );
			options.add( option );

		} )( i )

	}

	return container;

};
