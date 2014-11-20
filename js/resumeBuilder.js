//$("#main").append("Paulie Rockley");

/*
var name = "Paul Rockley"
var role = "Data Analyst"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); // Note this will appear above formattedRole.
*/

var skills = ["hydraulics", "painting", "sealing"];

var bio = {
	"name" : "Paul Rockley",
	"role" : "Data Analyst",
	"contacts" : {
		"mobile" : "085-12345678",
		"email" : "paul@example.com"
	},
	"welcomeMessage" : "Hello there, welcome to my online CV",
	"skills" : skills,
	"bioPic" : "images/fry.jpg"
};
//bio.city = "Cork"
bio["city"] = "Cork";

var work = {};
work.position = "Low";
work.employer = "Lucky to have me";
work.yearsWorked = 1;
work.busCity = "Cork";

var education = {};
education["schName"] = "Miggleton";
education["yearsAttended"] = "1998-1999";
education["schCity"] = "Miggleton";

$("#main").append(bio.name);
$("#main").append(bio.city);
$("#main").append(work["position"]);
$("#main").append(education.schName);