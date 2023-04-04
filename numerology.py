from helpers import COMPATIBILITY_TABLE

class User:
    count = 0

    def __init__(self, birthdate, name, premium_user=False):
        self.id = User.count 
        User.count += 1

        self.birthdate = birthdate # format: "MMDDYYYY"
        self.name = name
        self.premium_user = premium_user
        
    def find_compatible_users(self, users):
        # TODO: implement this method