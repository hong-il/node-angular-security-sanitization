import { Component } from '@angular/core';

@Component({
  selector: 'app-inner-html-binding',
  templateUrl: './inner-html-binding.component.html',
})
export class InnerHtmlBindingComponent {
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
}