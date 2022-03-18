const vm = Vue.createApp({
    data() {
        return {
            perspective: 999,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    methods: {
        clearSliders: function() {
            rotateZ: this.rotateZ = 0;
            perspective: this.perspective = 999;
            rotateX: this.rotateX = 0;
            rotateY: this.rotateY = 0;
        },
        copy: function() {
            console.log(this.box.transform);
        }
    }
}).mount('#app')