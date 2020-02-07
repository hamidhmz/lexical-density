const router = require('express').Router()

const nonLexicalWordsController = require('../controllers/nonLexicalWordsController')
const lexicalWordsController = require('../controllers/lexicalWordsController')

router.post('/complexity', lexicalWordsController.computeLexicalDensity)

router.get('/non-lexical-words', nonLexicalWordsController.getAllNonLexicalWords)

router.put('/non-lexical-words', nonLexicalWordsController.UpdateNonLexicalWords)

module.exports = router