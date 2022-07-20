import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-37d61-default-rtdb.europe-west1.firebasedatabase.app/'
})