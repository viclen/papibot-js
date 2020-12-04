const faker = require("faker/locale/pt_BR");

module.exports = () => ({
    name: faker.name.firstName() + " " + faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    key: faker.random.uuid(),
})