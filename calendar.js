lCal='corehoundsystem.com_m7ur5vu1etheie89iqesqbovfo@group.calendar.google.com';
core={'email':'corehoundsystem.com_m7ur5vu1etheie89iqesqbovfo@group.calendar.google.com','name':'Loop by Core Hound System','sheet':'1XAOvPnompoTV0r7OU4dTnlOkhi1LXRvXvqj7VKwOODg'};
u='uuid';

/* FLOW
user logs in - check to see if the user has a line in USER SHEETS
	yes - BUILD PAGE
	no - PROMPT SYNC
BUILD PAGE

ADD CALENDAR
	create a calendar with specific name and hide it - update user data
ADD EVENT
	create an event with:
		Loop as attendee - attach to correct calendar
		Use HTML to embed uuids and other data
			Use cURL to interpret this data

*/
function appendPre(x) {
	console.log(x);
}

function checkCalendar() {
	gapi.client.sheets.spreadsheets.values.update({
		'spreadsheetId': core.sheet,
		'range': 'Sheet1!A2',
		'majorDimension':'ROWS',
		'valueInputOption': 'RAW',
		'values':['Test 1']
	}).then(function(response) {
		apprendPre(response);
	}, function(response) {
		appendPre('Error: ' + response.result.error.message);
	});
	
	
	//THIS WORKS
	/*
	gapi.client.calendar.calendars.insert({
		'summary':'Loop Calendar - ' + u,
		'timeZone':'America/Los_Angeles'
		
	}).then(function(response) {
		console.log(response);
		gapi.client.calendar.events.insert({
			'calendarId': response.result.id,
			"end": {
				'dateTime':'2019-12-20T19:00:00-08:00'
			},
			'start': {
				'dateTime':'2019-12-20T17:00:00-08:00'
			},
			'description':'Test Event Share',
			'attendees':[
				{
					'email':core.email,
					'displayName':core.name
				}
			],
			
		}).then(function(response) {
			console.log(response);
		});
	});
	*/
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
