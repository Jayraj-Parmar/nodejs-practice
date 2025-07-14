const sessionIdToUser = new Map();

function setUser(id, loggedInUser) {
  sessionIdToUser.set(id, loggedInUser);
}

function getUser(id) {
  return sessionIdToUser.get(id);
}

export { setUser, getUser };
