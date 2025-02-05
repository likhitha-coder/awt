function fetchuserdata(userid){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const user={id:userid,name:'abc',type:'premium'};
            resolve(user);
        },10000);
    
    })
}
function fetchusersettings(usertype){
    return new Promise((resolve, reject) => {
        console.log("fetching:$(usertype)");
        const settings=usertype=='premimum'
        ?{theme:'dark',notification:true,accesslevel:'high'}
        :{theme:'light',notification:false,accesslevel2:'low'};
        resolve(settings);
    })
}
fetchuserdata(1)
.then(user=>fetchusersettings(user.type))
.then(details=>{console.log(details)})
.catch(error=>{console.log(error)})         
