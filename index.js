const username=process.argv[2];
const userage=parseInt(process.argv[3]);
const usercountry=process.argv[4];
function greetingmsg(name,age,country){
    let msg=`hi! my name is ${name}, i am ${age} years old and i am from ${country}`;
    console.log(msg);
}
greetingmsg(username,userage,usercountry);