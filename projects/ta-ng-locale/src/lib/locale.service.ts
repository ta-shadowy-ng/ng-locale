import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private pCurrent = 'en-US';

  private pOnChange = new Subject<string>();

  private pDecimalSeparator = '';

  get current(): string {
    return this.pCurrent;
  }

  get onChange(): Observable<string> {
    return this.pOnChange;
  }

  get decimalSeparator(): string {
    return this.pDecimalSeparator;
  }

  constructor() {
    this.initVariables();
  }

  set(locale: string): void {
    if (this.pCurrent === locale) {
      return;
    }
    this.pCurrent = locale;
    this.initVariables();
    this.pOnChange.next(locale);
  }

  private initVariables(): void {
    // eslint-disable-next-line prefer-destructuring
    this.pDecimalSeparator = new Intl.NumberFormat(this.current).format(1.1)[0];
  }
}
