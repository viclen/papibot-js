const faker = require("faker/locale/pt_BR");

module.exports = () => ({
    text: faker.lorem.sentence(),
    userId: faker.random.number({ min: 0, max: 6 }),
    seen: faker.random.boolean()
})