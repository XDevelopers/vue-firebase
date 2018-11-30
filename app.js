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
        },
        items: [
            'Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star'
        ],
        ninjas: [
            { name: 'Crystal', age: 25, belt: 'Black' },
            { name: 'Ted', age: 50, belt: 'Red' },
            { name: 'Doug', age: 32, belt: 'Green' },
            { name: 'Roger', age: 40, belt: 'Blue' },
            { name: 'Ted', age: 30, belt: 'Orange' }
        ]
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