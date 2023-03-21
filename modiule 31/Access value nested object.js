// Access value of nested object
const user = {
    name:"jibon",
    Roll: 555834,
    adderss: {
        streat: {
            first: "640 Cantonment Dhaka",
            secound: "4th floor",
        }

    }
}
const floor = user.adderss.streat.secound;
console.log(floor);