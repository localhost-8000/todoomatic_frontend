import { Error } from "../types/Common";
import { User } from "../types/User";

export const validateLoginForm = (data: User) => {
    const errors: Error<User> = {};
    if(data.username.length < 1) {
        errors.username = "Username is required";
    }
    if(!data.password || data.password.length < 1) {
        errors.password = "Password is required";
    }

    return errors;
}