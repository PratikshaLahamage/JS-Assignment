class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(user){
        user.luCoins++;
        console.log(`${user.name} has ${user.luCoins} coins`);
    }

    delCoins(user){
        user.luCoins--;
        console.log(`${user.name} has ${user.luCoins} coins`);
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }

}

class Admin extends Moderator{
   
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }

    delCourse(user,course){
        user=courses.pop(course);
        console.log(user);
    }
 }


 let user1 = new User('XYZ',25,'xyz@gmail.com')
 let user2 = new User('PQR',24,'pqr@gmai.com')
 let mod = new Moderator('ABC',24,'abc@gmail.com','Moderator');
 let admin = new Admin('admin',25,'a@gmail.com');
 let users = [user1,user2,mod,admin];
 
 users.forEach(element => {
    console.log(element);
});

 admin.addCourse(user1,'Javascript');
 admin.addCourse(user2,'Python');

 mod.addCoins(user1);
 mod.addCoins(user1);
 users.forEach(element => {
    console.log(element);
});
