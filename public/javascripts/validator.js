function validateForm() {
  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;

  if (!userName || !password) {
    alert('Please fill This Fields.');
    return false;
  }else if(userName!=="john" &&password !=="123"){
    alert("entered input is error")
    return false;
  }



  return true;
}

