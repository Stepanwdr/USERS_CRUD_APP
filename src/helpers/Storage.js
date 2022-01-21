export default class Storage {
    static getUsers() {
         const users=localStorage.getItem("users");
         if(users){
             return users
         }
         return null
    }
    static setUsers(users) {
        if (!users) {
            return;
        }
        localStorage.setItem("users", JSON.stringify(users));
    }

    static delete() {
        localStorage.removeItem("users");
    }


}