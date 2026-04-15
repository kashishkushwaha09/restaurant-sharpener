import { useEffect, useMemo, useState } from 'react'
import { extractExpense } from "./gemini";
function PracticeAi() {
  const [input, setInput] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [loading,setLoading]=useState(false);
  const [isListening, setIsListening] = useState(false);
  const handleSubmit = async () => {
      const today=new Date().toISOString().split("T")[0];
    
    if(input.trim()== ""){
      
      return;
    }
    const data = await extractExpense(input);
    const newExpense={
      title:data.title || "Unknown",
      description:data.description || data.category || "No description",
      amount: data.amount || 0,
      date:data.date || today,
    }
    setExpenses((prev) => [...prev, newExpense]);
    setInput("");
  };
 const startListening = () => {
  if (isListening) return;
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.start();
recognition.onstart = () => setIsListening(true);
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log("User said:", transcript);
    setInput(transcript);

  };

  
  recognition.onerror = (event) => {
    console.error("Speech error:", event.error);
  };

  
  recognition.onend = () => {
    console.log("Speech recognition ended");
    setIsListening(false);
  };
};

useEffect(()=>{
 handleSubmit();
},[input])

// const total = useMemo(() => {
//   return expenses.reduce((sum, e) => sum + e.amount, 0);
// }, [expenses]);
  return (
    // <CartProvider>
    //  <Layout>
    //     <Home />
    //  </Layout>
    // </CartProvider>
     <div>
      <h2 className='text-white'>AI Expense Tracker</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter expense..."
      />

      <button onClick={handleSubmit}>Add Expense</button>
      <button onClick={startListening}>
   {isListening ? "🎤 Listening..." : "🎤 Speak"}
</button>
      <ul>
        {expenses.map((exp, i) => (
          <li key={i} className='text-white'>
            ₹{exp.amount} - {exp.title} - {exp.description} - {exp.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PracticeAi
