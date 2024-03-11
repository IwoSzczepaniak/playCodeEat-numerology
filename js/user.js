class User {
    static count = 0;

    constructor(birthdate, name, premiumUser = false) {
        this.id = User.count;
        User.count += 1;

        this.birthdate = birthdate; // format: "MMDDYYYY"
        this.name = name;
        this.premiumUser = premiumUser;
    }
}

module.exports = { User };
