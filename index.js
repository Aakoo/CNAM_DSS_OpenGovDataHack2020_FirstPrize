

$(document).ready( function() {
	//var variableRecuperee = <?php echo json_encode($test); ?>;
	$('#mapaffiche').load('cluster.html');
	
	$("#admin").click(function() {
		$('#change').load('menu_admine.html');
		$('#selection').load('selection_admin.html');
		});
	$("#prest").click(function() {
		$('#change').load('menu_prest.html');
		$('#selection').load('prestataire_selection.html');
		});
		
	
});

