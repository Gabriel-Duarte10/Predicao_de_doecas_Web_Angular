import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mentais = Array();
  cabecas = Array();
  frontais = Array();
  extremidades = Array();
  corpoTodos = Array();
  doençasSelecionadas = Array();
  //modal
   closeResult: string = '';
   tabela = [];
   @ViewChild("mentalModal") mentalModal: TemplateRef<any>
   @ViewChild("cabecasModal") cabecasModal: TemplateRef<any>
   @ViewChild("frontaisModal") frontaisModal: TemplateRef<any>
   @ViewChild("extremidadesModal") extremidadesModal: TemplateRef<any>
   @ViewChild("corpoTodosModal") corpoTodosModal: TemplateRef<any>

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) {}

  ngOnInit() {
    this.addListas();
  }
  addListas()
  {
    this.mentais.push(
      {
        "id": "anxiety",
        "nome": "ansiedade",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "mood_swings",
        "nome": "mudanças de humor",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "restlessness",
        "nome": "inquietação",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "nausea",
        "nome": "náusea",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "unsteadiness",
        "nome": "instabilidade",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "depression",
        "nome": "depressão",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "irritability",
        "nome": "irritabilidade",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "lack_of_concentration",
        "nome": "Falta de concentração",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "increased_appetite",
        "nome": "aumento do apetite",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "dizziness",
        "nome": "tontura",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "slurred_speech",
        "nome": "fala arrastada",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "loss_of_balance",
        "nome": "perda de equilíbrio",
        "completed": "",
        "color": 'primary'
      }
    );
    this.cabecas.push(
      {
        "id": "continuous_sneezing",
        "nome": "espirros contínuos",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "phlegm",
        "nome": "catarro",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "sinus_pressure",
        "nome": "pressão sinusal",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "runny_nose",
        "nome": "coriza",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "congestion",
        "nome": "congestionamento",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "rusty_sputum",
        "nome": "escarro enferrujado",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "blood_in_sputum",
        "nome": "sangue no escarro",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "yellow_crust_ooze",
        "nome": "crosta amarela escorrendo",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "sunken_eyes",
        "nome": "olhos fundos",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "headache",
        "nome": "dor de cabeça",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "loss_of_appetite",
        "nome": "perda de apetite",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "pain_behind_the_eyes",
        "nome": "dor atrás dos olhos",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "yellowing_of_eyes",
        "nome": "olhos amarelados",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "blurred_and_distorted_vision",
        "nome": "visão turva e distorcida",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "throat_irritation",
        "nome": "irritação na garganta",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "redness_of_eyes",
        "nome": "vermelhidão dos olhos",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "neck_pain",
        "nome": "dor de pescoço",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "bruising",
        "nome": "contusão",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "puffy_face_and_eyes",
        "nome": "rosto e olhos inchados",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "drying_and_tingling_lips",
        "nome": "lábios secando e formigando",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "stiff_neck",
        "nome": "torcicolo",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "loss_of_smell",
        "nome": "perda de olfato",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "watering_from_eyes",
        "nome": "lacrimejando dos olhos",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "visual_disturbances",
        "nome": "distúrbios visuais",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "pus_filled_pimples",
        "nome": "espinhas cheias de pus",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "blackheads",
        "nome": "cravos",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "ulcers_on_tongue",
        "nome": "úlceras na língua",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "patches_in_throat",
        "nome": "manchas na garganta",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "cough",
        "nome": "tosse",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "red_sore_around_nose",
        "nome": "ferida vermelha ao redor do nariz",
        "completed": "",
        "color": 'primary'
      }
    );
    this.frontais.push(
      {
        "id": "stomach_pain",
        "nome": "dor de estômago",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "back_pain",
        "nome": "dor nas costas",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "abdominal_pain",
        "nome": "dor abdominal",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "chest_pain",
        "nome": "dor no peito",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "pain_during_bowel_movements",
        "nome": "dor durante os movimentos intestinais",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "pain_in_anal_region",
        "nome": "dor na região anal",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "belly_pain",
        "nome": "dor de barriga",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "vomiting",
        "nome": "vômito",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "indigestion",
        "nome": "indigestão",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "constipation",
        "nome": "Prisão de ventre",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "swelling_of_stomach",
        "nome": "inchaço do estômago",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "cramps",
        "nome": "cólicas",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "excessive_hunger",
        "nome": "fome excessiva",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "bladder_discomfort",
        "nome": "desconforto na bexiga",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "stomach_bleeding",
        "nome": "sangramento no estômago",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "distention_of_abdomen",
        "nome": "distensão abdominal",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "diarrhoea",
        "nome": "diarréia",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "dark_urine",
        "nome": "urina escura",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "yellow_urine",
        "nome": "urina amarela",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "bloody_stool",
        "nome": "fezes sangrentas",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "irritation_in_anus",
        "nome": "irritação no ânus",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "foul_smell_of urine",
        "nome": "mau cheiro de urina",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "continuous_feel_of_urine",
        "nome": "sensação contínua de urina",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "passage_of_gases",
        "nome": "passagem de gases",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "abnormal_menstruation",
        "nome": "menstruação anormal",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "acidity",
        "nome": "acidez",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "breathlessness",
        "nome": "falta de ar",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "acute_liver_failure",
        "nome": "insuficiência hepática aguda",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "fluid_overload",
        "nome": "sobrecarga de fluido",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "swelled_lymph_nodes",
        "nome": "gânglios linfáticos inchados",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "enlarged_thyroid",
        "nome": "tireóide aumentada",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "spinning_movements",
        "nome": "movimentos giratórios",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "history_of_alcohol_consumption",
        "nome": "histórico de consumo de álcool",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "fluid_overload",
        "nome": "sobrecarga de fluido",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "palpitations",
        "nome": "palpitações",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "fast_heart_rate",
        "nome": "frequência cardíaca rápida",
        "completed": "",
        "color": 'primary'
      }
    );
    this.extremidades.push(
      {
        "id": "joint_pain",
        "nome": "dor nas articulações",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "knee_pain",
        "nome": "dor no joelho",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "hip_joint_pain",
        "nome": "dor na articulação do quadril",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "muscle_pain",
        "nome": "dor muscular",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "painful_walking",
        "nome": "caminhada dolorosa",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "weakness_in_limbs",
        "nome": "fraqueza nos membros",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "muscle_weakness",
        "nome": "fraqueza muscular",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "weakness_of_one_body_side",
        "nome": "fraqueza de um lado do corpo",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "small_dents_in_nails",
        "nome": "pequenos amassados ​​nas unhas",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "inflammatory_nails",
        "nome": "unhas inflamatórias",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "brittle_nails",
        "nome": "unhas quebradiças",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "movement_stiffness",
        "nome": "rigidez do movimento",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "swollen_extremeties",
        "nome": "extremidades inchadas",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "swollen_legs",
        "nome": "pernas inchadas",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "swelling_joints",
        "nome": "articulações inchadas",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "cold_hands_and_feets",
        "nome": "mãos e pés frios",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "receiving_blood_transfusion",
        "nome": "recebendo transfusão de sangue",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "receiving_unsterile_injections",
        "nome": "recebendo injeções não estéreis",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "prominent_veins_on_calf",
        "nome": "veias proeminentes na panturrilha",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "scurring",
        "nome": "correndo",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "blister",
        "nome": "bolha",
        "completed": "",
        "color": 'primary'
      }
    );
    this.corpoTodos.push(
      {
        "id": "skin_rash",
        "nome": "erupção cutânea",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "yellowish_skin",
        "nome": "pele amarelada",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "red_spots_over_body",
        "nome": "manchas vermelhas no corpo",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "skin_peeling",
        "nome": "descamação da pele",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "weight_gain",
        "nome": "ganho de peso",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "weight_loss",
        "nome": "perda de peso",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "obesity",
        "nome": "obesidade",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "high_fever",
        "nome": "febre alta",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "dehydration",
        "nome": "desidratação",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "mild_fever",
        "nome": "febre baixa",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "muscle_wasting",
        "nome": "perda de massa muscular",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "fatigue",
        "nome": "fadiga",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "malaise",
        "nome": "Mal-estar",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "coma",
        "nome": "coma",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "itching",
        "nome": "coceira",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "shivering",
        "nome": "estremecendo",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "chills",
        "nome": "arrepios",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "sweating",
        "nome": "sudorese",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "swollen_blood_vessels",
        "nome": "vasos sanguíneos inchados",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "toxic_look_(typhos)",
        "nome": "aparência tóxica (tifo)",
        "completed": "",
        "color": 'primary'
      },
      {
        "id": "irregular_sugar_level",
        "nome": "nível de açúcar irregular",
        "completed": "",
        "color": 'primary'
      }
    );
  }
  open(content:any, data?:any) {
    this.modalService.open(content, { size: 'xl', scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  updateAllComplete(sintoma: any, cat: number){

    if(this.doençasSelecionadas.find(x => x == sintoma.id))
    {
      this.doençasSelecionadas.splice(this.doençasSelecionadas.findIndex(x => x == sintoma.id), 1);
      switch (cat) {
        case 1:
          this.mentais.find(x => x.id == sintoma.id).completed = "";
          break;
        case 2:
          this.cabecas.find(x => x.id == sintoma.id).completed = "";
          break;
        case 3:
          this.frontais.find(x => x.id == sintoma.id).completed = "";
          break;
        case 4:
          this.extremidades.find(x => x.id == sintoma.id).completed = "";
          break;
        case 5:
          this.corpoTodos.find(x => x.id == sintoma.id).completed = "";
          break;
        default:
          break;
      }
    }else{
      this.doençasSelecionadas.push(sintoma.id)
      switch (cat) {
        case 1:
          this.mentais.find(x => x.id == sintoma.id).completed = "completed";
          break;
        case 2:
          this.cabecas.find(x => x.id == sintoma.id).completed = "completed";
          break;
        case 3:
          this.frontais.find(x => x.id == sintoma.id).completed = "completed";
          break;
        case 4:
          this.extremidades.find(x => x.id == sintoma.id).completed = "completed";
          break;
        case 5:
          this.corpoTodos.find(x => x.id == sintoma.id).completed = "completed";
          break;
        default:
          break;
      }
    }
    console.log(this.doençasSelecionadas);

  }
}
