const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.ask = function (question) {
    return new Promise((resolve, reject) => {
        rl.question(question, function (res) {
            resolve(res);
        });
    });
}

exports.rl = rl;