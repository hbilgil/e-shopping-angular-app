export interface User {//a User interface model to be used in auth service
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}