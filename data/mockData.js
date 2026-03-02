export const systemStatus = {
    state: "RUNNING",
    strategy: "Trend Following",
    llmEngine: true,
    marketStatus: "OPEN",
};
export const capitalRisk = {
    totalCapital: 250000,
    availableMargin: 187500,
    todayPnl: 3420.5,
    overallPnl: 28750.25,
    maxDrawdown: -4.2,
    dailyLossLimit: 5000,
    dailyLossUsed: 1580,
};
export const openPositions = [
    { id: "1", symbol: "AAPL", side: "LONG", qty: 150, entryPrice: 189.5, currentPrice: 192.3, unrealizedPnl: 420, stopLoss: 187.0, target: 196.0, timeInTrade: "2h 15m" },
    { id: "2", symbol: "TSLA", side: "SHORT", qty: 50, entryPrice: 248.0, currentPrice: 245.2, unrealizedPnl: 140, stopLoss: 252.0, target: 240.0, timeInTrade: "45m" },
    { id: "3", symbol: "NVDA", side: "LONG", qty: 80, entryPrice: 875.0, currentPrice: 871.5, unrealizedPnl: -280, stopLoss: 865.0, target: 895.0, timeInTrade: "1h 30m" },
    { id: "4", symbol: "SPY", side: "LONG", qty: 200, entryPrice: 512.4, currentPrice: 514.8, unrealizedPnl: 480, stopLoss: 510.0, target: 518.0, timeInTrade: "3h 5m" },
];
export const llmContext = {
    regime: "BULLISH",
    bias: "Upward",
    confidence: 0.78,
    newsSummary: "Fed holds rates steady; tech earnings beat expectations. Market sentiment positive with strong institutional inflows.",
    timestamp: "2026-02-13 09:45:00",
};
export const indicatorScores = [
    { name: "Trend", score: 2, maxScore: 2 },
    { name: "Momentum", score: 1, maxScore: 2 },
    { name: "Volume", score: 1, maxScore: 2 },
    { name: "Volatility", score: 0, maxScore: 2 },
    { name: "Structure", score: 2, maxScore: 2 },
];
export const alerts = [
    { id: "1", severity: "warning", message: "Daily loss limit at 31.6% — approaching threshold", timestamp: "09:42:00" },
    { id: "2", severity: "info", message: "LLM context refreshed — regime: BULLISH (0.78)", timestamp: "09:45:00" },
    { id: "3", severity: "error", message: "Slippage exceeded 0.5% on NVDA entry", timestamp: "09:30:00" },
    { id: "4", severity: "info", message: "Strategy auto-switched to Trend Following", timestamp: "09:15:00" },
    { id: "5", severity: "warning", message: "Broker API latency spike: 340ms", timestamp: "09:10:00" },
];
export const tradeLogs = [
    { id: "1", time: "09:45:12", symbol: "AAPL", strategy: "Trend", llmRegime: "BULLISH", confidence: 0.78, indicatorScore: 6, riskStatus: "OK", decision: "TRADE", reason: "All conditions met" },
    { id: "2", time: "09:42:05", symbol: "MSFT", strategy: "Trend", llmRegime: "BULLISH", confidence: 0.55, indicatorScore: 7, riskStatus: "OK", decision: "BLOCKED", reason: "Confidence < 0.6" },
    { id: "3", time: "09:38:30", symbol: "TSLA", strategy: "Range", llmRegime: "RANGE", confidence: 0.82, indicatorScore: 5, riskStatus: "OK", decision: "BLOCKED", reason: "Indicator score < 6" },
    { id: "4", time: "09:35:18", symbol: "NVDA", strategy: "Trend", llmRegime: "BULLISH", confidence: 0.71, indicatorScore: 8, riskStatus: "OK", decision: "TRADE", reason: "Strong trend + momentum" },
    { id: "5", time: "09:30:44", symbol: "SPY", strategy: "Trend", llmRegime: "BULLISH", confidence: 0.85, indicatorScore: 7, riskStatus: "OK", decision: "TRADE", reason: "All conditions met" },
    { id: "6", time: "09:25:10", symbol: "AMD", strategy: "Trend", llmRegime: "BULLISH", confidence: 0.62, indicatorScore: 6, riskStatus: "WARNING", decision: "BLOCKED", reason: "Risk limit approaching" },
    { id: "7", time: "09:20:33", symbol: "META", strategy: "Range", llmRegime: "RANGE", confidence: 0.45, indicatorScore: 4, riskStatus: "OK", decision: "BLOCKED", reason: "Confidence < 0.6 & score < 6" },
    { id: "8", time: "09:15:22", symbol: "GOOG", strategy: "Trend", llmRegime: "BULLISH", confidence: 0.90, indicatorScore: 9, riskStatus: "OK", decision: "TRADE", reason: "High confidence + strong indicators" },
];
export const equityCurveData = [
    { date: "Mon", equity: 245000 },
    { date: "Tue", equity: 247200 },
    { date: "Wed", equity: 244800 },
    { date: "Thu", equity: 249100 },
    { date: "Fri", equity: 250000 },
    { date: "Sat", equity: 250000 },
    { date: "Sun", equity: 250000 },
];
export const performanceStats = {
    winRate: 64.2,
    avgWin: 842,
    avgLoss: -456,
    maxDrawdown: -4.2,
    tradesPerDay: 8.5,
    strategyBreakdown: [
        { strategy: "Trend Following", trades: 45, winRate: 68, pnl: 12400 },
        { strategy: "Range Trading", trades: 22, winRate: 59, pnl: 5200 },
        { strategy: "Momentum", trades: 15, winRate: 60, pnl: 3800 },
    ],
};
