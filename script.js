const mail = document.getElementById('mail');

let pattern, counter;

document.querySelector('.mobile-icon').addEventListener('click', () => {
	document.querySelector('.nav-links').classList.toggle('show');
	document.querySelector('.close').classList.toggle('show');
	document
		.querySelector('.close')
		.previousElementSibling.classList.toggle('hide');
});

document.getElementById('btn').addEventListener('click', () => {
	pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	mail.value.match(pattern)
		? ((mail.nextElementSibling.innerHTML = ' Check your mail '),
		  (mail.nextElementSibling.style.color = 'var(--dark-grayish-blue)'),
		  (mail.style.outline = 'none'))
		: !mail.value
		? ((mail.nextElementSibling.innerHTML = `Can't be blank`),
		  (mail.nextElementSibling.style.color = 'var(--bright-red)'),
		  (mail.style.outline = '2px solid var(--bright-red)'))
		: !mail.value.match(pattern)
		? ((mail.nextElementSibling.innerHTML = 'Please insert a valid email'),
		  (mail.nextElementSibling.style.color = 'var(--bright-red)'),
		  (mail.style.outline = '2px solid var(--bright-red)'))
		: ((mail.nextElementSibling.innerHTML = 'Error'),
		  (mail.nextElementSibling.style.color = 'var(--bright-red)'),
		  (mail.style.outline = '2px solid var(--bright-red)'));

	mail.value = '';
});

setInterval(function () {
	counter = 1;
	document.getElementById('radio' + counter).checked = true;
	counter++;
	counter > 4 ? (counter = 1) : '';
}, 10000);
