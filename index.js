let testEmployee = ["Gray", "Worm", "Security", 1];// Your code here

let testEmployee2 = ['Erin', 'Rose', 'programmer', 3];

function createEmployeeRecord(array) {
    let employeeObject = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employeeObject;
     
}

let threeRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3], ['erin', 'rose', 'programmer', 4],
    ['erin', 'rose', 'programmer', 5]
  ]

function createEmployeeRecords(arrays) {
  
  let map = arrays.map(function(array) {
    let newRecord = createEmployeeRecord(array);

    return newRecord;
    
  })

  return map;
  
}



const createTimeInEvent = function(record, time) {
  if(time) {

    const extractedTime = time.split(' ');
  
    let dateStamp =extractedTime[0];
    let timeStamp = parseInt(extractedTime[1], 10);
     
    let newEvent = {
      type: "TimeIn",
      date: dateStamp,
      hour: timeStamp
    }

    record.timeInEvents.push(newEvent);
    
    return record;
  
  }
}


const createTimeOutEvent = function(record, time) {
  if(time) {

    const extractedTime = time.split(' ');

    let dateStamp =extractedTime[0];
    let timeStamp = parseInt(extractedTime[1], 10);
     
    let newEvent = {
      type: "TimeOut",
      date: dateStamp,
      hour: timeStamp
    }

    record.timeOutEvents.push(newEvent);
    
    return record;
  
  }
}

const hoursWorkedOnDate = function(record) {

  let timeIn =  record.timeInEvents[0].hour;
  let timeOut = record.timeOutEvents[0].hour;
  let hours = (timeOut - timeIn) / 100;
  return hours;

 
}

const wagesEarnedOnDate = function(record) {
  let hoursWorked = hoursWorkedOnDate(record);
  const wages =  (hoursWorked * record.payPerHour);
  return wages;
}

const allWagesFor = function(record) {  
  console.log(record.timeInEvents);
  console.log(record.timeOutEvents);
  
  }
  
  // console.log(record.timeInEvents[1]);

  // console.log(timeOut);
  // console.log(timeIn);
  

 





