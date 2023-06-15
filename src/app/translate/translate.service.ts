import {Injectable, Inject} from '@angular/core';
import { LanguagesService } from './languages';

@Injectable()
export class TranslateService {
  private currentLanguage: string;
  private languages: any;

  public get currentLang() {
    return this.currentLanguage;
  }

  constructor(private languagesService: LanguagesService) {
      this.languages = languagesService.getAll();
   }

  public use(lang: string): void {
    this.currentLanguage = lang;
  }

  private translate(key: string): string {
    let translation = key;

    if (this.languages[this.currentLanguage] && this.languages[this.currentLanguage][key]) {
      return this.languages[this.currentLanguage][key];
    }

    return translation;
  }

  public instant(key: string) {
    return this.translate(key);
  }
}
