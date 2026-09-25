// Site settings for the Duston Bowmen records site.
//
// CLUB_SERVICE_URL and CLUB_GOOGLE_CLIENT_ID switch on the data and privacy
// service and the site admin (see "admin set-up guide.txt" in the
// DB-club-records-admin folder):
//   CLUB_SERVICE_URL: the Apps Script web app address, ending in /exec
//   CLUB_GOOGLE_CLIENT_ID: the Google sign-in client ID, ending in .apps.googleusercontent.com
window.CLUB_SERVICE_URL = "https://script.google.com/macros/s/AKfycbwKCE9npLG6aRLzaC-AbdaSIoexWYgooYCHf93-aEGma53Dwd9MJ7QQxa78g-GHxcAoeA/exec";
window.CLUB_GOOGLE_CLIENT_ID = "29858523179-m3aqpk9n6er8mttn0isii75hd67pnnpj.apps.googleusercontent.com";

// The service reads the members' sheets itself, so this list stays empty to
// keep the sheet links off the public site. Add or remove sheets on the
// site's admin page. (It is only used if CLUB_SERVICE_URL is ever emptied.)
window.CLUB_MEMBERS = [];
