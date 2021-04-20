/**
 * @author mrdoob / http://mrdoob.com/
 */

var Menubar = function ( editor ) {

	var container = new UI.Panel();
	container.setId( 'menubar' );

	container.add( new Menubar.File( editor ) );
	container.add( new Menubar.Edit( editor ) );
	container.add( new Menubar.Add( editor ) );
	container.add( new Menubar.Play( editor ) );


	var signals = editor.signals;
	var buttons = new UI.Panel();
	container.add( buttons );

	// translate / rotate / scale

	var translate = new UI.Button( 'Перемещать ( w )' ).setMarginTop("6px").onClick( function () {

		signals.transformModeChanged.dispatch( 'translate' );

	} );
	buttons.add( translate );
    
    
	var rotate = new UI.Button( 'Вращать ( e )' ).onClick( function () {

		signals.transformModeChanged.dispatch( 'rotate' );

	} );
	buttons.add( rotate );

	var scale = new UI.Button( 'Масштаб  ( r )' ).onClick( function () {

		signals.transformModeChanged.dispatch( 'scale' );

	} );
	buttons.add( scale );

	// scrin to map image
	var scale = new UI.Button( 'Скрин' ).onClick( function () {

		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

		console.log("Screen");
		// var reder_test = document.getElementById("player")
		// var canvas_test = reder_test.getElementsByTagName("canvas")
		// if(canvas_test.length > 0) {
			// get canvas
			renderer = new THREE.WebGLRenderer({
				antialias: true,
				preserveDrawingBuffer: true
			});
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);

			renderer.render(editor.scene, editor.camera);

			imgData = renderer.domElement.toDataURL("image/png");


			var myImage = imgData;
			// var myImage = canvas_test[0].toDataURL("image/png");

			// set to localStorage and go to main window
			localStorage.setItem("renderImage", myImage);
			console.log(myImage);
			document.location.href = "../../init.html";
		// } else {
		// 	alert("Render scene")
		// }
		// /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	} );
	buttons.add( scale );
    
	// back
    var line = new UI.Button( 'НАЗАД' ).onClick( function () {

		document.location.href = "../../init.html";
		
	} );
	buttons.add( line );


	// grid
	// var grid = new UI.Number( 25 ).setWidth( '40px' ).onChange( update );
	// buttons.add( new UI.Text( 'Сетка: ' ) );
	// buttons.add( grid );

	var snap = new UI.THREE.Boolean( false, 'snap' ).onChange( update );
	// buttons.add( snap );

	var local = new UI.THREE.Boolean( false, 'local' ).onChange( update );
	// buttons.add( local );

	var showGrid = new UI.THREE.Boolean( true, 'Показать' ).onChange( update );
	buttons.add( showGrid );

	function update() {

		// signals.snapChanged.dispatch( snap.getValue() === true ? grid.getValue() : null );
		signals.spaceChanged.dispatch( local.getValue() === true ? "local" : "world" );
		// signals.showGridChanged.dispatch( showGrid.getValue() );

	}


	
	return container;

};
