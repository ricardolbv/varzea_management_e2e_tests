require('chromedriver');
const {Builder, By, Key, until, Alert} = require('selenium-webdriver');

jest.setTimeout(30000);
var capitain = require('../testscases/captain/createCaptainValid');

var driver =  new Builder().forBrowser('chrome').build();

describe("CT - 00: Verificar telas: ", () => {
    test('Splash', async () => {
        await driver.manage().window().maximize() 
    
        await driver.get('http://localhost:3000/');
        await driver.wait(until.elementLocated(By.css("img[src='/static/media/players.d583d369.png']")));
    })

    test('Login', async () => {
        await driver.wait(until.elementLocated(By.id("gotoLogin"))).click();
        await driver.wait(until.elementLocated(By.id("email")))
        await driver.wait(until.elementLocated(By.id("senha")))
        await driver.sleep(1500);
        
        await driver.get('http://localhost:3000/');
        await driver.wait(until.elementLocated(By.css("img[src='/static/media/players.d583d369.png']")));
    })

    test('Como jogar', async () => {
        await driver.wait(until.elementLocated(By.id("gotoInformative"))).click();
        await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Como Jogar')]")))
        await driver.sleep(1500);

        await driver.get('http://localhost:3000/');
        await driver.wait(until.elementLocated(By.css("img[src='/static/media/players.d583d369.png']")));
    })

    test('Inscrição', async () => {
        await driver.wait(until.elementLocated(By.id("inscricao"))).click();
        
        await driver.wait(until.elementLocated(By.id("nome")));
        await driver.wait(until.elementLocated(By.id("cadastrar")));
    })
})  

describe("CT - 01: Capitão: ", () => {
    test('Criar capitão válido', async () => {
        var result = await capitain.createCaptianValid(driver, '');
        expect(result).toBe(1);
    })
})  

