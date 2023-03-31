export class UI{
    constructor(){}

    /**
     * 
     * @param {string} text question to render
     */

    showQuestion(text){
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
    }

    /**
     * 
     * @param {string} choices  the choices of the question
     */

    showChoices(choices){
        const choicesContainer = document.getElementById('choices');


        for (let i = 0; i < choices.length; i++){
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button';

            choicesContainer.append(button);
        }
    }
}