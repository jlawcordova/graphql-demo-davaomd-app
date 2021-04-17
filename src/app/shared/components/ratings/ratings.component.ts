import { Component, Input, OnInit } from '@angular/core';
import { Rating } from 'src/app/core/models/rating';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input()
  rating: Rating | undefined;

  @Input()
  fullRating: number = 5;

  private _filledStars: number | undefined;
  public get filledStars(): number {
    if (this._filledStars === undefined) {
      this._filledStars = Math.floor(this.rating?.rating ?? 0)
    }

    return this._filledStars;
  }

  private _halfStar: number | undefined;
  public get halfStar(): number {
    if (this._halfStar === undefined) {
      // 1 if there is the decimal part of the rating is greater than 0.5.
      this._halfStar = Math.round((this.rating?.rating ?? 0) - this.filledStars)
    }

    return this._halfStar;
  }

  private _emptyStars: number | undefined;
  public get emptyStars(): number {
    if (this._emptyStars === undefined) {
      // The emtpy stars are what remains after the filled stars and half star is filled.
      this._emptyStars = this.fullRating - Math.floor(this.rating?.rating ?? 0) - this.halfStar
    }

    return this._emptyStars;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
