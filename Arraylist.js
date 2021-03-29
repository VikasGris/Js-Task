const deleteNth = (lst, N) => {
    const res = [];
    const countNums = {};
    lst.forEach((item) => {
      countNums[item] = countNums[item] ? countNums[item] + 1 : 1;
      
      if(countNums[item] <= N) {
        res.push(item);
        console.log(res)
      }
    })
    return res;
  }
  document.getElementById("result").innerHTML = (deleteNth([20,37,20,41], 1))