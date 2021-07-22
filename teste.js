const VENDOR_LIBS = Object.keys(require('./package.json').dependencies).filter((val,index,arr)=> {return val!=='express'});
console.log(VENDOR_LIBS);