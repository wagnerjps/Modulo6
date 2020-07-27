function test1(){
    console.log('opa')
    test2('calling from test 1')
}
function test2(param){
    console.log(param)
}

test1()