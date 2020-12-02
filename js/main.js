import { fetchData } from "./components/dataMiner.js";

(() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            removeAformat: true,
            showBioData: false,
            currentMiniData: {},

            Minis: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
                { name: "John", role: "prof", nickname: "super chill" },
                { name: "Joe", role: "prof", nickname: "Teddy Bear" },
            ]
        },

        mounted: function() {
            console.log("Vue is Mounted");
            
            fetchData("./includes/index.php").then(data => console.log(data)).catch(err => console.error(err));
        },

        updated: function(){
            console.log('Vue just updated the DOM')
        },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            },
            removeProf(target) {
                // remove this prof from the professors array
                console.log('clicked to remove prof', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true
                this.currentProfData = target;
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();