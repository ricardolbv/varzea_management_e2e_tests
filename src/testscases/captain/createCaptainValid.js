const {Builder, By, Key, until, Alert} = require('selenium-webdriver');

var createCaptianValid =  async (driver, onMenu) => {
    try {
        const nome = (Math.random() + 1).toString(36).substring(7);
        const CPF = '999.999.999-99';
        const telefone = '+5519989766588';
        const endereco = 'Jd Teste';
        const cep = '13083-898';
        const num = '555';
        const cidade = 'campinas';

        await driver.findElement(By.id('nome')).sendKeys(nome);
        await driver.findElement(By.id('cpf')).click();
        await driver.sleep(1000);
        await driver.findElement(By.id('cpf')).sendKeys(CPF);
        await driver.findElement(By.id('telefone')).sendKeys(telefone);
        await driver.findElement(By.id('endereco')).sendKeys(endereco);
        await driver.findElement(By.id('cep')).click();
        await driver.sleep(1000);
        await driver.findElement(By.id('cep')).sendKeys(cep);
        await driver.findElement(By.id('numero')).sendKeys(num);
        await driver.findElement(By.id('cidade')).sendKeys(cidade);

        /**Selecionando a cidade */
        await driver.findElement(By.id('estado')).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Acre - AC')]"))).click()

        return 1;

    } catch (error) {
        console.log(error);
    return 0;
 }
}


module.exports =  {createCaptianValid};