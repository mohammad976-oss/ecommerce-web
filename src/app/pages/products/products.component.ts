import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Import here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'HP 255 G10 AMD Ryzen 5',
      price: '₹29,280',
      image: 'assets/hp.jpg',
      quantity: 1
    },
    {
      name: 'iPhone 16 Pro',
      price: '₹1,19,900',
      image: 'assets/iphone.jpg',
      quantity: 1
    },
    {
      name: 'Samsung QEF1 43 4K QLED Smart TV',
      price: '₹39,990.00',
      image: 'assets/samsung tv.jpg',
      quantity: 1
    },
    {
      
      name: 'Noise Two Wireless Headphones',
      price: '₹1,699',
      image: 'assets/headphone.jpg',
      quantity: 1
    },
    {
      name: 'Samsung Galaxy Tab A9+ Table',
      price: '₹24,999',
      image: 'assets/samsungtablet.jpg',
      quantity: 1

    },
    {
      name: 'NoiseFit Halo',
      price: '₹2,199',
      image: 'assets/noise smartwatch.jpg',
      quantity: 1

    },
    {
      name:'BlazeStorm GX Wireless RGB Mouse',
      price:'₹2,000',
      image:'assets/mouse.jpg',
      quantity: 1
    },
    {
      name:'EchoWave Mini Smart Speaker',
      price:'₹4,999',
      image:'assets/speaker.jpg',
      quantity: 1
    }
  ];

  addToCart(product: any) {
    alert(`${product.quantity} x ${product.name} added to cart!`);
  }
}
