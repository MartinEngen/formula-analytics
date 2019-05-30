<template>
    <div id="app">
        <div>Header</div>
        <div>Body</div>
        <div>Footer</div>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
</template>

<script>
    import * as d3 from "d3";
    import DriverService from "../services/driver"


    const driverService = new DriverService();

    export default {
        name: "app",
        components: {},
        data: function() {
            return  {
                count: 0
            }
        },
        mounted() {
            driverService.get("mclaren")
                .then(res => console.log(res))
                .catch(err => console.log(err))
        },
        methods: {

        }
    };
</script>

<style>

</style>