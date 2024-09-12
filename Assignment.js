function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  let tax = (income - expenses) * 0.2;
  return tax;
}

function sendNotification(email) {
  if (
    typeof email !== "string" ||
    email.indexOf("@") === -1 ||
    email.split("@").length !== 2
  ) {
    return "Invalid Email";
  }
  let [userName, domain] = email.split("@");
  return userName + " sent you an email from " + domain;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (name[i] >= "0" && name[i] <= "9") {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Invalid Input";
  }

  let finalScore = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    finalScore += 20;
  }

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let sum = 0;
  for (let number of waitingTimes) {
    sum += number;
  }
  let count = waitingTimes.length;
  let average = Math.round(sum / count);
  let time = (serialNumber - 1 - count) * average;
  return time;
}
