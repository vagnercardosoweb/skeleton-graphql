let memoryId = 0;
const uniqId = () => (memoryId += 1);

const users = [...Array(2).keys()].map(i => {
  const idPad = String(i + 1).padStart(3, '0');

  return {
    id: uniqId(),
    name: `Name ${idPad}`,
    email: `${idPad}@mail.com`,
  };
});

export function getUsers(_, args, context) {
  // eslint-disable-next-line no-console
  console.log('Context: ', context);

  return users;
}

export function getUserById(_, { id }) {
  const user = users.find(u => u.id === id);

  return user;
}

export function createUser(_, { name, email }) {
  const existsMail = users.find(u => u.email === email);

  if (existsMail) {
    throw new Error('E-mail digitado já existe registrado.');
  }

  const newUser = { id: uniqId(), name, email };
  users.push(newUser);

  return newUser;
}
