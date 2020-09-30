function fn3(){
    console.log('fn3')

}

function fn2(){
    fn3()

}

function fn1(){
    fn2()
   
}

function main(){
    fn1()
}

main()