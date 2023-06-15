import { Component } from '@angular/core';
import { TranslateService } from './translate';
import { LanguagesService } from './translate/languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public translatedText: string;
    public supportedLanguages = [];
    public currentLanguage: string;

    constructor(private translateService: TranslateService, languagesService: LanguagesService) {
        this.selectLanguage('fr');
        this.currentLanguage = translateService.currentLang;

        var dict = languagesService.getAll();
        for (let key in dict) {
          this.supportedLanguages.push({ key: key, value: key });
        }
    }

    selectLanguage(lang: string) {
      this.translateService.use(lang);
      this.currentLanguage = this.translateService.currentLang;
      this.refreshText();
    }

    refreshText() {
      this.translatedText = this.translateService.instant('hello world');
    }
}
