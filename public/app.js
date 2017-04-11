console.log("I MADE IT!!");

var app = new Vue({
  el: '#component',
  data: {
    message: "Hello from vue!",
    showMessage: true,
    todos: [ {text: "learn VUE"},
             {text: "thing"},
             {text: "other thing"},
           ]
  },
  methods: {
    toggleMsg: function() {
        this.showMessage = !this.showMessage;
    }
  }
});
