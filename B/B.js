import { itemAnswer } from "./item.js";
async function onLoad() {
  async function getComments() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    );
    const test = await res.json();
    return test;
  }
  let data_api = await getComments();
  let data_api2 = data_api.results;
  let app = new QuizApp(data_api2);
  document.querySelector("body").appendChild(app.container);
}
onLoad();
class QuizApp {
  container = document.createElement("div");
  question_app = document.createElement("div");
  answer_app = document.createElement("div");
  point_app= document.createElement("div");
  item_Answer;
  arr_show = [];
  myArr = [];
  point = 0;
  constructor(data_api) {
    this.myArr = data_api;
    this.container.appendChild(this.point_app);
    this.point_app.innerHTML = "0";
    this.point_app.classList.add("point");
    this.container.classList.add("container");
    this.container.appendChild(this.question_app);
    this.container.appendChild(this.answer_app);
    this.answer_app.classList.add("answer");
    this.handleShowScreen();
  }

  handleShowScreen = () => {
    let num = Math.floor(Math.random() * this.myArr.length);
    if (this.arr_show.includes(num) == false) {
      this.answer_app.innerHTML = "";
      this.question_app.innerHTML = "";
      this.arr_show.push(num);
      this.question_app.innerHTML = this.myArr[num].question;
      let num_correct = Math.floor(Math.random() * 4);
      let arr_Incorrect = [];
      let a = 0;

      for (let i = 0; i < 4; i++) {
        if (i == num_correct) {
          this.item_Answer = new itemAnswer(this.myArr[num].correct_answer);
          this.answer_app.appendChild(this.item_Answer.container);
          this.item_Answer.handleClick(() => {
            this.handleTrue();
          });
        } else {
          while (true) {
            let num_Incorrect = Math.floor(Math.random() * 3);
            if (arr_Incorrect.includes(num_Incorrect) == false) {
                arr_Incorrect.push(num_Incorrect);
              this.item_Answer = new itemAnswer(
                this.myArr[num].incorrect_answers[num_Incorrect]
              );
              this.item_Answer.handleClick(() => {
                this.handleFalse();
              });
              this.answer_app.appendChild(this.item_Answer.container);
              a = a + 1;
            }
            if (a === 3) break;
          }
        }
      }
    } else {
      this.handleShowScreen();
    }
  };

  handleTrue = () => {
    alert("true");
    this.point = this.point + 10;
    this.point_app.innerHTML = this.point;
    this.handleShowScreen();
  };

  handleFalse = () => {
    alert("false");
    this.handleShowScreen();
  };
}
