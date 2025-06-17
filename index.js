export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- OG Tags -->
  <meta property="og:title" content="Owner SpielNetwork" />
  <meta property="og:description" content="Hi, I'm SpielNetwork Owner, click the link if u want to talk with me" />
  <meta property="og:image" content="https://i.imgur.com/C3Its49.jpeg" />
  <meta property="og:url" content="https://wa.spaceship.com" />
  <meta name="theme-color" content="#25D366" />

  <!-- Redirect -->
  <meta http-equiv="refresh" content="2; url=https://wa.me/6285813087161" />
  <title>Menghubungkan ke Green...</title>

  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(270deg, #25D366, #ff5e62, #ffc371, #25D366);
      background-size: 800% 800%;
      animation: rainbow 10s ease infinite;
    }

    @keyframes rainbow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .text {
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 30px 50px;
      border-radius: 15px;
      font-size: 1.8rem;
      box-shadow: 0 0 20px #25D366;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .dots {
      margin-top: 10px;
      font-weight: bold;
      font-family: monospace;
      font-size: 1.5rem;
      animation: loadingDots 1.5s infinite steps(6);
      white-space: pre;
    }

    @keyframes loadingDots {
      0%   { content: ".  "; }
      20%  { content: ". . "; }
      40%  { content: ". . ."; }
      60%  { content: " . . "; }
      80%  { content: "  . "; }
      100% { content: ".  "; }
    }
  </style>
</head>
<body>
  <div class="text">
    Menghubungkan ke Green
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
        "cache-control": "public, max-age=3600"
      }
    });
  }
}
