import {Injectable, Inject} from '@angular/core';

import { EN_NAME, EN_TRANSLATION } from './lang-en';
import { FR_NAME, FR_TRANSLATION } from './lang-fr';
import { ES_NAME, ES_TRANSLATION } from './lang-es';
import { DE_NAME, DE_TRANSLATION } from './lang-de';

@Injectable()
export class LanguagesService {
  getAll() {
    return {
		    [EN_NAME]: EN_TRANSLATION,
		    [FR_NAME]: FR_TRANSLATION,
            [ES_NAME]: ES_TRANSLATION,
		    [DE_NAME]: DE_TRANSLATION,
    }
  }
};
