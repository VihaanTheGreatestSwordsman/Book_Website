<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Manga & Book Reader</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>📚 My Manga & Book Reader</h1>
    <input type="file" id="fileInput" accept="image/*,.txt,.pdf" multiple />
  </header>

  <main id="viewer"></main>

  <footer>
    <p>© 2025 MyMangaReader | Legal Content Only</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background-color: #111;
  color: #fff;
  text-align: center;
}

header {
  background: #222;
  padding: 20px;
}

#fileInput {
  margin-top: 10px;
  background: #444;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

img {
  max-width: 90%;
  margin: 10px 0;
  border-radius: 5px;
}

pre {
  text-align: left;
  background: #222;
  padding: 20px;
  border-radius: 5px;
  white-space: pre-wrap;
  width: 80%;
}
