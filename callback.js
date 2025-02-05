function fetchuserdetails(userid,callback){
const user={id:1,name:'abc',type:admin}
callback(user.type)
}
function fetchprevilages(user,callback){
    const previlages={'read':true,'write':true,'print':true};
    callback(previlages);
}
function display(previlages)
{
    console.log(previlages);
}
const userid=1;
fetchuserdetails(userid,(user)=fetchprevilages (user,display))

