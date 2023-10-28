import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_-Na4a8rCYhpbbSsvJtoTxDbhrbkvqsI",
  authDomain: "haufecodingday.firebaseapp.com",
  projectId: "haufecodingday",
  storageBucket: "haufecodingday.appspot.com",
  messagingSenderId: "478738589157",
  appId: "1:478738589157:web:e0f94c0ea738c3e5d4bb0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './landing_page.component.html',
  styleUrls: ['./landing_page.component.css']
})

export class LandingPageComponent {
  title = 'HAUFE CC';
  matrix: number[][];
  selectedRow: number = -1;
  selectedCol: number = -1;
  free = false;

  scooters: any[] = [
    { brand: 'Brand A', model: 'Model 1', color: 'Red' , image: "https://thumbs.dreamstime.com/z/superpedestrian-link-scooters-city-street-santa-cruz-de-tenerife-spain-november-modern-urban-transport-canary-islands-255356151.jpg?w=992"},
    { brand: 'Brand B', model: 'Model 2', color: 'Blue'},
    { brand: 'Brand C', model: 'Model 3', color: 'Green'},
    { brand: 'Brand D', model: 'Model 4', color: 'Yellow'},
    { brand: 'NONE'}
  ];

    constructor() {
      this.matrix = this.generateMatrix(5, 5);
    }
  private generateMatrix(rows: number, cols: number): number[][] {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {

        row.push(i * cols + j + 1);
      }
      matrix.push(row);
    }
    return matrix;
  }

  selectCell(row: number, col: number) {
    this.selectedRow = row;
    this.selectedCol = col;
    }
  }
