$(document).ready(function(e){
	//modal theme vex
	vex.defaultOptions.className = 'vex-theme-flat-attack';
	//modal ingresar vex
	 $('.ingresar').click(function(){
        vex.dialog.open({
            message: 'Ingrese los datos solicitados:',
            input: '' +
                '<input name="username" type="text" placeholder="Usuario" required />' +
                '<input name="password" type="password" placeholder="Contraseña" required />' +
            '',
            buttons: [
                $.extend({}, vex.dialog.buttons.YES, { text: 'Ingresar' }),
                $.extend({}, vex.dialog.buttons.NO, { text: 'Cerrar' })
            ],
            callback: function (data) {
                $('.demo-result-login').show().html('' +
                    '<h4>Result</h4>' +
                    '<p>' +
                        'Username: <b>' + data.username + '</b><br/>' +
                        'Password: <b>' + data.password + '</b>' +
                    '</p>' +
                '')
            }
        });
    });
	 //modal registrar vex
	 $('.registrar').click(function(){
        vex.dialog.open({
            message: 'Ingrese los datos solicitados:',
            input: '' +
                '<input name="rut" type="text" placeholder="RUT" required />' +
                '<input name="nombre" type="text" placeholder="NOMBRE" required />' +
                '<input name="apellidos" type="text" placeholder="APELLIDOS" required />' +
                '<input name="email" type="email" placeholder="EMAIL" required />' +
                '<input name="usuario" type="text" placeholder="USUARIO" required />' +
                '<input name="password" type="password" placeholder="CONTRASEÑA" required />' +
            '',
            buttons: [
                $.extend({}, vex.dialog.buttons.YES, { text: 'Registrar' }),
                $.extend({}, vex.dialog.buttons.NO, { text: 'Cerrar' })
            ],
            callback: function (data) {
                $('.demo-result-login').show().html('' +
                    '<h4>Result</h4>' +
                    '<p>' +
                        'Username: <b>' + data.username + '</b><br/>' +
                        'Password: <b>' + data.password + '</b>' +
                    '</p>' +
                '')
            }
        });
    });

});