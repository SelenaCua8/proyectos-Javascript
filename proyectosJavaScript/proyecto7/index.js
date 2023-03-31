import { questions } from './data/Questions.js'
import {Quiz} from './models/Quiz.js'
import {UI} from './models/Ui.js'

function main() {
    const quiz = new Quiz(questions);
    const ui = new UI();

    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices([])



     
}

main();
