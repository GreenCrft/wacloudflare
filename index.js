export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Open Graph Tags -->
  <meta property="og:title" content="Owner SpielNetwork" />
  <meta property="og:description" content="Hi, I'm SpielNetwork Owner, click the link if u want to talk with me" />
  <meta property="og:image" content="https://i.imgur.com/C3Its49.jpeg" />
  <meta property="og:url" content="https://wa.spaceship.com" />
  <meta name="theme-color" content="#25D366" />

  <meta http-equiv="refresh" content="2; url=https://wa.me/6285813087161" />
  <title>Menghubungan ke Mr.Green...</title>

  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      font-family: 'Segoe UI', sans-serif;
      background: url('https://i.imgur.com/C3Its49.jpeg') no-repeat center center fixed;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 30px 50px;
      border-radius: 15px;
      font-size: 2rem;
      box-shadow: 0 0 20px #25D366;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="text">Redirecting to <strong>Green</strong>...</div>
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
