function launchApp () {
  const ui = SpreadsheetApp.getUi()

  const app = HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Addon')
  ui.showSidebar(app)
}


function onOpen () {
  const ui = SpreadsheetApp.getUi()

  const menu = ui
    .createMenu('Addon')
    .addItem('Launch', 'launchApp')

  return menu.addToUi()
}
