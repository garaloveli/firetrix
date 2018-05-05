import { Roles } from "app/roles";

export interface IUser {
uid: string;
email?: string | null;
photoURL?: string;
displayName?: string;
}

export class User implements IUser {
  public uid: string;
  public email?: string | null | undefined;
  public photoURL?: string;
  public displayName?: string;
  public roles: Roles;

  constructor(uid:string, email:string, displayName:string, photoUrl:string){
    this.uid = uid;
    this.email = email;
    this.photoURL = photoUrl;
    this.displayName = displayName;
    this.roles = { reader: true };
  }
}
