<template>
    <div>
        <h1>
            Hello {{name}}!
        </h1>

        <div class="colors">
            <ul v-if="colors.length">
                <li v-for="color in colors" class="color" v-bind:style="'background-color: ' + color">
                    {{color}}
                </li>
            </ul>
            <div v-else>
                No colors!
            </div>
        </div>
        <button type="button" v-on:click="clickCount += 1">
            You clicked the button {{clickCount}} time(s)
        </button>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            clickCount: 0,
            name: 'Frank',
            colors: ['red', 'green', 'blue']
        }
    },
    methods: {
        handleButtonClick: function() {
            this.clickCount++;
        }
    }
}
</script>