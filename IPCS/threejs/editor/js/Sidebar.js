/**
 * @author mrdoob / http://mrdoob.com/
 */

var Sidebar = function ( editor ) {

	var container = new UI.Panel();
	container.setId( 'sidebar' );

	//

	var sceneTab = new UI.Text( 'СЦЕНА' ).onClick( onClick );
	var projectTab = new UI.Text( 'ПРОЕКТ' ).onClick( onClick );
	var settingsTab = new UI.Text( 'НАСТРОЙКИ' ).onClick( onClick );

	var tabs = new UI.Div();
	tabs.setId( 'tabs' );
	tabs.add( sceneTab, projectTab, settingsTab );
	container.add( tabs );

	function onClick( event ) {

		select( event.target.textContent );

	}

	//

	var scene = new UI.Span().add(
		new Sidebar.Scene( editor ),
		new Sidebar.Properties( editor ),
		new Sidebar.Animation( editor ),
		new Sidebar.Script( editor )
	);
	container.add( scene );

	var project = new UI.Span().add(
		new Sidebar.Project( editor )
	);
	container.add( project );

	var settings = new UI.Span().add(
		new Sidebar.Settings( editor ),
		new Sidebar.History( editor )
	);
	container.add( settings );

	//

	function select( section ) {

		sceneTab.setClass( '' );
		projectTab.setClass( '' );
		settingsTab.setClass( '' );

		scene.setDisplay( 'none' );
		project.setDisplay( 'none' );
		settings.setDisplay( 'none' );

		switch ( section ) {
			case 'СЦЕНА':
				sceneTab.setClass( 'selected' );
				scene.setDisplay( '' );
				break;
			case 'ПРОЕКТ':
				projectTab.setClass( 'selected' );
				project.setDisplay( '' );
				break;
			case 'НАСТРОЙКИ':
				settingsTab.setClass( 'selected' );
				settings.setDisplay( '' );
				break;
		}

	}

	select( 'СЦЕНА' );

	return container;

};