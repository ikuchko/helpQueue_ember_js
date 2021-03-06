import Ember from 'ember';

export function timeColor(params/*, hash*/) {
  var time = params[0];
  var duration = moment(time).fromNow();
  var colors = {green: 'ticket-green', yellow: 'ticket-yellow', red: 'ticket-red'};
  if (duration.search("hour") > 0) {
    return colors.red;
  } else if (moment(duration, 'm').format('m') < 15) {
    return colors.green;
  } else if (moment(duration, 'm').format('m') >= 15) {
    return colors.yellow;
  } else {
    return colors.green;
  }
}

export default Ember.Helper.helper(timeColor);
