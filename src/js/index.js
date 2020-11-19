import '../css/resets.scss';
import './css/base.scss';
import './css/form.scss';
import './css/footer.scss';
import './css/header.scss';

const textComponent = () => {
	const elH1 = document.createElement('h1');
	elH1.innerHTML = 'Hello World';
	return elH1;
};

document.body.appendChild(textComponent());
