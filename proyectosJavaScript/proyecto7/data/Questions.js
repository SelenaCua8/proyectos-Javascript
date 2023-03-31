import {Question} from '../models/question.js'
import {data} from './data.js'

// funcion map cuando tengo un arreglo empieza a recorer cada uno de ellos
export const questions= data.map(question => new Question(question.question, question.choice, question.answer)) 

