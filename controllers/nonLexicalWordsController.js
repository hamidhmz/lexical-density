const NonLexicalWordsModel = require('../models/nonLexical');

const getAllNonLexicalWords = (req, res) => {
    const query = NonLexicalWordsModel.find({ title: 'nonLexicalWords' });
    query.exec((err, nonLexicalWords) => {
        if (err) {
            res.status(500).json({ message: `Error: ${err}` });
            return;
        }
        res.status(200).json({ nonLexicalWords });
    })
}

const UpdateNonLexicalWords = (req, res) => {
    const { words } = req.body;

    NonLexicalWordsModel.update({ title: 'nonLexicalWords' }, { $push: { words: words } }, (err, data) => {
        let status;
        let response;
        if (!err) {
            if (data === null) {
                status = 500;
                response = { message: 'Non lexical words do not exist. Please create using POST endpoint' };
            }
            status = 200;
            response = { response: data };
        } else {
            status = 500;
            response = { message: `Error: ${err}` };
        }
        res.status(status).json(response)
    })
}

module.exports = {
    getAllNonLexicalWords,
    UpdateNonLexicalWords
}