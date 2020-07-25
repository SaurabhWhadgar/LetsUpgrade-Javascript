class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.course = []
    }

    login(){
        console.log(`${this.name} logged in`)
    }
    logout(){
        console.log(`${this.name} logged out`)
    }

}

let user = new User('Saurabh',20,'s@gmail.com')

user.login()
user.logout()

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email)
        this.role = role
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
}

class Admin extends Moderator{
    addCourse(user,course){
        user.course.push(course);
    }
    removecourse(user,course){
       //console.log(user.course);
       //console.log(course);
       //return user.course.pop(); 
      user.course = user.course.filter(c=> c !== course);
      console.log(user.course)
    }
}

let user1 = new User('x',25,'x@gmail.com')
let user2 = new User('y',24,'y@gmai.com')
let mod = new Moderator('z',24,'z@gmail.com','Moderator');
let admin = new Admin('A',25,'a@gmail.com','Admin');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

mod.addCoins()
mod.addCoins()

admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');

admin.removecourse(user1,'Python')