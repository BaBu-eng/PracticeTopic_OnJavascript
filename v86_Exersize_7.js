// this is the password generator 
class password{
    constructor(){
        this._alphabet = "abcdefghijklmnopqstuvwxyz";
        this._Bigalphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this._Number = "1234567890";
        this._Symbol = "!@#$%&*";
        this._ax = this._alphabet[Math.floor(Math.random()*this._alphabet.length)]
        this._bx = this._Bigalphabet[Math.floor(Math.random()*this._Bigalphabet.length)]
        this._nx = this._Number[Math.floor(Math.random()*this._Number.length)]
        this._sx = this._Symbol[Math.floor(Math.random()*this._Symbol.length)]
    }
    GenerateStrongPassword(){
            console.log("Your Strong Password is:- ", this._ax,this._sx,this._bx,this._nx,this._ax,this._nx,this._ax,this._bx);
        }
    GenerateWeakPassword(){
        console.log("This is Weak Password:- ",this._ax,this._ax,this._sx,this._ax,this._ax,this._bx,this._nx,this._ax);
    }
    GenerateSuperStrongPassword(){
        console.log("This is the Super Strong Password:- ",this._nx,this._sx,this._ax,this._bx,this._bx,this._nx,this._sx,this._bx)
    }
    GenerateFunnyPassword(){
            let funny = ["Chapee_choti", "vivek_piyakad" ,"Tejas_Devdas" ,"Yashti_paisevala" ,"Spata_nashedi"];
            let fx = funny[Math.floor(Math.random()*funny.length)] 
            console.log("Your Funny Password is:- ", fx)
    }
}

let user1  = new password();
let user2 = (prompt("Enter Your Choise:- for Strong Pass press:1, for weak Pass:2, for funny pass:3, for Super Strong Pass:4:- "));
if(user2==1){
    user1.GenerateStrongPassword();
}
else if(user2==2){
    user1.GenerateWeakPassword();
}
else if(user2==3){
    user1.GenerateFunnyPassword();
}
else if(user2==4){
    user1.GenerateSuperStrongPassword();
}
else{
    console.log("Default password is: ");
    user1.GenerateWeakPassword();
}

