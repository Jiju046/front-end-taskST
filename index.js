// onclick functions
let total=0;


        
// this is the refactored code of the below code

function handleClick(event,head,amount,target,add){
    event.preventDefault()
    console.log("working");
    let price=$(`#${amount}`).html()
    let title=$(`.${head}`).html()
    $(`#${target}`).empty().append(`<td>${title}</td> <td>${price}</td>`)
    total=total + add; 
    console.log(total)
    $("#total").html(total)
    
}




//old code which has function for each item

// function andhraClick(event){
//     let q2=0
//     event.preventDefault()
//     let title=$(".item-2").html()
//     let price=$("#price-2").html()
//     $("#item2").empty().append(`<td>${title}</td> <td>${price}</td>`)
//     total=total+140;
//     console.log(total);
//     $("#total").html(total)
    
    
// }

// function fryClick(event){
//     let q3=0
//     q3=q3+1;
//     event.preventDefault()
//     let title=$(".item-3").html()
//     let price=$("#price-3").html()
//     $("#item3").empty().append(`<td>${title}</td> <td>${price}</td>`)   
//     total=total+ 160; 
//     console.log(total)
//     $("#total").html(total)
    
// }

// function masalaClick(event){
//     let q4=0
//     event.preventDefault()
//     let title=$(".item-4").html()
//     let price=$("#price-4").html()
//     $("#item4").empty().append(`<td>${title}</td> <td>${price}</td>`)
//     total=total+ 180; 
//     console.log(total)
//     $("#total").html(total)
// }

// function bihariClick(event){
//     let q5=0
//     event.preventDefault()
//     let title=$(".item-5").html()
//     let price=$("#price-5").html()
//     $("#item5").empty().append(`<td>${title}</td> <td>${price}</td>`)
//     total=total+ 110; 
//     console.log(total)
//     $("#total").html(total)
// }   

// function seerClick(event){
//     let q6=0
//     event.preventDefault()
//     let title=$(".item-6").html()
//     let price=$("#price-6").html()
//     $("#item6").empty().append(`<td>${title}</td> <td>${price}</td>`)
//     total=total+ 190; 
//     console.log(total)
//     $("#total").empty().html(total)
// }   





