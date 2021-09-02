import pytest
import chromedriver_binary

from selenium import webdriver


def test_login():
    driver = webdriver.Chrome()
    driver.get("http://www.python.org")
