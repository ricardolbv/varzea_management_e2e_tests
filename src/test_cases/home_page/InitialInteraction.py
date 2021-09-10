from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import logging


class InitialInteraction:
    def __init__(self, driver, is_on_screen):
        self.driver = driver
        self.is_on_screen = is_on_screen

    def splash_screen(self):
        try:
            WebDriverWait(self.driver, 10).until(lambda x: x.find_element(
                By.CSS_SELECTOR, "img[src='/static/media/players.d583d369.png']"))

            logging.info("Verificando a imagem inicial")

            return 1

        except Exception as err:
            logging.error('Erro ao verificar imagem inicial', err)

            return 0

    def goto_login(self):
        try:
            WebDriverWait(self.driver, 100)

            WebDriverWait(self.driver, 10).until(lambda x: x.find_element(
                By.ID, "gotoLogin")).click()
            logging.info("Indo até a tela de loggin")

            return 1

        except Exception as err:
            logging.error('Erro ao ir para login' + err)

            return 0
