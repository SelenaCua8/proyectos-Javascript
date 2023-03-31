export class Question {
/**
 * 
 * @param {string} text this is the text of the question
 * @param {string []} choices this are the choices of the question
 * @param {string} answer this is the answer of the question
 */

    //propiedades
    constructor (text, choices, answer) { 
        this.text  = text;
        this.choices = choices; 
        this.answer = answer; 
     }

    //metodos: son funciones
/**
 * 
  * @param {string} choices some text to guess
  * @returns {boolean} return true if the answer is correct  */
     correctAnswer(choices){
        return choices === this.answer;

   }


} 




