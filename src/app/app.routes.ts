import { Routes } from '@angular/router';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';

export const routes: Routes = [
    {
        path: 'auth', children: [
            { path: 'login', component: LoginComponent },
            { path: 'registro-usuario', component: SignUpComponent },
            { path: 'olvide-mi-contraseña', component: ForgotPasswordComponent },
            { path: 'verificar-email', component: VerifyEmailComponent },
        ]
    }
];
