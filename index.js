export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta property="og:title" content="Owner SpielNetwork" />
    <meta property="og:description" content="Hi, Im SpielNetwork Owner, click the link if u want to talk with me" />
    <meta property="og:image" content="https://i.ibb.co/Lzrgm0gT/20250305-084329.jpg" />
    <meta property="og:url" content="https://wa.spaceship.com" />
    <meta name="theme-color" content="#25D366" />

    <title>Redirecting to WhatsApp...</title>
    <script>
      setTimeout(function() {
        window.location.href = "https://wa.me/6285813087161";
      }, 1500);
    </script>
  </head>
  <body>
    <p>Redirecting to WhatsApp...</p>
  </body>
</html>`, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
};
