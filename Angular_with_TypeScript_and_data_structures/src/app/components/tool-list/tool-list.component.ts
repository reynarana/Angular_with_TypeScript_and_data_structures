import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
})
export class ToolListComponent {
  tool: string[] = ['Hammer'];
  newTool: string = '';

  addTool() {
    if (this.newTool.trim()) {
      this.tool.push(this.newTool);
      this.newTool = '';
    }
  }

  deleteTool(tool: string) {
    this.tool = this.tool.filter(t => t !== tool);
  }
}
