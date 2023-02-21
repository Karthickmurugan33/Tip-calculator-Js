
document.querySelector('#calculate').onclick = calculateTip;

function calculateTip() {
  let amount = document.querySelector('#amount').value;
  let persons = document.querySelector('#persons').value;
  let service = document.querySelector('#service').value;

  if (amount == "" || service == 'select') {
    alert("please enter valid value")
    return;
  }
  else if (persons === "1") {
    document.querySelector('#each').style.display = 'none';
  }
  else {
    document.querySelector('#each').style.display = "block";
  }

  let total = (amount * service / persons);
  total = total.toFixed(2);

  document.querySelector('.tip').style.display = 'block';
  document.querySelector('#total').innerHTML = total;
}

document.write(5 + 8)





