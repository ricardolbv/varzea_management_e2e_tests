from selenium import webdriver
import pytest
import chromedriver_binary
import logging

from test_cases.home_page.InitialInteraction import InitialInteraction

driver = webdriver.Chrome()


def test_splash():
    try:
        driver.get("http://localhost:3000/")
        logging.info('Logando em: http://localhost:3000/')
        driver.fullscreen_window()
    except:
        print('Erro ao logar')


def test_go_to_login():
    tst = InitialInteraction(driver, False)

    assert tst.splash_screen() == 1
    assert tst.goto_login() == 1
