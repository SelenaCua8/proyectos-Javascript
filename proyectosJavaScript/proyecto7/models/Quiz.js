import {questions} from './questions.js'


export class Quiz {

    questionIdex = 0;
    score = 0;

    /**
     * 
     * @param {questions[]} questions 
     */

    constructor(questions){
        this.questions = questions
    }

    /**
     * 
     * @returns {questions} the question found
     */

    getQuestionIndex(){
        return this.questions[this.questionIdex]
    }

    isEnded(){
        return this.questions.length === this.questionIndex;
    }

    /**
     * 
     * @param {string} answer some text
     */

    guess(answer){

        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }




        this.questionIndex++;
    }
}

