import { Component, OnInit } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  content: string;
}

interface Work {
  image: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  services: Service[] = [];
  works: Work[] = [];

  constructor() { }

  ngOnInit(): void {
    this.services = [
      {
        icon: 'phone-portrait-outline',
        title: 'Responsive Websites',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam ex eveniet eadeserunt, debitis sed, molestias repudiandae magni harum perspiciatis, iste vero voluptate veniam'
      },
      {
        icon: 'layers-outline',
        title: 'Web Apps',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam ex eveniet eadeserunt, debitis sed, molestias repudiandae magni harum perspiciatis, iste vero voluptate veniam'
      },
      {
        icon: 'chatbubbles-outline',
        title: 'Hybrid Mobile App',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam ex eveniet eadeserunt, debitis sed, molestias repudiandae magni harum perspiciatis, iste vero voluptate veniam'
      }
    ];
    this.works = [
      {
        image: 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png',
        title: 'Project 1',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam ex eveniet eadeserunt, debitis sed, molestias repudiandae magni harum perspiciatis, iste vero voluptate veniam'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_960_720.jpg',
        title: 'Project 2',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam ex eveniet eadeserunt, debitis sed, molestias repudiandae magni harum perspiciatis, iste vero voluptate veniam'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg',
        title: 'Project 3',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam ex eveniet eadeserunt, debitis sed, molestias repudiandae magni harum perspiciatis, iste vero voluptate veniam'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/blogging-336376_960_720.jpg',
        title: 'Project 4',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam ex eveniet eadeserunt, debitis sed, molestias repudiandae magni harum perspiciatis, iste vero voluptate veniam'
      }
    ];
  }

}
