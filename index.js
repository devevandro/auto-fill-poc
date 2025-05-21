const puppeteer = require("puppeteer");

const LOGIN_URL = "http://portainer.coolify.innovadevhouse.com.br/#!/auth";
const USERNAME = "admin";
const PASSWORD = "$2y$10$ihzLWIib5lMtRo5nvxwOQe9Mv0mpW3d0gF7eLi1LV8FkhPUW/77O2";

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

  console.log("Login feito com sucesso!");
  await new Promise((resolve) => setTimeout(resolve, 10000));
})();
