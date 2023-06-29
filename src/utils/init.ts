/*
 * @Author: heinan
 * @Date: 2023-06-29 16:18:32
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-29 17:46:28
 */
import 'vant/lib/index.css'
import { Form, Field, CellGroup, Button, Space, Toast, Notify } from 'vant'

export const initVant = function (app: any) {
  app.use(Form)
  app.use(Field)
  app.use(CellGroup)
  app.use(Button)
  app.use(Space)
  app.use(Toast)
  app.use(Notify)
}
