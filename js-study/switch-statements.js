function caseInSwitch(lets) {
  let answer = "";
  switch(lets) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    // It works like else..
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

console.log(caseInSwitch(9));
