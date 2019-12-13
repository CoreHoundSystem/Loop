lCal='corehoundsystem.com_m7ur5vu1etheie89iqesqbovfo@group.calendar.google.com';
relIDs='monday,thursday,fishing,songs';
u='monday';

function checkCalendar(u) {
	gapi.client.calendar.events.list({
		'calendarId': lCal,
		'timeMin': (new Date()).toISOString(),
		'showDeleted': false,
		'singleEvents': true,
		'q':u,
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
	addEvent();
}

function addEvent() {
	gapi.client.calendar.events.insert({
		'calendarId': lCal,
		"end": {
			'dateTime':'2019-12-20T14:00:00-08:00'
		},
		'start': {
			'dateTime':'2019-12-20T13:00:00-08:00'
		},
		'description':'Test Event'
		
		
	}).then(function(response) {
		console.log(response);
	});
}
