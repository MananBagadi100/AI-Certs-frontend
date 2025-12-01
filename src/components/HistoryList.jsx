import "./HistoryList.css";
//This displays the verified history along with timestamps
function HistoryList({ versions }) {
    return (
        <div className="history-wrapper">
            <h2 className="history-title">Version History</h2>

            {versions.length === 0 && (
                <p className="history-empty">No versions saved yet.</p>
            )}

            {versions.map((v) => (
                <div key={v.id} className="history-card">
                    <p><strong>Timestamp:</strong> {v.timestamp}</p>

                    <p>
                        <strong>Added:</strong>{" "}
                        {v.addedWords.length > 0 ? v.addedWords.join(", ") : "None"}
                    </p>

                    <p>
                        <strong>Removed:</strong>{" "}
                        {v.removedWords.length > 0 ? v.removedWords.join(", ") : "None"}
                    </p>

                    <p>
                        <strong>Old Length:</strong> {v.oldLength} |{" "}
                        <strong>New Length:</strong> {v.newLength}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default HistoryList;