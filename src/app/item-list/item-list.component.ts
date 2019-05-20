import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  tbItens: any;
  itens: Array<Object> = [];
  selectedItem : any;
  teste = [];

  deleteModalRef : BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  constructor(
    private router : Router,
    private modalService: BsModalService

  ) { }

  async ngOnInit() {
    var i;

    this.tbItens = localStorage.getItem("tbItens");// Recupera os dados armazenados
    this.tbItens = JSON.parse(this.tbItens); // Converte string para objeto

    for (i = 0; i < this.tbItens.length; i++) {
      this.itens.push(JSON.parse(this.tbItens[i]))
    }

  }

  onDelete(item){
    this.selectedItem = item;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm'});
  }

  async onConfirmItem(){
    var i;
    for (i = 0; i < this.tbItens.length; i++) {
      if(this.tbItens[i].indexOf(this.selectedItem.Item) > -1){
        this.tbItens.splice(i, 1) //Deleto o item do objeto
        this.itens.splice(i, 1)

        await localStorage.setItem("tbItens", JSON.stringify(this.tbItens)); //Seto o objeto sem o item no array

        this.deleteModalRef.hide();
        alert('Item excluído com sucesso');
      }
    }
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }
}
