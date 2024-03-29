import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeBanner = [
    {
      option: 'Specialist examination',
      icon: 'fa-regular fa-hospital',
    },
    {
      option: 'Remote examination',
      icon: 'fa-regular fa-mobile-screen',
    },
    {
      option: 'General examination',
      icon: 'fa-regular fa-ballot-check',
    },
    {
      option: 'Medical test',
      icon: 'fa-regular fa-microscope',
    },
    {
      option: 'Mental health',
      icon: 'fa-regular fa-brain',
    },
    {
      option: 'Dental examination',
      icon: 'fa-regular fa-tooth',
    },
    {
      option: 'Surgery package',
      icon: 'fa-regular fa-scalpel',
    },
    {
      option: 'Medical products',
      icon: 'fa-regular fa-truck-medical',
    },
    {
      option: 'Business health',
      icon: 'fa-regular fa-briefcase-medical',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
