from numerology import User

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
    assert list(user0.find_compatible_users(users)) == []

def test_same_user():
    users = [user0]
    assert list(user0.find_compatible_users(users)) == []

def test_some_compatible_users():
    users = [user3, user4, user5, user6]
    assert list(user0.find_compatible_users(users)) == [5, 4]

def test_all_users_compatible():
    users = [user1, user4, user5]
    assert list(user0.find_compatible_users(users)) == [5, 4, 1]

def test_all_users_incompatible():
    users = [user8, user9, user10]
    assert list(user0.find_compatible_users(users)) == []

def test_premium_user():
    users = [user0, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11]
    assert list(user0.find_compatible_users(users)) == [11, 7, 5, 4, 1]

def test_not_premium_user():
    users = [user0, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11]
    assert list(user1.find_compatible_users(users)) == [11, 7, 5]

def test_not_premium_user_less_than_3_matches ():
    users = [user1, user2, user3, user4, user5, user6]
    assert list(user1.find_compatible_users(users)) == [5, 4]