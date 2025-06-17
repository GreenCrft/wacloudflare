export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- OG Meta -->
  <meta property="og:title" content="Owner SpielNetwork" />
  <meta property="og:description" content="Hi, I'm SpielNetwork Owner, click the link if u want to talk with me" />
  <meta property="og:image" content="https://i.imgur.com/C3Its49.jpeg" />
  <meta property="og:url" content="https://wa.spaceship.com" />
  <meta name="theme-color" content="#121212" />

  <!-- Redirect dalam 4 detik -->
  <meta http-equiv="refresh" content="4; url=https://wa.me/6285813087161" />
  <title>Menghubungkan ke Green...</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />

  <style>
    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      font-family: 'Poppins', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(270deg, #1a1a2e, #16213e, #0f3460, #1a1a2e);
      background-size: 800% 800%;
      animation: rainbow 12s ease infinite;
    }

    @keyframes rainbow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .card {
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(12px);
      color: #ffffff;
      padding: 40px 60px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      text-align: center;
      max-width: 90%;
    }

    .title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 12px;
    }

    .dots {
      font-size: 1.4rem;
      font-weight: 400;
      font-family: monospace;
      white-space: pre;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="title">Menghubungkan ke Green</div>
    <div class="dots" id="dots">.  </div>
  </div>

  <script>
    const dots = document.getElementById("dots");
    const frames = [".  ", ". . ", ". . .", " . .", "  . ", ".  "];
    let i = 0;
    setInterval(() => {
      dots.textContent = frames[i++ % frames.length];
    }, 300);
  </script>
</body>
</html>`, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }
}
