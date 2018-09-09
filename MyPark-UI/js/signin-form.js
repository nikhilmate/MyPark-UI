var submit = document.getElementById('signin-submit');
submit.addEventListener('click', add);

function add(ev) {
	console.log('ok');
	
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var errorUser = document.getElementById('error-user');
	var errorPass = document.getElementById('error-pass');

	if (username.value == '') {
		ev.preventDefault();	
		errorUser.innerHTML = 'Plaese Fill the Username';
		errorPass.innerHTML = '';
	} else if (password.value == '') {
		ev.preventDefault();
		errorUser.innerHTML = '';
		errorPass.innerHTML = 'Plaese Fill the Username';
	} else {
		var user = username.value;
		var pass = password.value;
		var xhr = new XMLHttpRequest();
		var url = `signin.inc.php?username=${user}&password=${pass}`;
		xhr.open('POST', url, true);
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.onreadystatechange = function() {
			if (xhr.readystate == 4 && xhr.status == 200) {
				console.log('YEs');
			} else if (xhr.readystate == 2) {
				ev.preventDefault();
			}
		} 
		//xhr.onreadystatechange

		xhr.send();	
	}
	
}