export interface IUser{
    id: number;
    username : string;
    password? : string;
    email? : string;
    isLoggedIn : boolean;
    isErrorAuth : boolean;
    textError? : string;
}