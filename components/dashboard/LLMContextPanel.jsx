import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { llmContext } from "@/data/mockData";
import { Brain, TrendingUp, TrendingDown, Minus, HelpCircle, AlertTriangle } from "lucide-react";
const regimeConfig = {
    BULLISH: { icon: TrendingUp, color: "text-profit" },
    BEARISH: { icon: TrendingDown, color: "text-loss" },
    RANGE: { icon: Minus, color: "text-warning" },
    UNCLEAR: { icon: HelpCircle, color: "text-muted-foreground" },
};
export function LLMContextPanel() {
    const data = llmContext;
    const cfg = regimeConfig[data.regime];
    const Icon = cfg.icon;
    const isNoTradeZone = data.confidence < 0.6;
    return (<Card className="relative overflow-hidden">
      {isNoTradeZone && (<div className="absolute inset-0 bg-loss/10 border-2 border-loss/30 rounded-lg z-10 flex items-center justify-center">
          <div className="text-center">
            <AlertTriangle className="h-8 w-8 text-loss mx-auto mb-2"/>
            <p className="text-loss font-bold text-lg font-mono-data">NO TRADE ZONE</p>
            <p className="text-loss/70 text-xs">Confidence below threshold</p>
          </div>
        </div>)}
      <CardHeader className="pb-3 p-4">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Brain className="h-4 w-4"/> LLM Context & Market Regime
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Regime</span>
          <div className="flex items-center gap-1.5">
            <Icon className={`h-4 w-4 ${cfg.color}`}/>
            <Badge className={`${cfg.color} border-current/30 text-xs`} variant="outline">
              {data.regime}
            </Badge>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Bias</span>
          <span className="text-sm font-mono-data">{data.bias}</span>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-muted-foreground">Confidence</span>
            <span className={`text-sm font-mono-data font-semibold ${data.confidence >= 0.6 ? "text-profit" : "text-loss"}`}>
              {(data.confidence * 100).toFixed(0)}%
            </span>
          </div>
          <Progress value={data.confidence * 100} className={`h-2 ${data.confidence >= 0.6 ? "[&>div]:bg-success" : "[&>div]:bg-loss"}`}/>
        </div>

        <div>
          <span className="text-xs text-muted-foreground block mb-1">News Summary</span>
          <p className="text-xs text-foreground/80 leading-relaxed">{data.newsSummary}</p>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-border">
          <span className="text-xs text-muted-foreground">Last Updated</span>
          <span className="text-xs font-mono-data text-muted-foreground">{data.timestamp}</span>
        </div>
      </CardContent>
    </Card>);
}
