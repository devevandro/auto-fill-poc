const puppeteer = require("puppeteer");

const LOGIN_URL = ''; // URL para a realização do login
const USERNAME = '' // usuário;
const PASSWORD = '' // senha;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto(LOGIN_URL, { waitUntil: "networkidle2" });

  await page.type('input[name="username"]', USERNAME);
  await page.type('input[name="password"]', PASSWORD);

  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation({ waitUntil: "networkidle2" }),
  ]);

  await new Promise((resolve) => setTimeout(resolve, 10000));
})();
