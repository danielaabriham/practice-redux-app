const shortid = require("shortid")
const txtgen = require("txtgen")
const faker = require("faker")
const _ = require("lodash")

export function generateUser() {
    return {
        name: faker.name.findName(),
        email: faker.internet.email(),
        profile_pic: faker.internet.avatar(),
        status: txtgen.sentence(),
        user_id: shortid.generate()
    }
}

function generateMessage(number) {
    return {
        number,
        text: txtgen.sentence(),
        id_user_msg: faker.random.boolean()
    }
}

const users = generateUsers(10)
export const contacts = _.mapKeys(users, "user_id")
export const getMessages = (messagesPerUser) => {
    let message = {}
    _.forEach(users, user => {
        message[user.user_id] = {
            ..._.mapKeys(generateMessages(messagesPerUser), "number")
        }
    })
    return message
}

function generateUsers(numberOfUsers) {
    return Array.from({length: numberOfUsers}, () => generateUser())
}

function generateMessages(numberOfMessages) {
    return Array.from({length: numberOfMessages}, (v, i) => generateMessage(i))
}

export const state = {
    user: generateUser(),
    messages: generateMessages(10),
    typing: "",
    contacts,
    activeUserId: null
}