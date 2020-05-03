		let x = setInterval(number,50);
		var y = 0;
		function number(argument) {
			var time = document.querySelector('#time');
			y++;
			time.innerHTML=y;
			if(y==100){
				time.style.opacity = '0';
				clearInterval(x);
				document.querySelector('#loader').style.marginTop=
				'-100vh';
			}
		}