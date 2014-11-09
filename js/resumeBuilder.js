//$("#main").append("Paulie Rockley");

var name = "Paul Rockley"
var role = "Data Analyst"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); // Note this will appear above formattedRole.
