import { useState } from "react";
import { Power, Clock, Brain, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog";
import { systemStatus } from "@/data/mockData";
const stateColors = {
    RUNNING: "bg-success",
    PAUSED: "bg-warning",
    STOPPED: "bg-loss",
};
const stateTextColors = {
    RUNNING: "text-success",
    PAUSED: "text-warning",
    STOPPED: "text-loss",
};
export function SystemStatusBar() {
    const [status, setStatus] = useState(systemStatus);
    return (<div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-3 flex-wrap">
      {/* System State */}
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${stateColors[status.state]} animate-pulse`}/>
        <span className={`font-mono-data text-sm font-semibold ${stateTextColors[status.state]}`}>
          {status.state}
        </span>
      </div>

      {/* Strategy */}
      <div className="flex items-center gap-1.5">
        <Zap className="h-3.5 w-3.5 text-muted-foreground"/>
        <span className="text-sm text-muted-foreground">Strategy:</span>
        <Badge variant="secondary" className="font-mono-data text-xs">{status.strategy}</Badge>
      </div>

      {/* LLM Engine */}
      <div className="flex items-center gap-1.5">
        <Brain className="h-3.5 w-3.5 text-muted-foreground"/>
        <span className="text-sm text-muted-foreground">LLM:</span>
        {status.llmEngine ? (<Badge className="bg-success/20 text-success border-success/30 text-xs">ON</Badge>) : (<Badge variant="secondary" className="text-xs">OFF</Badge>)}
      </div>

      {/* Market Status */}
      <div className="flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5 text-muted-foreground"/>
        <span className="text-sm text-muted-foreground">Market:</span>
        <Badge className={status.marketStatus === "OPEN"
            ? "bg-success/20 text-success border-success/30 text-xs"
            : "bg-loss/20 text-loss border-loss/30 text-xs"}>
          {status.marketStatus}
        </Badge>
      </div>

      {/* Kill Switch */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="sm" className="bg-loss hover:bg-loss/90 text-white font-bold shadow-lg shadow-loss/25 gap-1.5">
            <Power className="h-4 w-4"/>
            KILL SWITCH
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-loss">⚠️ Emergency Kill Switch</AlertDialogTitle>
            <AlertDialogDescription>
              This will immediately stop all trading, close all open positions, and disable the system. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-loss hover:bg-loss/90 text-white" onClick={() => setStatus(s => ({ ...s, state: "STOPPED" }))}>
              Confirm Kill
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>);
}
