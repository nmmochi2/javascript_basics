let permission = {
    read: 00000100,
    write: 00000010,
    execute: 00000001
};

let myPermission = 0;
myPermission = permission.read | permission.cexecute;

let readAccess = myPermission & permission.read ? 'yes' : 'no'; 
let writeAccess = myPermission & permission.write ? 'yes' : 'no';

console.log(readAccess);
console.log(writeAccess);