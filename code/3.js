myQ = {
    xyz: () => {},
    text: () => {
        myQ.xyz();
    },
    hrml: () => {
        myQ.xyz();
    },
}


let myQ2 = (() => {

    const _xyz = () => {};
    const _text =  () => {
        _xyz();
    },
    const _html=  () => {
        _xyz();
    },


    return {
        text: _text,
        html: _html,
    }
})()


//IIFE 
(() => {})()