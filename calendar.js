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
