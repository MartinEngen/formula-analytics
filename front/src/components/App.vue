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



            driverService.getList(50, 0)
                .then(
                    res => console.log(
                        JSON.stringify(res, null, 2)
                    ));


            driverService.getAmountOfDrivers().then(res => console.log(`Amount of drivers: ${res}`))
        },
        methods: {

        }
    };
</script>

<style>

</style>