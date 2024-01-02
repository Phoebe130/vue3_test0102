<script>

// import { toHandlers } from 'vue';
export default {
    // 放置所有變數的位置
    data() {
        return {
            numA: 0,
            numB: 0,
            result: 0,
            html:`
            <div>
                我是html
            </div>
            `
        }
    },
    // 放置所有function的位置
    methods: {
        add() {
            // 先判斷numA numB不為空
            if (this.numA.toString().trim === '' || this.numB.toString().trim === '' ) return;
            this.result = this.numA + this.numB;
        },
    },
}
</script>

<template>
    <!-- v-if  -->
    <!-- v-else-if  -->
    <!-- v-else -->

    <!-- v-show -->
    
    <!-- v-for 記得要補key  -->
    <!-- v-bind 省略的寫法「：」 -->
    <!-- v-model 資料input與變數產生連結 -->
    <!-- v-on  省略的寫法「＠」後面連接觸發的事件名稱 -->
    <!-- v-html 最常用於所見即所得編輯器 -->
    <div class="calc">
        計算機
        <div v-html="html"></div>
    </div>
    <div>
        <label>
            數字A:
            <input type="number" v-model="numA">
        </label>
        <label>
            數字B:
            <input type="number" v-model="numB">
        </label>
    </div>

    <div class="btns">
        <button class="btn" type="button" @click="add()">+</button>
        <button class="btn">-</button>
        <button class="btn">x</button>
        <button class="btn">/</button>
    </div>

    <div class="output">
        輸出結果：{{ result }}
    </div>
</template>

<!-- 目的是不要影響到其他區塊 -->
<style lang="scss" scoped>
.calc {
    //font-size: 42px;
}

.btns {
    display: flex;
    margin: 20px;
    justify-content: center;
    gap: 30px;

    .btn {
        padding: 5px 15px;
    }

}
</style>