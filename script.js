document.getElementById('btn').addEventListener('click', function () {
  document.getElementById('result').textContent = '你点击了按钮，时间是 ' + new Date().toLocaleTimeString();
});