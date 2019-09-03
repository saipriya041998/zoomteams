import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Category } from './category';

@Component({
  selector: 'app-kbase',
  templateUrl: './kbase.component.html',
  styleUrls: ['./kbase.component.css']
})
export class KbaseComponent implements OnInit {
  filterdArticle: Article[];
  selectedTitle: string;
  article_id: string;
  article_name: string;
  published_date: string;
  published_time: string;
  category: string;
  created_by: string;
  description: string;
  image1: string;
  image2: string;
  isAdmin: boolean;
  arr: Article[] = [
     new Article('1', 'testing', '8/29/2019', '6:15:09 AM', 'Office - Practice Management', 'Admin Manju', 'google testing', 'assets/a3.jpg', '', true),
     new Article('2', 'Hundreds Defy Curfew in Kargil', '8/6/2019', '7:49:14 AM', 'Office - Practice Management', 'Harsha Mitlakod', 'Kargil: Several people were detained in Kargil on Thursday after they defied res...', 'assets/a3.jpg', 'assets/download.jpg', false),
     new Article('3', 'Govt to Double National Fellowship for SC Stu', '8/6/2019', '7:46:20 AM', 'Surgical Authorizations & Verifications', ' Harsha Mitlakod', 'The National Fellowship was launched by the government in 2005 as the Rajiv Gand...', 'assets/a3.jpg', 'assets/exam-illustration2.jpg', false),
     new Article('4', 'All-New BMW 3-Series Launched in India at Rs', '8/6/2019', '5:36:39 AM', 'Accounts Recivables - Collections', 'Admin Manju', 'The all-new BMW 3 Series is available in two diesel variants (BMW 320d Sport and...', 'assets/a3.jpg', 'assets/BMW-3-Series.jpg', true),
     new Article('5', 'Govt to Double National Fellowship for SC Stu', '8/2/2019 ', '10:45:59 AM', 'Accounts Recivables - Collections', 'Harsha Mitlakod', 'he all-new BMW 3 Series is available in two diesel variants (BMW 320d Sport and ...', 'assets/a3.jpg', 'assets/BMW-3-Series.jpg', false),
     new Article('6', 'Petrol in the national capital costs Rs 71.84 per litre and diesel is priced at Rs 65.11 a litre. In adjoining Noida', '8/1/2019 ', '1:25:07 PM', 'Accounts Recivables - Collections', ' Admin Manju', 'Petrol in the national capital costs Rs 71.84 per litre and diesel is priced at ...', 'assets/a3.jpg', 'assets/strike-called-by-Delhi-Petrol-Dealers.jpg', true),
     new Article('7', 'Pakistan Asks UNICEF to Remove Priyanka Chopr', '8/1/2019 ', ' 1:21:14 PM', 'Accounts Recivables - Collections', 'Admin Manju', 'Pakistan Human Rights Minister has written to the UNICEF demanding the removal o...', 'assets/a3.jpg', 'assets/Priyanka-Chopra.jpg', true)
  ];
  arr1: Category[] = [
     new Category(1, 'Office - Practice Management'),
     new Category(2, 'Accounts Recivables - Collections'),
     new Category(3, 'Surgical Authorizations & Verifications')
  ];

  constructor(private modalService: NgbModal, private fb: FormBuilder) {}
  kbase: FormGroup;
  closeResult: string;
  updatedItem;
  ngOnInit() {
     this.kbase = this.fb.group({
        article_id: new FormControl(),
        article_name: new FormControl(),
        published_date: new FormControl(),
        published_time: new FormControl(),
        category: new FormControl(),
        created_by: new FormControl(),
        description: new FormControl(),
        image1: new FormControl(),
        image2: new FormControl()

     });

  }
  openEdit(content, i, passTitle) {
     console.log(i);
     this.selectedTitle = passTitle;
     this.updatedItem = i;
     this.kbase.patchValue({
        article_id: this.arr[i].article_id,
        article_name: this.arr[i].article_name,
        published_date: this.arr[i].published_date,
        category: this.arr[i].category,
        created_by: this.arr[i].created_by,
        description: this.arr[i].description,
        image1: this.arr[i].image1,
        image2: this.arr[i].image2

     });

     this.modalService.open(content, {
        size: 'xl'
     });
  }

  UpdateItem() {


     let data = this.updatedItem;
     // console.log(data);
     for (let i = 0; i < this.arr.length; i++) {
        if (i == data) {
           this.arr[i].article_id = this.kbase.value.article_id;
           this.arr[i].article_name = this.kbase.value.article_name;
           this.arr[i].published_date = this.kbase.value.published_date;
           this.arr[i].category = this.kbase.value.category;
           this.arr[i].created_by = this.kbase.value.created_by;
           this.arr[i].description = this.kbase.value.description;
           this.arr[i].image1 = this.kbase.value.image1;
           this.arr[i].image2 = this.kbase.value.image2;
           this.modalService.dismissAll();
        }
     }

  }
  onReadMore(read, array) {
     console.log(array);
     this.created_by = array.created_by;
     this.article_id = array.article_id;
     this.image1 = array.image1;
     this.published_date = array.published_date;
     this.published_time = array.published_time;
     this.article_name = array.article_name;
     this.description = array.description;
     this.image2 = array.image2;

     this.modalService.open(read, {
        size: 'xl'
     });
  }

  openAddPopup(content1) {
    //  if (this.kbase.value.article_id != null) {
        this.kbase.patchValue({
           article_id: null,
           article_name: null,
           published_date: null,
           category: null,
           created_by: null,
           description: null,
           image1: null,
           image2: null
        });
        this.modalService.open(content1, {
           size: 'xl'
        });

  }

  onAddArticle() {
     console.log(this.kbase.value);
     this.arr.push(new Article(this.kbase.value.article_id, this.kbase.value.article_name, this.kbase.value.category, this.kbase.value.description, this.kbase.value.published_date, this.kbase.value.published_time, this.kbase.value.created_by, this.kbase.value.image1, this.kbase.value.image2, true));
     alert("Added sucessfully");
     console.log(this.arr);

  }

  onSearch(value) {

     console.log(value);
     if (value != '') {
        this.arr = this.arr.filter(x => x.article_name.startsWith(value));

     }
  }


  Search(x: string) {

     this.filterdArticle = this.arr;

  }


  Search1(x: string) {

     this.filterdArticle = this.arr.filter(x => x.category == "Accounts Recivables - Collections");


  }
  Search2(x: string) {

     this.filterdArticle = this.arr.filter(x => x.category == "Office - Practice Management");

  }
  Search3(x: string) {

     this.filterdArticle = this.arr.filter(x => x.category == "Surgical Authorizations & Verifications");
  }
  myArticle() {
     this.filterdArticle = this.arr.filter(x => x.isAdmin == true);
  }

}
