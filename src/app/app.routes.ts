import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CharactersComponent } from "./pages/characters/characters.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "characters", component: CharactersComponent },
  { path: "contact", component: ContactComponent },
]

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)

export class AppRoutesModule { }