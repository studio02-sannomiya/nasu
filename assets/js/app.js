import { scrollObservation } from "./modules/scrollObservation.js";
scrollObservation(".animate__animated" , "animate__fadeInLeft");
// scrollObservation("読み込ませるクラス名" , "付与するクラス名（アニメーション）");

import { hamburger } from "./modules/hamburger.js";
hamburger("box" , "boxChild" , "active");
// hamburger("読み込ませる親要素のクラス名" , "読み込ませる子要素のクラス名" , "付与するクラス名");