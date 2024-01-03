<!-- 1.可以輸入文字的輸入框
2.可以標記的checkbox
3.可以刪除的button
4.可以儲存的button -->

<script>
export default {
    data() {
        return {
            newTodo: '', //存放輸入框的值，用來新增待辦事項，輸入框記得要用v-model綁定它
            todos: [], //存放待辦事項的陣列
        };

    },
    methods: {
        // 直接按enter
        addTodo() {
            // 新增待辦事項到清單
            // 檢查是否非空白字串
            if (this.newTodo.trim() !== '') {
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });
                // 清空newTodo
                this.newTodo = '';
            }
            console.log('儲存todos', this.todos);
        },
        removeTodo(index) {
            //刪除指定索引的代辦事項
            this.todos.splice(index, 1);
        },
        // 點擊儲存
        saveTodos() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });
                this.newTodo = '';
            }

            //這裡可以將todos儲存到資料庫或其他地方
            console.log('儲存todos', this.todos);
        },
    },
};
</script>

<template >
    <div class="box-container">
    <div class="box">
        <h2 class="h2">To-do List</h2>
        <!-- 輸入框 -->
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="新增待辦事項" class="input">


        <!-- 待辦事項清單 -->
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <!--   標記的checkbox -->
                <input type="checkbox" v-model="todo.completed" />

                <!-- 顯示待辦事項文字 -->
                <span :class="{ 'completed': todo.completed,'span-larger-text': !todo.completed }">{{ todo.text }}</span>

                <!-- 刪除按鈕 -->
                <button @click="removeTodo(index)" class="delete-btn">刪除
                    <font-awesome-icon :icon="['fas', 'trash-can']" />
                </button>
                
            </li>
        </ul>

        <!-- 儲存按鈕 -->
        <button @click="saveTodos" class="save-btn">儲存</button>
    </div>
</div>
</template>


<style scoped>
.completed {
    margin-left: 5px;
    text-decoration: line-through;
    /* 如果事項被標記完成，添加刪除線 */
}

.span-larger-text{
    font-size: 24px;
    margin-left: 5px;
}
.h2{
    font-size: 50px;
    margin-top: 15px;
}
  
.box-container {
    @apply flex justify-center h-screen;
  }
  
  .box {
    @apply w-[700px] min-h-[150px] border border-gray-600 bg-main-deep;
    overflow-y: auto; /* 如果內容超過最小高度，則添加滾動條 */
  }

.input {
    @apply border border-yellow-300 border-[6px] w-[350px] h-[70px];
    margin: 20px;
}


.save-btn{
  @apply  w-[80px] min-h-[55px]  bg-yellow-200;
  margin-top: 20px;
}

.delete-btn{
  @apply  w-[37px] min-h-[30px]  bg-red-300 text-white;
    margin-left: 30px;
    margin-top: 20px;
}
</style>
