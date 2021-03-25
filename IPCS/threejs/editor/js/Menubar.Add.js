/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Add = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'Добавить' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	//

	var meshCount = 0;
	var lightCount = 0;
	var cameraCount = 0;

	editor.signals.editorCleared.add( function () {

		meshCount = 0;
		lightCount = 0;
		cameraCount = 0;

	} );

	// Group

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Сгруппировать' );
	option.onClick( function () {

		var mesh = new THREE.Group();
		mesh.name = 'Сгруппировать ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );

	//

	options.add( new UI.HorizontalRule() );

	// Plane

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Плоскость' );
	option.onClick( function () {

		var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
		var material = new THREE.MeshStandardMaterial();
		var mesh = new THREE.Mesh( geometry, material );
		mesh.name = 'Плоскость ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );

	// Box

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Куб' );
	option.onClick( function () {

		var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
		var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Куб ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );

	// Circle

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Плоский круг' );
	option.onClick( function () {

		var radius = 1;
		var segments = 32;

		var geometry = new THREE.CircleBufferGeometry( radius, segments );
		var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Плоский круг ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );

	// Cylinder

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Цилиндр' );
	option.onClick( function () {

		var radiusTop = 1;
		var radiusBottom = 1;
		var height = 2;
		var radiusSegments = 32;
		var heightSegments = 1;
		var openEnded = false;

		var geometry = new THREE.CylinderBufferGeometry( radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded );
		var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Цилиндр ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );

	// Sphere

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Сфера' );
	option.onClick( function () {

		var radius = 1;
		var widthSegments = 32;
		var heightSegments = 16;
		var phiStart = 0;
		var phiLength = Math.PI * 2;
		var thetaStart = 0;
		var thetaLength = Math.PI;

		var geometry = new THREE.SphereBufferGeometry( radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength );
		var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Сфера ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );

	// Icosahedron

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Икосаэдр' );
	option.onClick( function () {

		var radius = 1;
		var detail = 2;

		var geometry = new THREE.IcosahedronGeometry( radius, detail );
		var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Икосаэдр ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );

	// // Torus

	// var option = new UI.Row();
	// option.setClass( 'option' );
	// option.setTextContent( 'Пончик' );
	// option.onClick( function () {

	// 	var radius = 2;
	// 	var tube = 1;
	// 	var radialSegments = 32;
	// 	var tubularSegments = 12;
	// 	var arc = Math.PI * 2;

	// 	var geometry = new THREE.TorusBufferGeometry( radius, tube, radialSegments, tubularSegments, arc );
	// 	var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
	// 	mesh.name = 'Пончик ' + ( ++ meshCount );

	// 	editor.execute( new AddObjectCommand( mesh ) );

	// } );
	// options.add( option );

	// TorusKnot

	// var option = new UI.Row();
	// option.setClass( 'option' );
	// option.setTextContent( 'TorusKnot' );
	// option.onClick( function () {

	// 	var radius = 2;
	// 	var tube = 0.8;
	// 	var tubularSegments = 64;
	// 	var radialSegments = 12;
	// 	var p = 2;
	// 	var q = 3;

	// 	var geometry = new THREE.TorusKnotBufferGeometry( radius, tube, tubularSegments, radialSegments, p, q );
	// 	var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
	// 	mesh.name = 'TorusKnot ' + ( ++ meshCount );

	// 	editor.execute( new AddObjectCommand( mesh ) );

	// } );
	// options.add( option );

	/*
	// Teapot

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Teapot' );
	option.onClick( function () {

		var size = 50;
		var segments = 10;
		var bottom = true;
		var lid = true;
		var body = true;
		var fitLid = false;
		var blinnScale = true;

		var material = new THREE.MeshStandardMaterial();

		var geometry = new THREE.TeapotBufferGeometry( size, segments, bottom, lid, body, fitLid, blinnScale );
		var mesh = new THREE.Mesh( geometry, material );
		mesh.name = 'Teapot ' + ( ++ meshCount );

		editor.addObject( mesh );
		editor.select( mesh );

	} );
	options.add( option );
	*/

	// Lathe

	// var option = new UI.Row();
	// option.setClass( 'option' );
	// option.setTextContent( 'Lathe' );
	// option.onClick( function() {

	// 	var points = [
	// 		new THREE.Vector2( 0, 0 ),
	// 		new THREE.Vector2( 4, 0 ),
	// 		new THREE.Vector2( 3.5, 0.5 ),
	// 		new THREE.Vector2( 1, 0.75 ),
	// 		new THREE.Vector2( 0.8, 1 ),
	// 		new THREE.Vector2( 0.8, 4 ),
	// 		new THREE.Vector2( 1, 4.2 ),
	// 		new THREE.Vector2( 1.4, 4.8 ),
	// 		new THREE.Vector2( 2, 5 ),
	// 		new THREE.Vector2( 2.5, 5.4 ),
	// 		new THREE.Vector2( 3, 12 )
	// 	];
	// 	var segments = 20;
	// 	var phiStart = 0;
	// 	var phiLength = 2 * Math.PI;

	// 	var geometry = new THREE.LatheBufferGeometry( points, segments, phiStart, phiLength );
	// 	var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial( { side: THREE.DoubleSide } ) );
	// 	mesh.name = 'Lathe ' + ( ++ meshCount );

	// 	editor.execute( new AddObjectCommand( mesh ) );

	// } );
	// options.add( option );

	//Sprite

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Картинка' );
	option.onClick( function () {

		var sprite = new THREE.Sprite( new THREE.SpriteMaterial() );
		sprite.name = 'Картинка ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( sprite ) );

	} );
	options.add( option );

	

	options.add( new UI.HorizontalRule() );

	// PointLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Источник света' );
	option.onClick( function () {

		var color = 0xffffff;
		var intensity = 1;
		var distance = 0;

		var light = new THREE.PointLight( color, intensity, distance );
		light.name = 'Источник света ' + ( ++ lightCount );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

	// SpotLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Прожектор' );
	option.onClick( function () {

		var color = 0xffffff;
		var intensity = 1;
		var distance = 0;
		var angle = Math.PI * 0.1;
		var penumbra = 0;

		var light = new THREE.SpotLight( color, intensity, distance, angle, penumbra );
		light.name = 'Прожектор ' + ( ++ lightCount );
		light.target.name = 'Прожектор ' + ( lightCount ) + ' Цель';

		light.position.set( 5, 10, 7.5 );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

	// DirectionalLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Направленный свет' );
	option.onClick( function () {

		var color = 0xffffff;
		var intensity = 1;

		var light = new THREE.DirectionalLight( color, intensity );
		light.name = 'Направленный свет ' + ( ++ lightCount );
		light.target.name = 'Направленный свет ' + ( lightCount ) + ' Цель';

		light.position.set( 5, 10, 7.5 );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

	// HemisphereLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Полушарие света' );
	option.onClick( function () {

		var skyColor = 0x00aaff;
		var groundColor = 0xffaa00;
		var intensity = 1;

		var light = new THREE.HemisphereLight( skyColor, groundColor, intensity );
		light.name = 'Полушарие света ' + ( ++ lightCount );

		light.position.set( 0, 10, 0 );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

	// AmbientLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Окружающий свет' );
	option.onClick( function() {

		var color = 0x222222;

		var light = new THREE.AmbientLight( color );
		light.name = 'Окружающий свет ' + ( ++ lightCount );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

	//

	options.add( new UI.HorizontalRule() );

	// PerspectiveCamera

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Перспектива' );
	option.onClick( function() {

		var camera = new THREE.PerspectiveCamera( 50, 1, 1, 10000 );
		camera.name = 'Перспектива ' + ( ++ cameraCount );

		editor.execute( new AddObjectCommand( camera ) );

	} );
	options.add( option );

	return container;

}
