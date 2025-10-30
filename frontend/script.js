function saveData() {
  const stats = {
    shots: document.getElementById('shots').value,
    passes: document.getElementById('passes').value,
    assists: document.getElementById('assists').value,
    duels: document.getElementById('duels').value
  };
  localStorage.setItem('stats', JSON.stringify(stats));
  document.getElementById('analytics').innerText =
    "📊 Дані збережено: " + JSON.stringify(stats);
}
