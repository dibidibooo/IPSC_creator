/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.File = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'Файл' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// New

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Создать новый файл' );
	option.onClick( function () {

		if ( confirm( 'Все несохраненные данные будут потеряны. Уверены ли вы?' ) ) {

			editor.clear();
            var fs = require('fs');
var newImgArr = fs.readdirSync('projectImg');
            newImgArr.forEach(function(item, i, newImgArr) {
                

              try{
                                 fs.unlink('projectImg/'+item,function(err){
        if(err) return console.log(err);
        console.log('Файл успешно удален');
   }); 
              }
                catch(e){
                    
                }
                
});
		}

	} );
	options.add( option );

	//

	options.add( new UI.HorizontalRule() );

	// Import

	var fileInput = document.createElement( 'input' );
	fileInput.type = 'file';
	fileInput.addEventListener( 'change', function ( event ) {

		editor.loader.loadFile( fileInput.files[ 0 ] );

	} );

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Импортировать файл' );
	option.onClick( function () {

		fileInput.click();

	} );
	options.add( option );

	//

	options.add( new UI.HorizontalRule() );

	// Export Geometry

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Экспортировать геометрию' );
	option.onClick( function () {

		var object = editor.selected;

		if ( object === null ) {

			alert( 'Объект не выбран.' );
			return;

		}

		var geometry = object.geometry;

		if ( geometry === undefined ) {

			alert( 'У выбранного объекта нет геометрии.' );
			return;

		}

		var output = geometry.toJSON();

		try {

			output = JSON.stringify( output, null, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		} catch ( e ) {

			output = JSON.stringify( output );

		}

		saveString( output, 'geometry.json' );

	} );
	options.add( option );

	// Export Object

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Экспортировать объект' );
	option.onClick( function () {

		var object = editor.selected;

		if ( object === null ) {

			alert( 'Объект не выбран' );
			return;

		}

		var output = object.toJSON();

		try {

			output = JSON.stringify( output, null, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		} catch ( e ) {

			output = JSON.stringify( output );

		}

		saveString( output, 'model.json' );

	} );
	options.add( option );

	// Export Scene

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Экспортировать сцену' );
	option.onClick( function () {

		var output = editor.scene.toJSON();

		try {

			output = JSON.stringify( output, null, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		} catch ( e ) {

			output = JSON.stringify( output );

		}

		saveString( output, 'scene.json' );

	} );
	options.add( option );















	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Экспортировать AJNRE' );
	option.onClick( function () {

		var output = editor.scene.toJSON();

		try {

			output = JSON.stringify( output, null, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		} catch ( e ) {

			output = JSON.stringify( output );

		}

		saveString( output, 'scene.json' );

	} );
	options.add( option );










	// Export OBJ

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Экспортировать OBJ' );
	option.onClick( function () {

		var object = editor.selected;

		if ( object === null ) {

			alert( 'Объект не выбран.' );
			return;

		}

		var exporter = new THREE.OBJExporter();

		saveString( exporter.parse( object ), 'model.obj' );

	} );
	options.add( option );

	// Export STL

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Экспортировать STL' );
	option.onClick( function () {

		var exporter = new THREE.STLExporter();

		saveString( exporter.parse( editor.scene ), 'model.stl' );

	} );
	options.add( option );

	//

	options.add( new UI.HorizontalRule() );

	// Publish

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Опубликовать' );
	option.onClick( function () {

		var zip = new JSZip();

		//

		var output = editor.toJSON();
		output.metadata.type = 'App';
		delete output.history;

		output = JSON.stringify( output, null, '\t' );
		output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		zip.file( 'app.json', output );

		//

		var manager = new THREE.LoadingManager( function () {

			save( zip.generate( { type: 'blob' } ), 'project.zip' );

		} );

		var loader = new THREE.XHRLoader( manager );
		loader.load( 'js/libs/app/index.html', function ( content ) {

			zip.file( 'index.html', content );

		} );
		loader.load( 'js/libs/app.js', function ( content ) {

			zip.file( 'js/app.js', content );

		} );
		loader.load( '../build/three.min.js', function ( content ) {

			zip.file( 'js/three.min.js', content );

		} );

		loader.load( '../examples/js/controls/VRControls.js', function ( content ) {

			zip.file( 'js/VRControls.js', content );

		} );

		loader.load( '../examples/js/effects/VREffect.js', function ( content ) {

			zip.file( 'js/VREffect.js', content );

		} );
        var fs = require('fs');
       var imgArr =  fs.readdirSync('projectImg');
       imgArr.forEach(function(item, i, arr) {
      
           try{
        var content = fs.readFileSync('projectImg/'+item);
      zip.file( 'projectIMG/'+item, content );
 
               
               
               
               
       }
                catch(err){
                    
                }


		

	
       });
	} );
	options.add( option );

	/*
	// Publish (Dropbox)

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Publish (Dropbox)' );
	option.onClick( function () {

		var parameters = {
			files: [
				{ 'url': 'data:text/plain;base64,' + window.btoa( "Hello, World" ), 'filename': 'app/test.txt' }
			]
		};

		Dropbox.save( parameters );

	} );
	options.add( option );
	*/


	//

	var link = document.createElement( 'a' );
	link.style.display = 'none';
	document.body.appendChild( link ); // Firefox workaround, see #6594

	function save( blob, filename ) {

		link.href = URL.createObjectURL( blob );
		link.download = filename || 'data.json';
		link.click();

		// URL.revokeObjectURL( url ); breaks Firefox...

	}

	function saveString( text, filename ) {

		save( new Blob( [ text ], { type: 'text/plain' } ), filename );

	}

	return container;

};
