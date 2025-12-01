import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import HistoryList from "./components/HistoryList";
import api from "./api";
import "./App.css";

function App() {
    const [versions, setVersions] = useState([]);

    // Load all existing versions on reload or first render
    useEffect(() => {
        fetchVersions();
    }, []);

    // Fetch saved versions from backend
    const fetchVersions = async () => {
        try {
            const res = await api.get("/versions");

            // Safety check as backend must return an array (prevents crashing)
            if (!Array.isArray(res.data)) {
                console.error("Unexpected response format:", res.data);
                setVersions([]);
                return;
            }

            setVersions(res.data);
        } catch (error) {
            console.log("Error fetching versions:", error);
            setVersions([]); // Prevent frontend crash
        }
    };

    // Updating UI instantly when a new version is saved
    const handleSave = (newEntry) => {
        setVersions((prev) => [...prev, newEntry]);
    };

    return (
        <>
            {/* Main UI layout */}
            <Navbar />

            <div className="container">
                <h1 className="title">Mini Audit Trail Generator</h1>

                <Editor onSave={handleSave} />
                <HistoryList versions={versions} />
            </div>
        </>
    );
}

export default App;