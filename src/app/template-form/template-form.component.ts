import { Component, OnInit, Input } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

interface Options {
  name: string;
  code: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})


export class TemplateFormComponent implements OnInit {

  unidValues: SelectItem[];
  selectUnid: Options;
  formulario: FormGroup;
  tbItens: any;
  values: any;
  storage = [];

  constructor(
    private toasterService: ToasterService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuider: FormBuilder
  ) { }

  ngOnInit() {

    this.unidValues = [
      { label: 'Selecione a Unid.', value: null },
      { label: 'Litro', value: 'LT' },
      { label: 'Quilograma', value: 'KG' },
      { label: 'Unidade', value: 'UN' },

    ];

    this.values = [];

    this.values = this.route.snapshot.params;

    if (!this.values.Price) {
      this.formulario = this.formBuider.group({
        item: [null, [Validators.maxLength(50), Validators.required]],
        selectUnid: [null, Validators.required],
        quantity: [null],
        price: [null, Validators.required],
        perishable: [null, Validators.required],
        dateValid: [null, Validators.required],
        dateFabrication: [null, Validators.required]
      })

    } else {
      this.formulario = this.formBuider.group({
        item: [this.values.Item, [Validators.maxLength(50), Validators.required]],
        selectUnid: [this.values.UM, Validators.required],
        quantity: [this.values.Quantity],
        price: [this.values.Price, Validators.required],
        perishable: ["perishable", Validators.required],
        dateValid: [this.values.DateValid, Validators.required],
        dateFabrication: [this.values.DateFabrication, Validators.required]
      })
    }

  }

  async onSubmit() {
    var i;
    var message = "";

    this.tbItens = localStorage.getItem("tbItens");// Recupera os dados armazenados
    this.tbItens = JSON.parse(this.tbItens); // Converte string para objeto


    if (!this.tbItens) {
      this.tbItens = [];
    }

    let valueSubmit = Object.assign({}, this.formulario.value);

    if (!this.values.Item) {

      for (i = 0; i < this.tbItens.length; i++) {
        if (this.tbItens[i].Item == valueSubmit.item) {
          alert('Item já exite');
          return false;
        }
      }

      var dados = JSON.stringify({
        Item: valueSubmit.item,
        UM: valueSubmit.selectUnid,
        Quantity: valueSubmit.quantity,
        Price: valueSubmit.price,
        Perishable: valueSubmit.perishable,
        DateValid: valueSubmit.dateValid,
        DateFabrication: valueSubmit.dateFabrication
      });

      this.tbItens.push(dados);

      message = 'Registro Incluído'
    } else {
      for (i = 0; i < this.tbItens.length; i++) {
        if (this.tbItens[i].indexOf(valueSubmit.item) > -1) {

          this.tbItens[i] = JSON.stringify({
            Item: valueSubmit.item,
            UM: valueSubmit.selectUnid,
            Quantity: valueSubmit.quantity,
            Price: valueSubmit.price,
            Perishable: valueSubmit.perishable,
            DateValid: valueSubmit.dateValid,
            DateFabrication: valueSubmit.dateFabrication
          });
        }
      }

      message = 'Registro Alterado'
    }

    await localStorage.setItem("tbItens", JSON.stringify(this.tbItens));

    alert(message)
    this.formulario.reset();
  }


  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  cancelItem() {
    this.router.navigateByUrl('/item-list');
  }



}
