import { useState } from "react";
import api from "../api";
import "./Editor.css";

function Editor({ onSave , onReset}) {
    const [text, setText] = useState("");

    // Send text to backend and save version
    const handleSave = async () => {
        if (!text.trim()) return;

        try {
            const res = await api.post("/save-version", { text });
            onSave(res.data.entry);
        } catch (error) {
            console.log("Error saving version:", error);
        }
    };

    return (
        <div className="editor-container">
            {/* User input area */}
            <textarea
                className="editor-textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your content here..."
            />

            {/* Trigger save version */}
            <div className="editor-btn-area">
                <button className="editor-save-btn" onClick={handleSave}>
                    Save Version
                </button>
                <button className="editor-reset-history-btn" onClick={onReset}>
                    Reset History
                </button>
            </div>
        </div>
    );
}

export default Editor;