import { Component } from '@angular/core';
import { Star } from "../star/star";
import { PortImgs } from "../port-imgs/port-imgs";

@Component({
  selector: 'app-portfolio',
  imports: [Star, PortImgs],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {

}
