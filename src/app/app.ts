import { Component, computed, signal, viewChild } from '@angular/core';
import { Icon } from './ui/icon';
import { BriefDialog } from './ui/brief-dialog';
import { Reveal } from './ui/reveal';
@Component({
  selector: 'app-root',
  imports: [Icon, BriefDialog, Reveal],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class App {
  readonly menuOpen = signal(false);
  readonly selectedStep = signal(0);
  readonly dialog = viewChild.required(BriefDialog);
  readonly year = new Date().getFullYear();
  readonly steps = [
    {
      title: 'Presença',
      subtitle: 'Seu negócio no lugar certo.',
      text: 'Um site que apresenta seu valor, funciona em qualquer tela e facilita o próximo contato.',
      tags: ['Sites institucionais', 'Landing pages'],
      service: 'Sites e landing pages',
      icon: 'globe',
    },
    {
      title: 'Conexão',
      subtitle: 'Menos tarefas. Mais fluxo.',
      text: 'Conecte atendimento, formulários e sistemas para deixar o trabalho repetitivo com a tecnologia.',
      tags: ['Integrações', 'Automações', 'Chatbots'],
      service: 'Automações e integrações',
      icon: 'flow',
    },
    {
      title: 'Inteligência',
      subtitle: 'Seus dados contam uma história.',
      text: 'Transforme informações espalhadas em indicadores claros, relatórios úteis e decisões fundamentadas.',
      tags: ['Dashboards', 'Pipelines de dados', 'IA aplicada'],
      service: 'Dados e Business Intelligence',
      icon: 'chart',
    },
    {
      title: 'Evolução',
      subtitle: 'Uma solução do seu tamanho.',
      text: 'Quando ferramentas prontas não bastam, construímos sistemas e aplicativos para o seu jeito de trabalhar.',
      tags: ['Software sob medida', 'Aplicativos', 'APIs'],
      service: 'Software e aplicativos',
      icon: 'layers',
    },
  ];
  readonly currentStep = computed(() => this.steps[this.selectedStep()]);
  start(service?: string) {
    this.menuOpen.set(false);
    this.dialog().open(service);
  }
}
