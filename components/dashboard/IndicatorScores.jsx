import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { indicatorScores } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Cell } from "recharts";
function getScoreColor(score, max) {
    const pct = score / max;
    if (pct >= 0.75)
        return "hsl(142, 71%, 45%)";
    if (pct >= 0.5)
        return "hsl(38, 92%, 50%)";
    return "hsl(0, 84%, 60%)";
}
export function IndicatorScores() {
    const total = indicatorScores.reduce((sum, g) => sum + g.score, 0);
    const maxTotal = indicatorScores.reduce((sum, g) => sum + g.maxScore, 0);
    const isTradable = total >= 6;
    const chartData = indicatorScores.map(g => ({
        name: g.name,
        score: g.score,
        max: g.maxScore,
    }));
    return (<Card>
      <CardHeader className="pb-3 p-4">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span>Indicator Group Scores</span>
          <span className={`font-mono-data text-lg ${isTradable ? "text-profit" : "text-loss"}`}>
            {total} / {maxTotal}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 8, top: 0, bottom: 0 }}>
              <XAxis type="number" domain={[0, 2]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false}/>
              <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} width={75}/>
              <ReferenceLine x={1.2} stroke="hsl(220, 9%, 46%)" strokeDasharray="3 3" label=""/>
              <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={16}>
                {chartData.map((entry, i) => (<Cell key={i} fill={getScoreColor(entry.score, entry.max)}/>))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 pt-3 border-t border-border text-center">
          <span className={`text-xs font-semibold font-mono-data ${isTradable ? "text-profit" : "text-loss"}`}>
            {isTradable ? "✅ TRADABLE — Score ≥ 6" : "🚫 NOT TRADABLE — Score < 6"}
          </span>
        </div>
      </CardContent>
    </Card>);
}
