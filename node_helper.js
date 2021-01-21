const spawn = require("child_process").spawn
var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "GIVE_ME_DATA":
        console.log("received notification")
        this.job()
        break
    }
  },
  job: function() {
    var process = spawn("python3", ["/home/pi/Desktop/realTester.py"])
    process.stdout.on("data", (data)=>{
      console.log(data.toString()) // debugging, log string     
      this.sendSocketNotification("HERE_IS_DATA", data.toString())   // pass the string, module expects string
    })
  }
}) 
