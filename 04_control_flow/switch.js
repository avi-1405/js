// BASIC SYNTAX OF SWITCH STATEMENT

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3
//key value can be any datatype and according to key datatype the case datatype must be same

switch (month) {
    case 1:
        console.log("January");
        break;
    
    case 2:
        console.log("February");
        break;
        
    case 3:
        console.log("March");
        // break;
    
    case 4:
        console.log("April");
        //break;
    
    case 5:
        console.log("May");
        break;
    
    case 6:
        console.log("June");
        break;
    
    case 7:
        console.log("July");
        break;    
    
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("give valid month number");
        break;
}

// if we don't use break then the whole case gets execute after the case matches till another break not found.


