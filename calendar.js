lCal='corehoundsystem.com_m7ur5vu1etheie89iqesqbovfo@group.calendar.google.com';
core='info@corehoundsystem.com';
gmail='info@thesassyalpaca.com';
relIDs='monday,thursday,fishing,songs';
u='monday';


function checkCalendar(u) {
	gapi.client.calendar.events.insert({
		'calendarId': lCal,
		"end": {
			'dateTime':'2019-12-20T14:00:00-08:00'
		},
		'start': {
			'dateTime':'2019-12-20T13:00:00-08:00'
		},
		'description':'Test Event Share',
		'attendees':[
			{'email':core}
		],
		
	}).then(function(response) {
		console.log(response);
	});
}
	
	/*
	gapi.client.calendar.acl.insert({
		'calendarId': lCal,
		'resource':{
			'role':'writer',
			'scope':{
				'type':'user',
				'value':gmail
			}
		}
	}).then(function(response) {
		console.log(response);
	});
}
*/
	/*
	see if the user has a calendar with specific name
		yes-proceed
		no-create calendar with specific name
			hide calendar?
			desc,id,summary,timeZone
			*/









/*
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
*/
