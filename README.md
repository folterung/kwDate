# kwDate

## To install simply use bower:

    bower install kwDate

## Example usage:

    var d = new kwDate();

Return a date flattened to the earliest time of the day:

    new kwDate('03/10/2015').normalize(); 
    //returns kwDate object that has 0 hours, 0 minutes, 0 seconds, 0 milliseconds
    
Return a date flattened to the latest time of the day:

    d.normalize(true);
    //returns kwDate object that has 23 hours, 59 minutes, 59 seconds, 999 milliseconds

Return the number of days between the initial date and the date passed into the daysBetween method:

    new kwDate('03/10/2015').daysBetween(’03/15/2015’); //5

Return a date 5 days after the initial date:

    new kwDate('03/10/2015').getDateAt(5); 
    //returns kwDate object that is set to '03/15/2015'
    
Return a date 5 days before the initial date:

    new kwDate('03/10/2015').getDateAt(-5); 
    //returns kwDate object that is set to '03/05/2015'

Easily compare dates:

    new kwDate('03/05/2015').compare.before('03/10/2015'); //true
    new kwDate('03/15/2015').compare.after('03/10/2015'); //true
    new kwDate('03/10/2015').compare.equal('03/10/2015'); //true
