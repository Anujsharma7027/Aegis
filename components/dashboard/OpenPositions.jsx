import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from "@/components/ui/alert-dialog";
import { openPositions } from "@/data/mockData";
import { X, ArrowRightLeft, Zap } from "lucide-react";
function formatCurrency(v) {
    return v.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
export function OpenPositions() {
    const [positions, setPositions] = useState(openPositions);
    const [dialog, setDialog] = useState(null);
    const handleAction = () => {
        if (!dialog)
            return;
        if (dialog.type === "close" || dialog.type === "emergency") {
            setPositions(p => p.filter(pos => pos.id !== dialog.position.id));
        }
        setDialog(null);
    };
    return (<Card>
      <CardHeader className="pb-3 p-4">
        <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-xs">
                <TableHead>Symbol</TableHead>
                <TableHead>Side</TableHead>
                <TableHead className="text-right">Qty</TableHead>
                <TableHead className="text-right">Entry</TableHead>
                <TableHead className="text-right">Current</TableHead>
                <TableHead className="text-right">PnL</TableHead>
                <TableHead className="text-right">SL</TableHead>
                <TableHead className="text-right">Target</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {positions.map((pos) => (<TableRow key={pos.id} className="text-xs">
                  <TableCell className="font-mono-data font-semibold">{pos.symbol}</TableCell>
                  <TableCell>
                    <Badge className={pos.side === "LONG" ? "bg-success/20 text-success border-success/30 text-[10px]" : "bg-loss/20 text-loss border-loss/30 text-[10px]"}>
                      {pos.side}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono-data">{pos.qty}</TableCell>
                  <TableCell className="text-right font-mono-data">{formatCurrency(pos.entryPrice)}</TableCell>
                  <TableCell className="text-right font-mono-data">{formatCurrency(pos.currentPrice)}</TableCell>
                  <TableCell className={`text-right font-mono-data font-semibold ${pos.unrealizedPnl >= 0 ? "text-profit" : "text-loss"}`}>
                    {pos.unrealizedPnl >= 0 ? "+" : ""}{formatCurrency(pos.unrealizedPnl)}
                  </TableCell>
                  <TableCell className="text-right font-mono-data text-muted-foreground">{formatCurrency(pos.stopLoss)}</TableCell>
                  <TableCell className="text-right font-mono-data text-muted-foreground">{formatCurrency(pos.target)}</TableCell>
                  <TableCell className="font-mono-data text-muted-foreground">{pos.timeInTrade}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setDialog({ type: "close", position: pos })}>
                        <X className="h-3 w-3"/>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setDialog({ type: "moveSL", position: pos })}>
                        <ArrowRightLeft className="h-3 w-3"/>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-loss" onClick={() => setDialog({ type: "emergency", position: pos })}>
                        <Zap className="h-3 w-3"/>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>))}
              {positions.length === 0 && (<TableRow>
                  <TableCell colSpan={10} className="text-center text-muted-foreground py-8">No open positions</TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </div>

        <AlertDialog open={!!dialog} onOpenChange={() => setDialog(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {dialog?.type === "close" && "Close Position"}
                {dialog?.type === "moveSL" && "Move Stop-Loss to Breakeven"}
                {dialog?.type === "emergency" && "⚠️ Emergency Exit"}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {dialog?.type === "close" && `Close ${dialog.position.symbol} ${dialog.position.side} position at market price?`}
                {dialog?.type === "moveSL" && `Move stop-loss for ${dialog?.position.symbol} to entry price (${formatCurrency(dialog?.position.entryPrice || 0)})?`}
                {dialog?.type === "emergency" && `Emergency exit ${dialog.position.symbol}. This will close at market immediately.`}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleAction} className={dialog?.type === "emergency" ? "bg-loss hover:bg-loss/90 text-white" : ""}>
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>);
}
