function friend(friends) {
  return friends.filter(friend => friend.length === 4);
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));