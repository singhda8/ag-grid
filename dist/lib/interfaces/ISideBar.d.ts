// Type definitions for ag-grid-community v19.1.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IComponent } from "./iComponent";
import { GridPanel } from "../gridPanel/gridPanel";
export interface ISideBar extends IComponent<any> {
    registerGridComp(gridPanel: GridPanel): void;
    refresh(): void;
    setVisible(show: boolean): void;
    isToolPanelShowing(): boolean;
    getPreferredWidth(): number;
    openToolPanel(key: string): void;
    close(): void;
    reset(): void;
    openedItem(): string | null;
}
//# sourceMappingURL=ISideBar.d.ts.map