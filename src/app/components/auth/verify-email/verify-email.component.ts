import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [NgIf],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent {

  constructor(public authService: AuthService) { }
}
