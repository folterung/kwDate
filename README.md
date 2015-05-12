# kwDate

# To install simply use bower:
bower install kwDate

# Example usage:

    var d = new kwDate();

Return a date flattenedto the earliest time of the day:

    d.normalize();
    
Return a date flattened to the latest time of the day:

    d.normalize(true);

Return the number of days between the initial date and the date passed into the daysBetween method:

    d.daysBetween(’03/15/2015’);

Return a date from the point of the initial data (takes positive and negative numbers):

    d.getDateAt(5);
