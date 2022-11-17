import { Component } from '@angular/core';

// Model
export class Entidades {
  name: string;
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;

  constructor(name: string) {
    this.name = name;
    this.view = false;
    this.create = false;
    this.edit = false;
    this.delete = false;
  }
}

const checaEntidades = {
  'VIEW_ORDEMSERVICO': () => ELEMENT_DATA[0].view = true,
  'VIEW_CREDENCIADA': () => ELEMENT_DATA[3].view = true,
  'VIEW_DISPONIBILIDADE': () => ELEMENT_DATA[4].view = true,
  'default': () => console.log()
};

// Variável local
let nomeEntidades = [
  'OS',
  'Ambiente',
  'Ativo',
  'Credenciada',
  'Disponibilidade',
];

// Cria a tabela sem campos preenchidos
const ELEMENT_DATA: Entidades[] = [];
nomeEntidades.forEach((elem) => {
  ELEMENT_DATA.push(new Entidades(elem));
});

//let elem = 'VIEW_ORDEMSERVICO'
//checaEntidades[elem]();

// permissões que serão recebidas do quarkus
let permissions = [
  'VIEW_ORDEMSERVICO',
  'VIEW_CREDENCIADA',
  'VIEW_DISPONIBILIDADE',
  'COGNITO_SUPERUSER',
];

// preenche os campos
permissions.forEach((elem) => {
  /*switch (elem) {
    case 'VIEW_ORDEMSERVICO':
      ELEMENT_DATA[0].view = true;
      break;

    case 'VIEW_CREDENCIADA':
      ELEMENT_DATA[3].view = true;
      break;

    case 'VIEW_DISPONIBILIDADE':
      ELEMENT_DATA[4].view = true;
      break;
  }*/
});

//console.log(permissions)
//console.log(ELEMENT_DATA)

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'view', 'create', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  toggle(field: string) {
    //console.log(field)
    //console.log(ELEMENT_DATA)
  }

}
