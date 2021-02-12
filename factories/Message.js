const faker = require("faker/locale/pt_BR");

module.exports = () => ({
    text: faker.lorem.sentence(),
    UserId: faker.random.number({ min: 0, max: 1 }),
    seen: faker.random.boolean()
})