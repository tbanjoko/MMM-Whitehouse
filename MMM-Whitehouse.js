/// MMM-Whitehouse.js - Core Module

Module.register("MMM-Whitehouse", {
  defaults: {},
  start: function () {},
  getDom: function() {
    var e = document.createElement("div")
    e.id = "DISPLAY"
    return e
  },
  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
        var timer = setInterval(()=>{
          this.sendSocketNotification("GIVE_ME_DATA")
        }, 1000)
        break
    }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "HERE_IS_DATA":
        var e = document.getElementById("DISPLAY")
        e.innerHTML = payload
        break
    }
  },
})