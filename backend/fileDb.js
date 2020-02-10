const fs = require('fs');
const nanoid = require('nanoid');

const filename = './db.json';

let data = [];

const readFile = filename => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
};

const writeFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, err => {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
        })
    })
};


module.exports = {
    async init() {
        try {
            const fileContents = await readFile(filename);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            console.log('Could not read file ' + filename);
            data = [];
        }
    },

    async getMessages() {
        return data;
    },

    async addMessage(message) {
        const date = new Date();
        const datetime = date.toISOString();
        message.id = nanoid();
        message.datetime = datetime;
        data.push(message);
        await this.save();
    },

    async save() {
        const fileContents = JSON.stringify(data, null, 2);
        await writeFile(filename, fileContents);
    }
};
