const { sumCalculate } = require('../helper/util');
const { complexityCalculate } = require('../helper/util');

const computeLexicalDensity = async (req, res) => {
    let status;
    let response;

    const { words } = req.body;
    if (words.length < 100) {
        status = 401;
        response = { message: 'Input must be more than 1000 characters' };
    } else {
        if (req.query.mode == 'verbose') {
            const sentences = words.split(',');
            const sentencesArray = [].concat(await Promise.all(sentences.map(sentence => complexityCalculate(sentence))));
            const total = sentencesArray.reduce(sumCalculate);
            status = 200;
            response = { data: { overall_ld: total, sentence_ld: sentencesArray } };
        } else {
            const complexity = await complexityCalculate(words);
            status = 200;
            response = { data: { overall_ld: complexity } };
        }
    }

    res.status(status).json(response);
}

module.exports = {
    computeLexicalDensity
}