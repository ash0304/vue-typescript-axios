<template>
    <div class="counter">
        <div>
            <h2 @click="testJquery" id="title-2">This is Counter Component!!</h2>
            <input type="text" v-model="txt">
            <p>{{ getTxt }}</p>
            <button @click="add">add</button>
            <p>{{ sum }}</p>
            <div id="jtest">123</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import $ from 'jquery';
@Component
export default class Counter extends Vue {
    private txt: string = '1';
    private sum: number = 0;
    // jquery
    private testJquery() {
        $('#jtest').css('color', 'red');
    }
    // computed
    get getTxt() {
        return this.txt;
    }
    // methods
    private add() {
        this.sum++;
        console.log(`sum: ${this.sum}`);
    }
    // life circle
    private beforeCreate() {
        console.log('beforeCreate');
    }
    private created() {
        console.log('created');
    }
    private beforeMount() {
        console.log('beforeMount');
    }
    private mounted() {
        console.log('mounted');
    }
    private beforeUpdate() {
        console.log('beforeUpdate');
    }
    private updated() {
        console.log('updated');
    }
    private beforeDestroy() {
        console.log('beforeDestroy');
    }
    private destroyed() {
        console.log('destroyed');
    }
    // watch
    @Watch('txt')
    private changeTxt(newTxt: string, oldTxt: string) {
        console.log(`change txt: ${oldTxt} to ${newTxt}`);
    }
}
</script>

<style lang="scss" scoped>
#title-2 {
    color:blue;
}
</style>




