		  (function(e,t,n,r){function i(e,n){e=t.createElement("script");e.async=1;e.src=r;n=t.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)};e.attachEvent?e.attachEvent("onload",i):e.addEventListener("load",i,false)})(window,document,"_castle","//d2t77mnxyo7adj.cloudfront.net/v1/c.js")
		  _castle('setAppId', '365124335971851');

	
			function setCookie(variavel, valor) {
			    document.cookie = variavel + "=" + valor;
			}
			
			function getCookie(cname) {
			    var name = cname + "=";
			    var ca = document.cookie.split(';');
			    for(var i=0; i<ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0)==' ') c = c.substring(1);
			        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
			    }
			    return "";
			}
			
			function checkCookie(campo) {
			    var variavel = getCookie(campo);
			    if (variavel != "") {
			        _castle('identify', variavel);
			        _castle('trackPageview');
			    } else {
			    	// Pega o ip do usuario
					$.get("http://ipinfo.io", function(response) {
					    var ip = response.ip;
					    var agora = Date.now();
					    ip =  ip.replace(".","");
					    ip =  ip.replace(".","");
					    ip =  ip.replace(".","");
					    ip =  ip.replace(".","");
					    var identificador = ip*agora;
				        setCookie(campo, identificador);
				        _castle('identify', identificador);
				        _castle('trackPageview');
					}, "jsonp");
			    }
			}
			checkCookie('lfwebdev-id');
