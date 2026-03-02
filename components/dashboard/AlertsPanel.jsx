import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { alerts } from "@/data/mockData";
import { AlertTriangle, Info, XCircle, X } from "lucide-react";
const severityConfig = {
    info: { icon: Info, color: "text-primary", bg: "bg-primary/5" },
    warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/5" },
    error: { icon: XCircle, color: "text-loss", bg: "bg-loss/5" },
};
export function AlertsPanel() {
    const [items, setItems] = useState(alerts);
    const dismiss = (id) => setItems(a => a.filter(x => x.id !== id));
    return (<Card>
      <CardHeader className="pb-3 p-4">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span>Alerts & Warnings</span>
          <span className="text-xs text-muted-foreground font-normal">{items.length} active</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2 max-h-64 overflow-auto">
        {items.map((alert) => {
            const cfg = severityConfig[alert.severity];
            const Icon = cfg.icon;
            return (<div key={alert.id} className={`flex items-start gap-2 p-2 rounded-md ${cfg.bg} border border-border`}>
              <Icon className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${cfg.color}`}/>
              <div className="flex-1 min-w-0">
                <p className="text-xs leading-relaxed">{alert.message}</p>
                <p className="text-[10px] text-muted-foreground font-mono-data mt-0.5">{alert.timestamp}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-5 w-5 shrink-0" onClick={() => dismiss(alert.id)}>
                <X className="h-3 w-3"/>
              </Button>
            </div>);
        })}
        {items.length === 0 && (<p className="text-center text-muted-foreground text-xs py-4">No active alerts</p>)}
      </CardContent>
    </Card>);
}
