import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Greencon';
  //sample comment
  constructor(private router: Router, private _hotkeysService: HotkeysService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.addHotKeys();
  }
  addHotKeys() {
    this._hotkeysService.add(new Hotkey(['f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12',                                        
                                        'fn+f2','fn+f3','fn+f4','fn+f5','fn+f6','fn+f7','fn+f8','ctrl+f8','ctrl+f3','fn+f9','fn+f10','fn+f11','fn+f12',
                                        'ctrl+a', 'ctrl+shift+a','ctrl+shift+b','ctrl+shift+d', 'ctrl+e'], 
    (event: KeyboardEvent, combo: string): boolean => {
      if (combo === 'fn+f2' || combo === 'f2') {
        this.router.navigate(['/utility/calculator']);
      }
      if (combo === 'fn+f3' || combo === 'f3') {
        this.router.navigate(['/transaction/voucherEntry']);
      }
      if (combo === 'fn+f4' || combo === 'f4') {
        this.router.navigate(['/transaction/multiVoucher']);
      }
      if (combo === 'fn+f8' || combo === 'f8') {  
        this.router.navigate(['/view/accountEnquiry']);
      }
      if (combo === 'ctrl+f8' || combo === 'ctrl+f8') {
        this.router.navigate(['/view/customerView']);
      }
      if (combo === 'fn+f9' || combo === 'f9') {
        this.router.navigate(['/view/ledgerView']);
      }
      if (combo === 'fn+f11' || combo === 'f11') {
        this.router.navigate(['/view/managerView']);
      }
      if (combo === 'fn+f12' || combo === 'f12') {
        this.router.navigate(['/passing/centralisedPassing']);
      }
      if (combo === 'ctrl+f3' || combo === 'ctrl+f3') {
        this.router.navigate(['/view/voucherView']);
      }
      if (combo === 'ctrl+shift+b' || combo === 'ctrl+shift+b') {
        // this.router.navigate(['/transfer/batchVoucher']);
        this.router.navigate(['/transaction/batchVoucher']);
      }
      return false;
    }));
  }
}
