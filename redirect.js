// Redirecting to links from the book:
// https://nooffice.link/REDIRECT
// which translates to https://nooffice.org/redirect?to=REDIRECT

let links = new Map([

//list of REDIRECT links
['nooffice', 'https://nooffice.org'],


//chapter 21
['offices', 'https://sliwinski.com/tag/office'],
['cabinet', 'https://sliwinski.com/declutter-your-desk-why-i-love-my-clutter-fre/'],
['stand', 'https://sliwinski.com/homeoffice/'],
['whiteboard', 'https://sliwinski.com/whiteboard/'],

//chapter 22


//chapter 23
['basecamphires', 'https://m.signalvnoise.com/basecamp-is-hiring-a-product-designer/'],
['nozbehires', 'https://nozbe.com/blog/2020-recruitment-nozbe-java-script-programmer/'],
['forms', 'https://www.google.com/forms/about/'],
['strenghts', 'https://www.gallup.com/cliftonstrengths/en/253868/popular-cliftonstrengths-assessment-products.aspx'],
['slack', 'https://slack.com/'],
['careers', 'https://nozbe.com/careers'],




]);

function redirect () {
	let params = new URLSearchParams(window.location.search);
	let to = params.get('to');
	if (to) {
		document.querySelector("#to").setAttribute("href", links.get(to));
		document.querySelector('meta[http-equiv="Refresh"]').setAttribute("content", '0; ' + links.get(to));
	}
}