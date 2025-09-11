// type guards: typeOf, in operator and instanceof

// typeof Type Guards
function display(val:string|number){
    if(typeof val === 'string'){
        console.log(`Its a string :`, val.toUpperCase())
    }else{
        console.log('Its a number :', val.toFixed(2))
    }
}

display('Full stack-developer')
display(23.46757867554)

