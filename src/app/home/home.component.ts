import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSlide: number = 0;
  totalSlides: number = 5; // Total number of images
  slides: any;

  ngOnInit(): void {
    this.slides = document.querySelectorAll('.slider-image');
    this.startSlider();
  }
  

  startSlider() {
    // Set the first image as active
    this.slides[this.currentSlide].classList.add('active');

    // Change the slide every 4 seconds
    setInterval(() => {
      this.changeSlide('next');
    }, 4000); // 4 seconds
  }

  changeSlide(direction: string) {
    this.slides[this.currentSlide].classList.remove('active');

    // Change the slide index based on direction (next or previous)
    if (direction === 'next') {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    } else {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    }

    this.slides[this.currentSlide].classList.add('active');
  }
  
}
