import './Card.css'

function getSentimentText(score) {
    if (score > 0.3) return "📈 (Positive)";
    if (score < -0.3) return "📉 (Negative)";
    return "⚖️ (Neutral)";
}

function getRecommendationIcon(recommendation) {
    switch(recommendation.toLowerCase()) {
        case 'buy': return '💰';
        case 'sell': return '🔻';
        case 'neutral': return '⏸️';
        default: return '❓';
    }
}

function getBootstrapColor(recommendation) {
    switch(recommendation) {
        case 'buy': return 'success';
        case 'sell': return 'danger';
        case 'neutral': return 'warning';
        default: return 'secondary';
    }
}
/*
function Card() {
  return (
    <>
        <div className="col-md-6 col-lg-4">
            <h3>(Name of company) (Stock Ticker)</h3>
            <h3>0.10 ⚖️ (Neutral)</h3>
            <h4>Confidence: 75.03%</h4>
            <h4>Headlines: 9</h4>
            <p>Analyzed 9/9 headlines using Hugging Face sentiment analysis</p>
        </div>
    </>
  )
}
*/

export default function StockCard() {
  const stock = "Apple Inc. (AAPL)";
  const analysis = {
    sentiment_score: 0.10,
    confidence: 0.7503,
    recommendation: "Neutral",
    reasoning: "Most headlines are balanced between positive and negative sentiment."
  };
  const headlines_count = 9;

  const recommendationClass = analysis.recommendation.toLowerCase();
  const sentimentText = getSentimentText(analysis.sentiment_score);
  const recommendationIcon = getRecommendationIcon(analysis.recommendation);

  return (
    <div className="col-md-6 col-lg-4">
      <div className={`card stock-card ${recommendationClass}`}>
        <div className="card-body">
          <h5 className="card-title">{stock}</h5>
          <p className="sentiment-score">{analysis.sentiment_score.toFixed(2)} {sentimentText}</p>
          <p><strong>Confidence:</strong> {(analysis.confidence * 100).toFixed(2)}%</p>
          <p><strong>Headlines:</strong> {headlines_count}</p>
          <span className={`badge recommendation-badge bg-${getBootstrapColor(recommendationClass)}`}>
              {recommendationIcon} {analysis.recommendation}
          </span>
          <p className="mt-2 small text-muted">{analysis.reasoning}</p>
        </div>
      </div>
    </div>
  );
}


