import "vant/lib/index.css";
import { Form, Field, CellGroup, Button, Space, Toast, Notify } from "vant";

export const initVant = function (app: any) {
  app.use(Form);
  app.use(Field);
  app.use(CellGroup);
  app.use(Button);
  app.use(Space);

  app.use(Notify);
  app.use(Toast);
};
