var mySchedule = [
  {"value": 1, name: "Send welcome and shoot info"},
  {"value": 2, name: "Collect session fee and contract"},
  {"value": 3, name: "Shoot session and download"},
  {"value": 4, name: "Process and polish images"},
  {"value": 5, name: "Blog sneak peek email"},
  {"value": 6, name: "Upload gallery and send invitation"},
  {"value": 7, name: "Schedule ordering/album session"},
  {"value": 8, name: "Design album/Place order"},
  {"value": 9, name: "Deliver goods and thank you"}
];

  TimeKnots.draw("#timeline1", mySchedule, {horizontalLayout: false, color: "#669", height: 450, width:200, showLabels: false, dateDimension: false, labelFormat:"%Y"});