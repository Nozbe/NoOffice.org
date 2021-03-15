// Redirecting to links from the book:
// https://nooffice.link/REDIRECT
// which translates to https://nooffice.org/redirect?to=REDIRECT

let links = new Map([

//list of REDIRECT links
['nooffice', 'https://nooffice.org'],


//chapter 19
['ocr', 'https://en.wikipedia.org/wiki/Optical_character_recognition'],
['evernote','https://Evernote.com'],
['swiftscan', 'https://swiftscan.app/en/index.html'],
['ios-scan', 'https://support.apple.com/en-us/HT210336'],
['dropbox', 'https://www.dropbox.com'],
['box', 'https://box.com'],
['gdrive', 'https://drive.google.com'],
['onedrive', 'https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage'],
['iwork', 'https://www.apple.com/iwork/'],
['gsheets', 'https://www.google.com/sheets/about/'],
['excel', 'https://www.microsoft.com/en-us/microsoft-365/excel'],
['mfa', 'https://en.wikipedia.org/wiki/Multi-factor_authentication'],
['messages', 'https://support.apple.com/explore/messages'],
['signal', 'https://www.signal.org'],
['telegram', 'https://telegram.org'],
['whatsapp', 'https://www.whatsapp.com'],
['ipadonly', 'https://ipadonly.com/book/'],
['vpn', 'https://en.wikipedia.org/wiki/Virtual_private_network'],
['github', 'https://nooffice.org/why-in-any-company-you-should-be-using-version-control-for-anything-how-we-use-github-not-only-bc2554308455/'],

//chapter 20

['conversation', 'https://en.wikipedia.org/wiki/A_Little_Less_Conversation'],
['slack', 'https://slack.com'],
['msteams', 'https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software'],
['cognitive', 'https://www.pnas.org/content/106/37/15583'], 
['digital-minimalism', 'https://www.calnewport.com/books/digital-minimalism/'],

//chapter 21
['offices', 'https://sliwinski.com/tag/office'],
['cabinet', 'https://sliwinski.com/declutter-your-desk-why-i-love-my-clutter-fre/'],
['stand', 'https://michael.team/myoffice/'],
['whiteboard', 'https://sliwinski.com/whiteboard/'],

//chapter 22


//chapter 23
['basecamphires', 'https://m.signalvnoise.com/basecamp-is-hiring-a-product-designer/'],
['nozbehires', 'https://nozbe.com/blog/2020-recruitment-nozbe-java-script-programmer/'],
['forms', 'https://www.google.com/forms/about/'],
['strenghts', 'https://www.gallup.com/cliftonstrengths/en/253868/popular-cliftonstrengths-assessment-products.aspx'],
['slack', 'https://slack.com/'],
['careers', 'https://nozbe.com/careers'],

//chapter 24
['seth-zoom','https://seths.blog/2020/08/toward-a-zoom-agreement/'],

//chapter 25
['calendly', 'https://calendly.com/'], 
['zoom', 'https://zoom.us/'], 
['vimeo', 'https://vimeo.com/'], 

//chapter 26
['p91', 'https://michael.team/podcast-91/'],
['p116', 'https://michael.team/podcast-116/'],
['p141', 'https://michael.team/podcast-141/'],
['p162', 'https://michael.team/podcast-162/'],
['p183', 'https://michael.team/podcast-183/'],
['p195', 'https://michael.team/podcast-195/'],
['distributed', 'https://distributed.blog/2019/11/26/episode-15-inside-the-grand-meetup/'],
['rework', 'https://rework.fm/how-buffer-meets-up/'],
['virtual', 'https://nozbe.com/blog/virtual-covid-safe-online-company-retreat/'],

//chapter 28
['happiness', 'https://www.happinesshypothesis.com/'],
['vacations', 'https://www.bls.gov/opub/ted/2018/private-industry-workers-received-average-of-15-paid-vacation-days-after-5-years-of-service-in-2017.htm'],
['japantime', 'https://www.quora.com/How-much-vacation-time-is-normal-in-Japan-for-a-full-time-worker?share=1'],
['vpolicy', 'https://rework.fm/take-some-time-off/'],
['sabbatical', 'https://rework.fm/take-a-break/'],

//chapter 30
['1password', 'https://1password.com/business/'],
['authy', 'https://authy.com/'],
['authenticator', 'https://en.wikipedia.org/wiki/Google_Authenticator'],
['security', 'https://nozbe.how/Fyni3'],
['securemac', 'https://nozbe.how/LcvtK'],
['secureios', 'https://nozbe.how/vwgDQ'],
['secureandroid', 'https://nozbe.how/gFEhB'],
['securewindows', 'https://nozbe.how/OoXkY'],
['byod', 'https://en.wikipedia.org/wiki/Bring_your_own_device'],
['nozbehow', 'https://how.nozbe.com'],
['phishing', 'https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams'],
['algo', 'https://github.com/trailofbits/algo'],


]);

function redirect () {
	let params = new URLSearchParams(window.location.search);
	let to = params.get('to');
	if (to) {
		document.querySelector("#to").setAttribute("href", links.get(to));
		document.querySelector('meta[http-equiv="Refresh"]').setAttribute("content", '0; ' + links.get(to));
	}
}