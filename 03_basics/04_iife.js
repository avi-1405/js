//Immediately Invoked Function Expressions(IIFE)
/*
->this function execute immediately after declaration
->to avoid the problem that may occur from global scope
*/

                // 1st type of iife

function chai(){
    console.log(`DB Conneted`);
}
chai();f



                // 2nd type of iife

(function abc(){
    console.log(`DB Conneted One`);
})();
// immediately function once invoked then don't know at which context it have to stop,hence we add semicolon to stop the iife.
// Then only other iife function get executed.

                // 3rd type of iife
(function aurcode(){
    // named IIFE
    console.log(`DB Conneted Two`);
})();


                // 4th type of iife
// Arrow function as a iife
((name) => {
    //simple IIFE or unnamed IIFE
    console.log(`DB Conneted Three ${name}`);
})("Avinash");