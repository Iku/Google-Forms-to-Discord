const POST_URL = 'WEBHOOKURL';

function onSubmit(e) {
	let response = e.response.getItemResponses();

	let items = [];

	for (let i = 0; i < response.length ; i++) {
		let question = response[i].getItem().getTitle();
		let answer = response[i].getResponse();

		if (answer == '') continue;

		items.push( {'name': question, 'value': answer, 'inline': false} );
	}

	let options = {
		'method' : 'post',
		'payload': JSON.stringify({
			'embeds': [
				{
					'title': 'TOP TEXT CHANGE THIS IN SCRIPT',
					'fields': items,
					'footer': {'text': 'BOTTOM TEXT CHANGE THIS IN SCRIPT'}
				}
			]
		})
	};

	UrlFetchApp.fetch(POST_URL, options);
}
