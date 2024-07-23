import { Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';

interface Card {
  title: string;
  cost: number;
  imageUrl?: string;
}

@Component({
  selector: 'app-card-view-data',
  templateUrl: './card-view-data.component.html',
  styleUrl: './card-view-data.component.css'
})

export class CardViewDataComponent implements OnInit {
  showFilter: boolean = false;
  tempSortDirection: 'asc' | 'desc' | null = null;
  
  @ViewChild('searchInputValue') searchInputValue : ElementRef | undefined
  chips: string[] = [];

  cards: Card[] = [
    { title: 'Student Insurance Plan', cost: 100, imageUrl: '../../assets/card1.png'},
    { title: 'Car Insurance Plan', cost: 150, imageUrl: '../../assets/card2.jpg' },
    { title: 'Bike Insurance Plan', cost: 200, imageUrl: '../../assets/bike11.jpg' },
    { title: 'Family Insurance Plan', cost: 250, imageUrl: '../../assets/card4.png' },
    { title: 'Home Insurance Plan', cost: 300, imageUrl: '../../assets/card5.png' },
    { title: 'Health Insurance Plan', cost: 350, imageUrl: '../../assets/card7.png' },
    { title: 'Test Data 1', cost: 400, imageUrl: '' },
    { title: 'Travel Insurance Plan', cost: 450, imageUrl: '../../assets/card8.png'},
    { title: 'Child Insurance Plan', cost: 500, imageUrl: '../../assets/card9.png' },
    { title: 'Senior Citizan Plan', cost: 550, imageUrl: '../../assets/card10.png' }
  ];
  
  filteredCards: Card[] = [...this.cards];
  tempCards: Card[] = [...this.cards];   
  
  defaultImageUrl = '../../assets/defaultPic.jpg';

  constructor() { }

  ngOnInit(): void {
    this.setCardsImageWithDefaultImage();
  }

  addChip(input: string): void {
    if ((input || '').trim()) {
      this.chips.push(input.trim());
      this.applySearch();
    }
  }

  removeChip(chip: string): void {
    const index = this.chips.indexOf(chip);
    if (index >= 0) {
      this.chips.splice(index, 1);
      this.applySearch();
    }
  }

  applySearch() { 
    const searchValue = this.searchInputValue?.nativeElement.value;
    if (this.chips.length > 0) {
      this.filteredCards = this.cards.filter(card =>
        this.chips.every(chip =>
          card.title.toLowerCase().includes(chip.toLowerCase())
        )
      );
    } else if (searchValue.trim() != '') {
      this.filteredCards = this.cards.filter(card =>
        card.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }else {
      this.filteredCards = this.cards;
    }
    this.setCardsImageWithDefaultImage();
  }

  setCardsImageWithDefaultImage() {
    this.filteredCards.forEach(card => {
      if (!card.imageUrl || card.imageUrl.trim() === '') {
        card.imageUrl = this.defaultImageUrl;
      }
    });
  }

  toggleSort(sortDirection: 'asc' | 'desc') {
    this.tempSortDirection = sortDirection;
    this.tempCards = [...this.filteredCards];
    if (sortDirection === 'asc') {
      this.tempCards.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortDirection === 'desc') {
      this.tempCards.sort((a, b) => b.title.localeCompare(a.title));
    }
  }
  
  applySort(sidenav: any) {
    this.filteredCards = [...this.tempCards];
    this.tempSortDirection = null;
    sidenav.close();
  }

  resetSort() {
    this.tempSortDirection = null;
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

}
