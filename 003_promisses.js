function tempo(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

tempo(2000).then(() => console.log('opa'))