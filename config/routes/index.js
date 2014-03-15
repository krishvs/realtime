module.exports.routes = {
	'/login' : {
		resources : 'Login'
 	},
 	'/signup' : {
		verb : 'get',
		to : 'Login',
		action : 'new'
 	},
 	'/dashboard' : {
 		resources : 'dashboard',
 		nested : {
 			'/whats' : {
 				resources : 'Login'
 			}
 		}
 	},
 	'/:subdomain1/subdomain' :{
 		resources : 'dashboard'
 	},
 	'/:subdomain/support':{
 		resources : "support"
 	}
}

