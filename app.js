import Store from "./services/Store.js"
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import { MenuPage } from "./components/MenuPage.js";
import { DetailPage } from "./components/DetailPage.js";
import { OrderPage } from "./components/OrderPage.js";


window.app={}
app.store = Store;
app.router = Router

window.addEventListener("DOMContentLoaded", () => {
  loadData()
 app.router.init() 
})
