import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from './member';

import { MemberService } from './member.service';

@Component({
    selector: 'my-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.css'],

})
export class MembersComponent implements OnInit  {
  members: Member[];
  selectedMember: Member;

  //DI(依存性の注入)
  constructor(
      private memberService: MemberService,
      private router: Router
    ){
      //コンストラクタにデータアクセス処理を書かないこと。
  }

  ngOnInit():void{
      //constructorが実行された後、初期化時に呼び出されるコールバック
      this.getMembers();
  }
  onSelect(member: Member): void{
      this.selectedMember = member;
  };

  getMembers(): void {
      this.memberService.getMembers().then(members => this.members = members);
  }

  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedMember.id]);
  }

  add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.memberService.create(name)
      .then(member => {
          this.members.push(member);
          this.selectedMember = null;
      });
  }

  delete(member: Member):void {
      this.memberService.delete(member.id)
      .then(()=> {
          this.members = this.members.filter(m => m !== member);
          if ( this.selectedMember === member ) {
              this.selectedMember = null;
          }
      });
  }

}
