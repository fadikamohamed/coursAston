class Tasks{
    constructor(inputTask, inputDateTask){
        this.inputTask = inputTask;
        this.inputDateTask = inputDateTask;
    }

    getInputTask(){
        return inputTask;
    }
    getInputDateTask(){
        return inputDateTask;
    }
    setInputTask(){
        this.inputTask = inputTask;
    }
    setInputDateTask(){
        this.inputDateTask = inputDateTaskss;
    }
}
let submit = document.getElementById('submit');
submit.onclick() = function(){
    let inputTask = document.getElementById('inputTask').value;
    let inputDateTask = document.getElementById('inputDate').value;

    let tasksDatas = new Tasks(inputTask, inputDateTask);
    tasksDatas.setInputTask();
    tasksDatas.setInputDateTask();
    
}
