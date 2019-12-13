lCal='Y29yZWhvdW5kc3lzdGVtLmNvbV9tN3VyNXZ1MWV0aGVpZTg5aXFlc3Fib3Zmb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t';

function checkCalendar() {
	gapi.client.calendar.events.list({
		'calendarId': lCal,
		'timeMin': (new Date()).toISOString(),
		'showDeleted': false,
		'singleEvents': true,
		'maxResults': 10,
		'orderBy': 'startTime'
	}).then(function(response) {
		var events = response.result.items;
		console.log('Upcoming events:');

		if (events.length > 0) {
			for (i = 0; i < events.length; i++) {
				var event = events[i];
				var when = event.start.dateTime;
				if (!when) {
					when = event.start.date;
				}
				console.log(event.summary + ' (' + when + ')')
			}
		} else {
			console.log('No upcoming events found.');
		}
	});
}
