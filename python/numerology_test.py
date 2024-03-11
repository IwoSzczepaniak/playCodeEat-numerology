from numerology import find_compatible_users
from user import User

user0 = User("01012000", "Jane Doe", True)
user1 = User("01012000", "John Doe")
user2 = User("01011990", "Jane Smith")
user3 = User("09011991", "Bob Johnson")
user4 = User("01012000", "Jane Smith")
user5 = User("03272003", "Alice Lee")
user6 = User("06251995", "Samuel Kim")
user7 = User("05291995", "Jane Smith")
user8 = User("07051992", "Bob Johnson")
user9 = User("10101999", "Alice Lee")
user10 = User("01282002", "Bill Jones")
user11 = User("12061997", "Paul Watson")

def test_empty_users():
    users = []
    assert find_compatible_users(user0, users) == []

def test_same_user():
    users = [user0]
    assert find_compatible_users(user0, users) == []

def test_some_compatible_users1():
    users = [user6, user5, user4, user3]
    assert find_compatible_users(user0, users) == [5, 4]

def test_some_compatible_users2():
    users = [user11, user10, user9, user8, user7]
    assert find_compatible_users(user0, users) == [11, 7]

def test_all_users_compatible():
    users = [user5, user4, user1]
    assert find_compatible_users(user0, users) == [5, 4, 1]

def test_all_users_incompatible():
    users = [user8, user9, user10]
    assert find_compatible_users(user0, users) == []

def test_correct_sorting():
    users = [user3, user4, user5, user6]
    assert find_compatible_users(user0, users) == [5, 4]

def test_premium_user():
    users = [user11, user10, user9, user8, user7, user6, user5, user4, user3, user2, user1]
    assert find_compatible_users(user0, users) == [11, 7, 5, 4, 1]

def test_not_premium_user():
    users = [user11, user10, user9, user8, user7, user6, user5, user4, user3, user2, user0]
    assert find_compatible_users(user1, users) == [11, 7, 5]

def test_not_premium_user_less_than_3_matches ():
    users = [user6, user5, user4, user3, user2]
    assert find_compatible_users(user1, users) == [5, 4]