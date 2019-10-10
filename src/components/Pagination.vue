<template>
  <div class="pagination">
    <button @click="changeBtn">首页</button>
    <button @click="changeBtn">上一页</button>
    <button v-if="appear" class="pagebtn">......</button>
    <button
      v-for="(btn,index) in pageBtns"
      :key="index"
      :class="[{currentPage:btn === currentPage}, 'pagebtn']"
      @click="changeBtn(btn)"
    >{{btn}}</button>
    <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Pagination",
  data() {
    return {
      pageBtns: [1, 2, 3, 4, 5, "······"],
      currentPage: 1,
      appear: false
    };
  },
  methods: {
    changeBtn(page) {
      this.currentPage = page;
      //点击上一页，下一页,首页
      if (typeof page != "number") {
        switch (page.target.innerText) {
          case "上一页":
            $("button.currentPage")
              .prev()
              .click();
            break;
          case "下一页":
            $("button.currentPage")
              .next()
              .click();
            break;
          case "首页":
            this.pagebtns = [1, 2, 3, 4, 5, "......"];
            this.changeBtn(1);
            break;
          default:
            break;
        }
        return;
      }
      if (page === this.pageBtns[4]) {
        //移除第一个元素
        this.pageBtns.shift();
        //在最后添加一个元素
        this.pageBtns.splice(4, 0, this.pageBtns[3] + 1);
      } else if (page === this.pageBtns[0] && page != 1) {
        //现在第一个位置加一个
        this.pageBtns.unshift(this.pageBtns[0] - 1);
        //在最后移除一个元素
        this.pageBtns.splice(5, 1);
      }
      if (page > 4) {
        this.appear = true;
      } else {
        this.appear = false;
      }
      this.$emit("handleList", this.currentPage);
    }
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
}

.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>

