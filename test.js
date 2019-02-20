let box = {
    method:function(){
        console.log('1',this)
        setTimeout(function(){
            console.log('2',this)
        })
    },
    a:1
}
box.method()