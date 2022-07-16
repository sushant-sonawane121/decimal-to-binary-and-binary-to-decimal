function clearall() {
  document.getElementById("decimal").value = "";
  document.getElementById("binary-output").value = "";

  document.getElementById("binary").value = "";
  document.getElementById("decimal-output").value = "";
}

function convertToBinary() {
  let x = document.getElementById("decimal").value;
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x != 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  document.getElementById("binary-output").value = bin;
  console.log(bin);
}

function converttodecimal() {
  let A = document.getElementById("binary").value;

  var binary = parseInt(A, 2);
  document.getElementById("decimal-output").value = binary;
  console.log(binary);
}
