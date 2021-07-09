// 完整引入
import element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'

// 按需引入
// import { ElButton } from "element3";
// import "element3/lib/theme-chalk/button.css";

export default function (app) {
  // 完整引入
  app.use(element3)

  // 按需引入
  // app.use(ElButton);
}
