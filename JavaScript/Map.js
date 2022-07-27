function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set ('Leo', 'Admin');
usuarios.set ('Gaby', 'Admin');
usuarios.set ('Bruce', 'User');
usuarios.set ('Maria', 'Admin');

console.log (getAdmins(usuarios));