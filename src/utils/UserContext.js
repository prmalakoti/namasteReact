import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User"
})

export const UserContextDiscount = createContext({
    totalAmtount: 0,
    discount: 2
})

export default UserContext