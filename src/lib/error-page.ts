export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Something went wrong — canit Portal</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="theme-color" content="#0A1931" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Montserrat', system-ui, sans-serif;
        background: #0A1931;
        color: #ffffff;
        display: grid;
        place-items: center;
        min-height: 100dvh;
        padding: 1.5rem;
        -webkit-font-smoothing: antialiased;
      }
      .card {
        max-width: 24rem;
        width: 100%;
        text-align: center;
        padding: 2.5rem 2rem;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 1.25rem;
        backdrop-filter: blur(16px);
      }
      h1 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      p {
        color: rgba(255,255,255,0.6);
        font-size: 0.875rem;
        line-height: 1.6;
        margin-bottom: 1.75rem;
      }
      .actions {
        display: flex;
        gap: 0.625rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      a, button {
        padding: 0.75rem 1.25rem;
        border-radius: 0.75rem;
        font: inherit;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        border: none;
        transition: all 0.2s ease;
      }
      .primary {
        background: #64B5F6;
        color: #0A1931;
      }
      .primary:hover {
        background: #90CAF9;
        box-shadow: 0 8px 24px -8px rgba(100,181,246,0.5);
      }
      .secondary {
        background: rgba(255,255,255,0.08);
        color: #fff;
        border: 1px solid rgba(255,255,255,0.15);
      }
      .secondary:hover {
        background: rgba(255,255,255,0.14);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
