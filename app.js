const vm = Vue.createApp({
    data() {
        return {
            perspective: 999,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    computed: {
        square() {
            return {
                transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
            }
        }
    },
    methods: {
        clearSliders: function() {
            rotateZ: this.rotateZ = 0;
            perspective: this.perspective = 999;
            rotateX: this.rotateX = 0;
            rotateY: this.rotateY = 0;
            if(this.backgroundColor = '#8d80f3') {
                this.backgroundColor = '#EE77D9'
            }
        },
        copy: function() {
            const transform = `transform: ${this.square.transform}`
            console.log(transform);
            navigator.clipboard.writeText(transform);
        }
    }
}).mount('#app')