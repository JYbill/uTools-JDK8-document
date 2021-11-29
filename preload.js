window.searchByKeyWord = (keyWorld) => {
  utools.findInPage(keyWorld);
}

window.stopSearch = () => {
  utools.stopFindInPage();
}

// 声明周期函数
utools.onPluginEnter(() => {
  utools.setExpendHeight(700)
})