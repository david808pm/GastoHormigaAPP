// services/users.js
// Mock data for users
const mockUsers = [
  {
    nombres: 'Juan Pérez',
    tipoDocumento: 'CC',
    documento: '123456789',
    edad: 30
  },
  {
    nombres: 'María García',
    tipoDocumento: 'CC',
    documento: '987654321',
    edad: 25
  }
];

// Function to get users from localStorage or mock
export const getUsers = () => {
  const stored = localStorage.getItem('users');
  return stored ? JSON.parse(stored) : mockUsers;
};

// Function to save users to localStorage
export const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

// Function to add a new user
export const addUser = (user) => {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
};

// Function to find user by documento
export const findUserByDocumento = (documento) => {
  const users = getUsers();
  return users.find(user => user.documento === documento);
};