class Tasks {
    constructor(inputTask, inputDateTask) {
        this.inputTask = inputTask;
        this.inputDateTask = inputDateTask;
    }
    getInputTask() {
        return this.inputTask;
    }
    getInputDateTask() {
        return this.inputDateTask;
    }
    setInputTask(inputTask) {
        this.inputTask = inputTask;
    }
    setInputDateTask(inputDateTask) {
        this.inputDateTask = inputDateTask;
    }
}

let submitTask = document.getElementById('submitTask');
submitTask.onclick = function () {
    let inputTask = document.getElementById('inputTask').value;
    let inputDateTask = document.getElementById('inputDate').value;

    let tasksDatas = new Tasks(inputTask, inputDateTask);
    tasksDatas.setInputTask(inputTask);
    tasksDatas.setInputDateTask(inputDateTask);

    let datasT = tasksDatas.getInputTask();
    let datasD = tasksDatas.getInputDateTask();    
    console.log(datasT);
    console.log(datasD);
    for (i = 0; i < datasT.length; i++) {    

        let target = document.getElementById('target');
        target.innerHTML = `
    <tr>
    <td scope="row">${datasT[i]}</td>
    <td scope="row">${datasD[i]}</td>
    <td scope="row">M</td>
    <td scope="row">X</td>
    </tr>
    `
    }




}
