Vue.component("list", {
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  render: function(h) {
    var _this = this;
    var list = [];
    // this.list.forEach相当于template里的v-for指令，遍历出每条留言。句柄handleRely直接向父组件派发一个事件reply，
    // 父组件（app)接受后，将当前list-item的昵称提取，并设置到v-textarea内。
    this.list.forEach(function(msg, index) {
      var node = h(
        "div",
        {
          attrs: {
            class: "list-item"
          }
        },
        [
          h("span", msg.name + ": "),
          h(
            "div",
            {
              attrs: {
                class: "list-msg"
              }
            },
            [
              h("p", msg.message),
              h(
                "a",
                {
                  attrs: {
                    class: "list-reply"
                  },
                  on: {
                    click: function() {
                      _this.handleReply(index);
                    }
                  }
                },
                "回复"
              )
            ]
          )
        ]
      );
      list.push(node);
    });
    // 列表数据list为空时，渲染一个“列表为空”的信息提示节点；不为空时，每个list-item应包含昵称，留言内容和回复按钮3个子节点。
    if (this.list.length) {
      return h(
        "div",
        {
          attrs: {
            class: "list"
          }
        },
        list
      );
    } else {
      return h(
        "div",
        {
          attrs: {
            class: "list-nothing"
          }
        },
        "留言列表为空"
      );
    }
  },
  methods: {
    handleReply: function(index) {
      this.$emit("reply", index);
    }
  }
});
