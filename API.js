var CLIENT_ID = '76239223139-cvbeb2os8iosv39l5p75t0jula6p193k.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBX5kq8GHwVyk_1I4sGRWRHE-zfs2obO4E';

var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function initClient() {
	gapi.client.init({
		apiKey: API_KEY,
		clientId: CLIENT_ID,
		discoveryDocs: DISCOVERY_DOCS,
		scope: SCOPES
	}).then(function () {
		// Listen for sign-in state changes.
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
		// Handle the initial sign-in state.
		updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
		authorizeButton.onclick = handleAuthClick;	//alter buttons as needed - cosmetic
		signoutButton.onclick = handleSignoutClick;
	}, function(error) {
		console.log(JSON.stringify(error, null, 2));
	});
}

function updateSigninStatus(isSignedIn) {
	if (isSignedIn) {
		authorizeButton.style.display = 'none';		//handles the appearance of sign in/out buttons
		signoutButton.style.display = 'block';
		//do this on login....
		console.log("Loaded to normal point.");
		onSignIn();
	} else {
		authorizeButton.style.display = 'block';
		signoutButton.style.display = 'none';
	}
}

function handleAuthClick(event) {
	gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
	gapi.auth2.getAuthInstance().signOut();
}

function onSignIn() {
	/*
	loadModal(3000,'Authorizing Application...');
	obj={resourceName:'people/me',personFields:'addresses,ageRanges,biographies,birthdays,coverPhotos,emailAddresses,events,genders,imClients,interests,locales,memberships,metadata,names,nicknames,organizations,occupations,phoneNumbers,photos,relations,relationshipStatuses,residences,skills,urls,userDefined'};
	gapi.client.people.people.get(obj).then(function(response) {
		console.log(response);
		loadAccount(response);
	},
	function(err) { 
		console.error("Execute error",err);
	})
	*/
	checkCalendar();
}
