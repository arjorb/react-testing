const getFullName = (firstname, secondname) => {
  return `${firstname} ${secondname}`;
};
const actualFullName = getFullname("John", "Uwimana");
const expectedFullName = "John Uwimana";

if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`);
}
