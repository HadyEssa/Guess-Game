let Myadmins=["Ahmed","Osama","sayed","Stop","Samera"];
let MYEmployeees=["Sameh","Amgad","Ameer","Omar","Othman","Amany","Samira"];
let admin=[];
for(let i=0;i<Myadmins.length;i++){
if(Myadmins[i]==="Stop"){
    break;
}
admin.push(Myadmins[i]);
}
console.log(admin);
document.write(`<h1><div>We Have X Admins</div><br><div>We Have ${admin.length} Admins</div></h1>`);
document.write(`<hr>`);
for(let x=0;x<admin.length;x++){
let con=1;
document.write(`<h3>the Admin For Team ${x+1} is "${admin[x].toUpperCase()}" </h3>`);
document.write(`<h4>Team Members: </h4>`);
for(m=0;m<MYEmployeees.length;m++){
    if(admin[x][0].toLocaleLowerCase()===MYEmployeees[m][0].toLocaleLowerCase()){
document.write(`<hr>`)
    document.write(`<div>`);
    document.write(`${con}-${MYEmployeees[m].toLocaleLowerCase()}<br>`);
    document.write(`</div>`);
    document.write(`<hr>`);
    con++;
}
}
}