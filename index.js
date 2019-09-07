var app = new Vue({
  el: "#app",
  data: {
    username: "",
    message: "",
    list: []
  },
  methods: {
    // 数组list储存了所有的留言内容，通过函数handleSend给list添加一项留言数据，添加成功后，把textarea文本框清空。
    handleSend: function() {
      // 提交留言前，做非空判断
      if (this.username === "") {
        window.alert("请输入昵称");
        return;
      }
      if (this.message === "") {
        window.alert("请输入留言内容");
        return;
      }
      this.list.push({
        name: this.username,
        message: this.message
      });
      this.message = "";
    },
    handleReply: function(index) {
      var name = this.list[index].name;
      this.message = "回复@" + name + ":";
      this.$refs.message.focus();
    }
  }
});
