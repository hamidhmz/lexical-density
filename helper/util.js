const NonLexicalWordsModel = require('../models/nonLexical');

const sumCalculate = (total, num) => {
    return total + num;
}

const complexityCalculate = async sentence => {
    const query = await NonLexicalWordsModel.find({}).exec();
    const nonLexicalWords = query[0].words;
    const sentenceArray = sentence.split(' ');
    const lexicalWordsFound = sentenceArray.filter(word => {
        return nonLexicalWords.indexOf(word.toLocaleLowerCase()) === -1;
    })
    const complexity = Math.round(lexicalWordsFound.length / sentenceArray.length * 100);
    return complexity/100;
}

module.exports = {
    sumCalculate,
    complexityCalculate
}