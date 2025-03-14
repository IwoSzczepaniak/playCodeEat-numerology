# Numerology Compatibility Finder

Create a system that helps users find compatible friends or potential romantic partners based on their numerological compatibility using life-path digits. Life-path digits are calculated from users' birth dates and can reveal compatibility between people. Calculation is done by summing the digits present in the date until the result is a digit.

## Life-Path Digit Example Calculations

Life-path digit calculation for April 1st, 2000:
```
date: 04/01/2000
input: 04012000
0 + 4 + 0 + 1 + 2 + 0 + 0 + 0 = 7
result: 7
```

Life-path digit calculation for April 8th, 2025:
```
date: 04/08/2025
input 04082025
0 + 4 + 0 + 8 + 2 + 0 + 2 + 5 = 21
2 + 1 = 3
result: 3
```

## Implementation Requirements
Implement `find_compatible_users(user, users)`

### Basic Version (8/10)
- It should return the list of ids of all users compatible with the given user

### Enhanced Version (2/10)
- Sort list from the most recently created to the older users. Keep in mind that newer users have created ids that are greater than the older ones.(1/10)
- Users who have purchased the premium subscription should be able to see all their matches, while users with free subscription can only see up to 3 matches.(1/10)


## User Structure
```
User {
    id: Number          // Unique id            |   1
    birthDate: String   // Format: "DDMMYYYY"   |   01022000
    name: String        // User's full name     |   John Doe

    // used only in enhanced version
    premium_user: Bool                          |   True
}
```
## Example Usage

```python
# Setup
user0 = User("01012000", "Jane Doe")    # id = 0
user1 = User("01022000", "John Doe")    # id = 1
user2 = User("01012000", "Jane Smith")  # id = 2
user3 = User("03272003", "Alice Lee")   # id = 3

users = [user1, user2, user3]

# Result
find_compatible_users(user0, users) == [3, 2]
```

## Test cases:

- empty users
- same user
- some compatible users1
- some compatible users2
- all users compatible
- all users incompatible
- correct sorting
- premium user

<br/>
Enhanced version:

- not premium user
- less than 3 matches

## Available Task Commands
This project uses [Task](https://taskfile.dev) for managing development commands.

```bash
task test-python     # Run Python tests
task test-js         # Run JavaScript tests
```