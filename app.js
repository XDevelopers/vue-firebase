new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        name: 'Ryu',
        url: 'https://www.youtube.com',
        classes: ['one', 'two'],
        wage: 10,
        coords: {
            x: 0,
            y: 0
        }
    },
    methods: {
        greet(time) {
            return `Hello and good ${time}, ${this.name}`;
        },
        changeWage(amount) {
            this.wage += amount
        },
        logEvent(e) {
            console.log(e);
        },
        logCoords(e) {
            this.coords.x = e.offsetX;
            this.coords.y = e.offsetY;

        }
    }
})