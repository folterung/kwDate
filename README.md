# kwDate

# To install simply use bower:
bower install kwDate

# Example usage:
var d = new kwDate();

d.normalize() //returns a date flattened to the earliest time of the day.
d.normalize(true) //returns a date flattened to the latest time of the day.

d.daysBetween(’03/15/2015’) //returns the number of days between the initial date and the date passed into the daysBetween method.

Return a date from the point of the initial data (takes positive and negative numbers):

d.getDateAt(5);